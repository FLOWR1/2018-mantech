package kr.co.mantech.apm.model;

public class XLogChart {

	private String date;
	private int value;
	private String title;
	private String color;
	private String type;
	private long x;
	private double y;
	
	public XLogChart () {
	}
	
	/*
	public XLogChart (String p1, String p2) {
		date = p1;
		title = p2;
		value = Double.parseDouble(title);
		value = (value < 10? value : 9.9);// maximum spot position
		this.setColor("#0000ff");
	}
	*/
	
	public XLogChart (String p1, int p2) {
		date = p1;
		value = p2;
	}
	
	public XLogChart (long x, int p2, String type) {
		this.x = x;
		this.y = p2;
		//value = Double.parseDouble(title);
		//value = (value < 10? value : 9.9);// maximum spot position
		//this.y = p2;
		this.type = type;
		this.setColor("#0000ff");
	}
	
	public String getDate() {
		return date;
	}

	public void setDate(String buf) {
		date = buf;
	}

	public double getValue() {
		return value;
	}

	public void setValue(int buf) {
		value = buf;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public long getX() {
		return x;
	}

	public void setX(long x) {
		this.x = x;
	}

	public double getY() {
		return y;
	}

	public void setY(double y) {
		this.y = y;
	}

	
	

}
