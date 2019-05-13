package kr.co.mantech.apm.model;

import java.util.ArrayList;

public class XLogList {

    private ArrayList<XLogChart> arrXLog = new ArrayList<XLogChart>();
    private ArrayList<XLogData> arrData = new ArrayList<XLogData>();

    public ArrayList<XLogChart> getArrXLog () { return arrXLog; }
    public ArrayList<XLogData> getArrData () { return arrData; }

    public void setArrXLog (ArrayList<XLogChart> arr) { arrXLog = arr; }
    public void setArrData (ArrayList<XLogData> arr) { arrData = arr; }
    

}
