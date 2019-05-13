package kr.co.mantech.accordion.common;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.kamranzafar.jtar.TarEntry;
import org.kamranzafar.jtar.TarOutputStream;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.util.UrlPathHelper;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

public class Util {
	private static Logger logger = LoggerFactory.getLogger(Util.class);
	
	public static class SlackSetting
	{
		public String url = "";
		public String token = "";
		public String getUrl() {
			return url;
		}
		public String getToken() {
			return token;
		}
		
	}
	
	public static boolean GetLicense()
	{
		//return false;
		
		
		/*LicenseDesc desc = AccordionLicenseManager.getInstance().getLicenseInfo();
		
		if (desc == null)
		{
			return false;
		}*/

		return true;
		
		
	}

	
    public static String formatElapsedTime(long elapsed) {
    	
    	elapsed = new Date().getTime() - elapsed;
    	
        int millisec = (int) (elapsed % 1000L) / 100;
        int seconds = (int) (elapsed / 1000L);
        int minutes = seconds / 60;
        seconds %= 60;
        int hours = minutes / 60;
        minutes %= 60;
        int days = hours / 24;
        hours %= 24;
         
        if (days > 0) {
        	if (hours > 0) {
        		return String.format("%2d day %2d hr", days, hours);
        	} else {
        		return String.format("%2d day", days);
        	}
        } else if (hours > 0) {
        	if (minutes > 0) {
        		return String.format("%2d hr %2d min", hours, minutes);
        	} else {
        		return String.format("%2d hr", hours);
        	}
        } else if (minutes > 0) {
        	if (seconds > 0) {
        		return String.format("%2d min %2d sec", minutes, seconds);
        	} else {
        		return String.format("%2d min", minutes);
        	}
        } else {
            return String.format("%2d.%2d sec", seconds, millisec);
        }
    }
	
	
    public static Locale getDefaultLocale() {
        return Locale.KOREAN;
    }
    
	public static void tarFolder(String parent, String path, TarOutputStream out) throws IOException {
		BufferedInputStream origin = null;
		File f = new File(path);
		String files[] = f.list();

		// is file
		if (files == null) {
			files = new String[1];
			files[0] = f.getName();
		}

		parent = ((parent == null) ? (f.isFile()) ? "" : f.getName() + "/" : parent + f.getName() + "/");

		for (int i = 0; i < files.length; i++) {
			logger.debug("Adding: " + files[i]);
			File fe = f;
			byte data[] = new byte[2048];

			if (f.isDirectory()) {
				fe = new File(f, files[i]);
			}

			if (fe.isDirectory()) {
				String[] fl = fe.list();
				if (fl != null && fl.length != 0) {
					tarFolder(parent, fe.getPath(), out);
				} else {
					TarEntry entry = new TarEntry(fe, parent + files[i] + "/");
					out.putNextEntry(entry);
				}
				continue;
			}

			FileInputStream fi = new FileInputStream(fe);
			origin = new BufferedInputStream(fi);
			TarEntry entry = new TarEntry(fe, parent + files[i]);
			out.putNextEntry(entry);

			int count;

			while ((count = origin.read(data)) != -1) {
				out.write(data, 0, count);
			}
			
			origin.close();
		}

		
	}
	
	public static String GetExt(String filename)
	{
		 String ext = "";
	     
	     int index = filename.lastIndexOf(".");
	     if (index != -1) {
	    	 ext  = filename.substring(index + 1);
	     }
	     
	     return ext;

	}
	
