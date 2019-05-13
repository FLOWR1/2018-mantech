package kr.co.mantech.accordion.config;

public class Kubernetes {
	private String url;
	private String war_limit_mem;
	private String war_limit_cpu;
	private String war_request_mem;
	private String war_request_cpu;
	private String fluentd_limit_mem;
	private String fluentd_limit_cpu;
	private String fluentd_request_mem;
	private String fluentd_request_cpu;
	
	private String tomcat_limit_mem;
	private String tomcat_limit_cpu;
	private String tomcat_request_mem;
	private String tomcat_request_cpu;
	
	
	
	
	public String getTomcat_limit_mem() {
		return tomcat_limit_mem;
	}
	public void setTomcat_limit_mem(String tomcat_limit_mem) {
		this.tomcat_limit_mem = tomcat_limit_mem;
	}
	public String getTomcat_limit_cpu() {
		return tomcat_limit_cpu;
	}
	public void setTomcat_limit_cpu(String tomcat_limit_cpu) {
		this.tomcat_limit_cpu = tomcat_limit_cpu;
	}
	public String getTomcat_request_mem() {
		return tomcat_request_mem;
	}
	public void setTomcat_request_mem(String tomcat_request_mem) {
		this.tomcat_request_mem = tomcat_request_mem;
	}
	public String getTomcat_request_cpu() {
		return tomcat_request_cpu;
	}
	public void setTomcat_request_cpu(String tomcat_request_cpu) {
		this.tomcat_request_cpu = tomcat_request_cpu;
	}
	public String getWar_limit_mem() {
		return war_limit_mem;
	}
	public void setWar_limit_mem(String war_limit_mem) {
		this.war_limit_mem = war_limit_mem;
	}
	public String getWar_limit_cpu() {
		return war_limit_cpu;
	}
	public void setWar_limit_cpu(String war_limit_cpu) {
		this.war_limit_cpu = war_limit_cpu;
	}
	public String getWar_request_mem() {
		return war_request_mem;
	}
	public void setWar_request_mem(String war_request_mem) {
		this.war_request_mem = war_request_mem;
	}
	public String getWar_request_cpu() {
		return war_request_cpu;
	}
	public void setWar_request_cpu(String war_request_cpu) {
		this.war_request_cpu = war_request_cpu;
	}
	public String getFluentd_limit_mem() {
		return fluentd_limit_mem;
	}
	public void setFluentd_limit_mem(String fluentd_limit_mem) {
		this.fluentd_limit_mem = fluentd_limit_mem;
	}
	public String getFluentd_limit_cpu() {
		return fluentd_limit_cpu;
	}
	public void setFluentd_limit_cpu(String fluentd_limit_cpu) {
		this.fluentd_limit_cpu = fluentd_limit_cpu;
	}
	public String getFluentd_request_mem() {
		return fluentd_request_mem;
	}
	public void setFluentd_request_mem(String fluentd_request_mem) {
		this.fluentd_request_mem = fluentd_request_mem;
	}
	public String getFluentd_request_cpu() {
		return fluentd_request_cpu;
	}
	public void setFluentd_request_cpu(String fluentd_request_cpu) {
		this.fluentd_request_cpu = fluentd_request_cpu;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}


}
