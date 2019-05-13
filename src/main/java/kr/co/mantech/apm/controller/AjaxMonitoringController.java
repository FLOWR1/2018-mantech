package kr.co.mantech.apm.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import kr.co.mantech.accordion.controller.BaseController;
import kr.co.mantech.apm.service.MonitoringService;

@RestController
@RequestMapping(value = "/ajax/monitoring")
public class AjaxMonitoringController extends BaseController {
	
	private static final Logger logger = LoggerFactory.getLogger(AjaxMonitoringController.class);
	
	@Autowired
	private MonitoringService monitoringService;
	
	/**
	 * 대시보드 리스트 조회
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/dashboard", method = RequestMethod.GET)
	public ModelAndView getDashboardList(HttpServletRequest request) {
		logger.info("/ajax/monitoring/list");
		
		ModelAndView mav = new ModelAndView("jsonView");

		// httpResCode start.
		List<HashMap<String, Object>> httpResCodeList = new ArrayList<HashMap<String, Object>>();
		
		String startDate = request.getParameter("startDate");
		String endDate = request.getParameter("endDate");
		String searchServiceName = request.getParameter("searchServiceName");
		
		httpResCodeList = monitoringService.getHttpResCodeList(searchServiceName, startDate, endDate);
		
		mav.addObject("httpResCodeList", httpResCodeList);
		// httpResCode end.

		List<HashMap<String, Object>> IpList = new ArrayList<HashMap<String, Object>>();
		IpList = monitoringService.getIpList(searchServiceName, startDate, endDate);
		mav.addObject("IpList", IpList);
		
		List<HashMap<String, Object>> logList = new ArrayList<HashMap<String, Object>>();
		logList = monitoringService.getlogList(searchServiceName, startDate, endDate);
		mav.addObject("logList", logList);
		
		List<HashMap<String, Object>> errorList = new ArrayList<HashMap<String, Object>>();
		errorList = monitoringService.geterrorList(searchServiceName, startDate, endDate);
		mav.addObject("errorList", errorList);
		
		List<HashMap<String, Object>> pageList = new ArrayList<HashMap<String, Object>>();
		pageList = monitoringService.getpageList(searchServiceName, startDate, endDate);
		mav.addObject("pageList", pageList);
		
		return mav;
	}

}
