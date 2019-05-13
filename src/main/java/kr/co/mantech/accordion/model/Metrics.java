package kr.co.mantech.accordion.model;

import java.util.ArrayList;

public class Metrics {
	private String name;
	private ArrayList<MetricsValue> data = new ArrayList<MetricsValue>();
	

	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public ArrayList<MetricsValue> getData() {
		return data;
	}

	public void setData(ArrayList<MetricsValue> data) {
		this.data = data;
	}
	
	public Double getLastTotal()
	{
		return 0.0;
	}
}
