package kr.co.mantech.accordion.kubernetes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import io.fabric8.kubernetes.client.Config;
import io.fabric8.kubernetes.client.ConfigBuilder;
import io.fabric8.kubernetes.client.DefaultKubernetesClient;
import io.fabric8.kubernetes.client.KubernetesClient;
import kr.co.mantech.accordion.config.AppConfig;
import kr.co.mantech.accordion.config.Kubernetes;

public class ApiBase {

	
	public static int OK = 0;
	public static int FAIL = 1;
	public static int ALREADY_NAMESPACE = 2;
	public static int ALREADY_LABEL_KEY = 3;

	private Kubernetes config = null;

	
	protected Logger logger = LoggerFactory.getLogger(ApiBase.class);
	
	protected String lastError = "";

    public ApiBase() {
    
    }
    
    public ApiBase(Kubernetes config) {
    	this.config = config;
    	
    }
    
    
	protected String getApiServerUrl() {
    	

    	if (config == null) {
    		try
    		{
    			AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
    			ctx.register(AppConfig.class);
    			ctx.refresh();
    			
    			config= (Kubernetes)ctx.getBean("kubernetes");
    		}
    		catch(NoSuchBeanDefinitionException e)
    		{
    			
    		}
    		

    	}
		

    	
        return config.getUrl();
    }
    
    
	protected int result(KubernetesClient kubernetesClient)
	{
		return 0;
	}
	
	public int exec() {
		
		
		Config config = null;
		 
		 	
		if (getApiServerUrl() != null && getApiServerUrl().length() > 0)
		{
			config = new ConfigBuilder().withMasterUrl(getApiServerUrl()).build();
		}
		else
		{
			config = new ConfigBuilder().build();
		}
        
		KubernetesClient kubernetesClient = new DefaultKubernetesClient(config);
        
        return result(kubernetesClient);
	}
}