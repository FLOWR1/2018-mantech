package kr.co.mantech.apm.model;

public class ASEQChart {

	private String date;
	private String fast;
	private String normal;
	private String slow;
	private String obj;
	
	public ASEQChart (String _date) {
		this.date = _date;
		this.fast = "0.0";
		this.normal = "0.0";
		this.slow = "0.0";
		this.obj = "0";
	}
	
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getFast() {
		return fast;
	}
	public void setFast(String fast) {
		this.fast = fast;
	}
	public String getNormal() {
		return normal;
	}
	public void setNormal(String normal) {
		this.normal = normal;
	}
	public String getSlow() {
		return slow;
	}
	public void setSlow(String slow) {
		this.slow = slow;
	}

	public String getObj() {
		return obj;
	}

	public void setObj(String obj) {
		this.obj = obj;
	}
	

}
