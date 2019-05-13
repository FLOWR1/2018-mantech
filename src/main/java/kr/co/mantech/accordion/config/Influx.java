package kr.co.mantech.accordion.config;

public class Influx {
	
	private String url;
	private String passwd;
	private String user;

	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}	
	
	public String getPassword() {
		return passwd;
	}
	public void setPassword(String passwd) {
		this.passwd = passwd;
	}

}
