package kr.co.mantech.apm.model;

public class XLogData {
	
	private String index;
	private String serviceName;
	private String agentName;
	private String avgResponseTime;
	private String trsanctionsPerMinute;
	private String errorsPerMinute;
	
	public String getIndex() {
		return index;
	}
	public void setIndex(String index) {
		this.index = index;
	}
	public String getServiceName() {
		return serviceName;
	}
	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}
	public String getAgentName() {
		return agentName;
	}
	public void setAgentName(String agentName) {
		this.agentName = agentName;
	}
	public String getAvgResponseTime() {
		return avgResponseTime;
	}
	public void setAvgResponseTime(String avgResponseTime) {
		this.avgResponseTime = avgResponseTime;
	}
	public String getTrsanctionsPerMinute() {
		return trsanctionsPerMinute;
	}
	public void setTrsanctionsPerMinute(String trsanctionsPerMinute) {
		this.trsanctionsPerMinute = trsanctionsPerMinute;
	}
	public String getErrorsPerMinute() {
		return errorsPerMinute;
	}
	public void setErrorsPerMinute(String errorsPerMinute) {
		this.errorsPerMinute = errorsPerMinute;
	}
	@Override
	public String toString() {
		return "XLogData [index=" + index + ", serviceName=" + serviceName + ", agentName=" + agentName
				+ ", avgResponseTime=" + avgResponseTime + ", trsanctionsPerMinute=" + trsanctionsPerMinute
				+ ", errorsPerMinute=" + errorsPerMinute + "]";
	}
	
	
	
}
