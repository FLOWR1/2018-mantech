package kr.co.mantech.accordion.model;

import java.util.ArrayList;
import java.util.List;


public class Project {
	
	private int     idx;
	private int 	number;
	private String  name;
	private String  displayName;
	private int   	maxCpu;
	private long  	maxMem;
	private int   	allocCpu;
	private long  	allocMem;
	private String	cpu;
	private String  	mem;
	private int pod;
	private int   	enable;
	private int     menuEnable;
	private String  status;
	private int   	type;
	private int 	progressBarCpu;
	private int 	progressBarMem;
	private int     remainCpu;
	private long    remainMem;
	private String convertMem;
	private int cpuNumber;
	private int memSize;
	public int getIdx() {
		return idx;
	}
	public void setIdx(int idx) {
		this.idx = idx;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDisplayName() {
		return displayName;
	}
	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}
	public int getMaxCpu() {
		return maxCpu;
	}
	public void setMaxCpu(int maxCpu) {
		this.maxCpu = maxCpu;
	}
	public long getMaxMem() {
		return maxMem;
	}
	public void setMaxMem(long maxMem) {
		this.maxMem = maxMem;
	}
	public int getAllocCpu() {
		return allocCpu;
	}
	public void setAllocCpu(int allocCpu) {
		this.allocCpu = allocCpu;
	}
	public long getAllocMem() {
		return allocMem;
	}
	public void setAllocMem(long allocMem) {
		this.allocMem = allocMem;
	}
	public String getCpu() {
		return cpu;
	}
	public void setCpu(String cpu) {
		this.cpu = cpu;
	}
	public String getMem() {
		return mem;
	}
	public void setMem(String mem) {
		this.mem = mem;
	}
	public int getPod() {
		return pod;
	}
	public void setPod(int pod) {
		this.pod = pod;
	}
	public int getEnable() {
		return enable;
	}
	public void setEnable(int enable) {
		this.enable = enable;
	}
	public int getMenuEnable() {
		return menuEnable;
	}
	public void setMenuEnable(int menuEnable) {
		this.menuEnable = menuEnable;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public int getProgressBarCpu() {
		return progressBarCpu;
	}
	public void setProgressBarCpu(int progressBarCpu) {
		this.progressBarCpu = progressBarCpu;
	}
	public int getProgressBarMem() {
		return progressBarMem;
	}
	public void setProgressBarMem(int progressBarMem) {
		this.progressBarMem = progressBarMem;
	}
	public int getRemainCpu() {
		return remainCpu;
	}
	public void setRemainCpu(int remainCpu) {
		this.remainCpu = remainCpu;
	}
	public long getRemainMem() {
		return remainMem;
	}
	public void setRemainMem(long remainMem) {
		this.remainMem = remainMem;
	}
	public String getConvertMem() {
		return convertMem;
	}
	public void setConvertMem(String convertMem) {
		this.convertMem = convertMem;
	}
	public int getCpuNumber() {
		return cpuNumber;
	}
	public void setCpuNumber(int cpuNumber) {
		this.cpuNumber = cpuNumber;
	}
	public int getMemSize() {
		return memSize;
	}
	public void setMemSize(int memSize) {
		this.memSize = memSize;
	}
	
	
	
}
