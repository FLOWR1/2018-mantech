package kr.co.mantech.apm.model;

public class ApmData {

    private String time          = "0";
    private String activeService = "0.0";
    private String elapsedTime   = "0.0";
    private String gcCount       = "0.0";
    private String gcTime        = "0.0";
    private String errorRate     = "0.0";
    private String heapUsed      = "0.0";
    private String permUsed      = "0.0";
    private String procCpu       = "0.0";
    private String serviceCount  = "0.0";
    private String tps           = "0.0";
    
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getActiveService() {
		return activeService;
	}
	public void setActiveService(String activeService) {
		this.activeService = activeService;
	}
	public String getElapsedTime() {
		return elapsedTime;
	}
	public void setElapsedTime(String elapsedTime) {
		this.elapsedTime = elapsedTime;
	}
	public String getGcCount() {
		return gcCount;
	}
	public void setGcCount(String gcCount) {
		this.gcCount = gcCount;
	}
	public String getGcTime() {
		return gcTime;
	}
	public void setGcTime(String gcTime) {
		this.gcTime = gcTime;
	}
	public String getErrorRate() {
		return errorRate;
	}
	public void setErrorRate(String errorRate) {
		this.errorRate = errorRate;
	}
	public String getHeapUsed() {
		return heapUsed;
	}
	public void setHeapUsed(String heapUsed) {
		this.heapUsed = heapUsed;
	}
	public String getPermUsed() {
		return permUsed;
	}
	public void setPermUsed(String permUsed) {
		this.permUsed = permUsed;
	}
	public String getProcCpu() {
		return procCpu;
	}
	public void setProcCpu(String procCpu) {
		this.procCpu = procCpu;
	}
	public String getServiceCount() {
		return serviceCount;
	}
	public void setServiceCount(String serviceCount) {
		this.serviceCount = serviceCount;
	}
	public String getTps() {
		return tps;
	}
	public void setTps(String tps) {
		this.tps = tps;
	}
    
}