    public static String CombineURL(String... paths)
    {
    	String url = null;
		try {
			URL target  = new URL(paths[0]);
			
			url = target.getProtocol();
			url += "://";
			url += target.getHost();
			
			int port = target.getPort();
			
			url += ":" + port;

			
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

        for (int i = 1; i < paths.length ; i++) {
        	url += "/";
           	url += paths[i];
        }

        return url;
    }
    
    public static String PathCombine(String... paths)
    {
        File file = new File(paths[0]);

        for (int i = 1; i < paths.length ; i++) {
            file = new File(file, paths[i]);
        }

        return file.getPath();
    }
    
    

	public static String read(String fileName)
	{

		String result = "";
		
		BufferedReader br = null;
		try {
			br = new BufferedReader(new FileReader(fileName));
		    String line;
		    while ((line = br.readLine()) != null) {
		    	result += line;
		    	result += "\r\n";
		    }
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
		    e.printStackTrace();
		}finally {
		    if(br != null) try {br.close(); } catch (IOException e) {}
		}
		
		
		return result;

	}
	
	public static boolean isShowNamespace(String namespace)
	{
		if (namespace.equals("kube-system"))
		{
			return false;
		}
		
		return true;
	}
    
    public static boolean uploadFile(byte fileData[], String path, String fileName)
    {
    	FileOutputStream fos = null;
    	
	    try {
	    	fos = new FileOutputStream(path + "/" + fileName);
	    	fos.write(fileData);
         
        }catch(Exception e){
             
            e.printStackTrace();
             
        }finally{
             
            if(fos != null){
                 
                try{
                    fos.close();
                }catch(Exception e){}
                 
                }
        }// try end;
         

    	
    	return false;
    }
    
    public static float getFloatToString(String value)
    {
    	if (value == null)
    	{
    		return 0;
    	}
    	
    	if (value.isEmpty())
    	{
    		return 0;
    	}
    	
    	return Float.parseFloat(value);
    }
    
    public static int getIntToString(String value)
    {
    	if (value == null)
    	{
    		return 0;
    	}
    	
    	if (value.isEmpty())
    	{
    		return 0;
    	}
    	
    	return Integer.parseInt(value);
    }
    
    public static String getAppLogo(String appType)
    {
    	
    	if(appType.equals("tomcat"))
    	{
    		return "uploads/tomcat-logo.png";
    	}
    	else if(appType.equals("wildfly"))
    	{
    		return "uploads/wildfly-logo.png";
    	} 	
    	else if(appType.equals("nginx"))
    	{
    		return "uploads/nginx-logo.png";
    	} 	 	
    	else if(appType.equals("apache"))
    	{
    		return "uploads/apache-logo.png";
    	} 	 

    	
    	return "";
    }
    

    
    public static long getUnixTime(String dest)
    {
    	long reult = 0;
    	 String locTime = null;
    	TimeZone tz = TimeZone.getTimeZone("GMT+09:00"); 
		SimpleDateFormat sdf  = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
		SimpleDateFormat tdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		try {
			Date parseDate = sdf.parse(dest);
			reult = parseDate.getTime();
			int offset = tz.getOffset(reult);
			
			  locTime = tdf.format(reult + offset);
			  locTime = locTime.replace("+0000", "");
			 
		} catch(Exception e) {
			  e.printStackTrace();
		}
		  
		return reult;
    }
    

    public static String localtimeToUTC(String inputdatetime){
        String utcTime = null;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        SimpleDateFormat tdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
        TimeZone tz  = TimeZone.getTimeZone("GMT+09:00"); 
          
        try {
            Date parseDate = sdf.parse(inputdatetime);
            long milliseconds = parseDate.getTime();
            int offset = tz.getOffset(milliseconds);
            utcTime = tdf.format(milliseconds - offset);
            utcTime = utcTime.replace("+0000", "");
        } catch (Exception e) {
            return inputdatetime;
        }
          
        return utcTime;
    }
    
    public static String convertUTCToLocaltime(String localTime) {
    	  String locTime = null;

		  TimeZone tz = TimeZone.getTimeZone("GMT+09:00"); 
		  SimpleDateFormat sdf  = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
		  SimpleDateFormat tdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		  try {
			  Date parseDate = sdf.parse(localTime);
			  long milliseconds = parseDate.getTime();
			  int offset = tz.getOffset(milliseconds);
			  locTime = tdf.format(milliseconds + offset);
			  locTime = locTime.replace("+0000", "");
		   } catch(Exception e) {
			  e.printStackTrace();

		 }
		  
		 return locTime;
    }

    

    public static String UTCToLocaltime(String dest)
    {
    	
    	if (dest == null)
    	{
    		return "";
    	}
    	
    	String locTime = null;

		TimeZone tz = TimeZone.getTimeZone("GMT+09:00"); 
		SimpleDateFormat sdf  = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
		SimpleDateFormat tdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		try {
		 Date parseDate = sdf.parse(dest);
		 long milliseconds = parseDate.getTime();
		 int offset = tz.getOffset(milliseconds);
		 locTime = tdf.format(milliseconds + offset);
		 locTime = locTime.replace("+0000", "");
		} catch(Exception e) {
		  e.printStackTrace();
		}
		  
		 return locTime;
    }

	public static String MD5(String str){
		String MD5 = ""; 
		try{
			MessageDigest md = MessageDigest.getInstance("MD5"); 
			md.update(str.getBytes()); 
			byte byteData[] = md.digest();
			StringBuffer sb = new StringBuffer(); 
			for(int i = 0 ; i < byteData.length ; i++){
				sb.append(Integer.toString((byteData[i]&0xff) + 0x100, 16).substring(1));
			}
			MD5 = sb.toString();
			
		}catch(NoSuchAlgorithmException e){
			e.printStackTrace(); 
			MD5 = null; 
		}
		return MD5;
	}
	
	public static String byteCalculation(String bytes) {
        String retFormat = "0";
       Double size = Double.parseDouble(bytes);

        String[] s = { "B", "Ki", "Mi", "Gi", "Ti", "Pi" };
       

        if (bytes != "0") {
              int idx = (int) Math.floor(Math.log(size) / Math.log(1024));
              DecimalFormat df = new DecimalFormat("#,###.##");
              double ret = ((size / Math.pow(1024, Math.floor(idx))));
              retFormat = df.format(ret) + s[idx];
         } else {
              retFormat += " " + s[0];
         }

         return retFormat;
	}


	
	
	public static String mem(long amount)
	{
	    if(amount <= 0) return "0";
	    final String[] units = new String[] { "Ki", "Mi", "Gi", "Ti" };
	    int digitGroups = (int) (Math.log10(amount)/Math.log10(1024));
	    return new DecimalFormat("#,##0.#").format(amount/Math.pow(1024, digitGroups)) + units[digitGroups];
	}
	
	public static String IsActive(String name, HttpServletRequest request)
	{
		
		UrlPathHelper urlPathHelper = new UrlPathHelper(); 
		String servletPath= urlPathHelper.getOriginatingServletPath(request); 
		
		String[] sArray = servletPath.split("/");
		
		if (sArray.length > 0 && sArray[1].equalsIgnoreCase(name))
		{
			
			return "active";
		}
		else if (sArray.length > 2 && sArray[1].equalsIgnoreCase("monitoring"))
		{
			if (sArray[2].equalsIgnoreCase(name))
			{
				return "active";
			}
			
		}
		
		return "";
		
	}
	
	 public static Locale getLocale(HttpServletRequest request) 
	 {
		 Locale locale = null;
	     HttpSession session = request.getSession(); 
	     locale = (Locale)session.getAttribute(SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME);

	     if (locale == null ) {
	    	 locale = getDefaultLocale();
	     }
	     
	     return locale;
	 }
	
	
	 public static String memPlus(String target, String amount)
	 {
		 long ki = mem(amount) + mem(target);
		 
		 return mem(ki);
	}	 
	 
	 
	public static float cpu(String amount)
	{
		if (amount.endsWith("m"))
	    {
	    	String value = amount.substring(0, amount.length()-1);
	    	
	    	return Float.parseFloat(value) / 1000;
	    }

		return Float.parseFloat(amount);
	}	 
	 
	public static long mem(String amount)
	{
    	if (amount.endsWith("Ki"))
    	{
    		String dd = amount.substring(0, amount.length()-2);
    		return Long.parseLong(dd);
    	}
    	else if (amount.endsWith("Mi"))
    	{
    		String dd = amount.substring(0, amount.length()-2);
    		return (long) (Double.parseDouble(dd) * Math.pow(1024, 1));
    	}
    	else if (amount.endsWith("Gi"))
    	{
    		String dd = amount.substring(0, amount.length()-2);
    		return (long) (Double.parseDouble(dd) * Math.pow(1024, 2));
    	}
		return 0;
	}
	/*
	public static String getAppVersion(ServletContext context) {
		logger.info("Get version info from pom.properties");
		
		String version = "";
		
		try {
			InputStream is = context.getResourceAsStream("/META-INF/maven/kr.co.mantech/accordion/pom.properties");
			
			Properties properties = new Properties();
			properties.load(is);
			
			Pattern pattern = Pattern.compile("[0-9]+(\\.[0-9]+)*");
			Matcher matcher = pattern.matcher((String) properties.get("version"));
			
			if(matcher.find()) {
				version = matcher.group(0);
			}
		} catch(Exception e) {
			logger.error("Exception when getting project version", e);
		}
		
		return version;
	}
	*/
}
