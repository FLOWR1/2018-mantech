package kr.co.mantech.apm.controller;


import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import kr.co.mantech.apm.service.MonitoringService;

/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping(value = "/monitoring")
public class MonitoringController {
	
	private static final Logger logger = LoggerFactory.getLogger(MonitoringController.class);
	
	@Autowired
	private MonitoringService monitoringService;
	
	/**
	 * Dashboard
	 * @param locale
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/dashboard", method = RequestMethod.GET)
	public ModelAndView goDashboard(Locale locale) {
		logger.info("/monitoring/list The client locale is {}.", locale);
		ModelAndView mav = new ModelAndView("monitoring/dashboard");
		
		List<String> serviceList = monitoringService.getServiceList();
		
		mav.addObject("serviceList", serviceList);
		
		return mav;
	}

}

