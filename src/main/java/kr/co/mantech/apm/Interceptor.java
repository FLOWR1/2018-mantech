package kr.co.mantech.apm;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class Interceptor extends HandlerInterceptorAdapter {
	
	private Logger logger = LoggerFactory.getLogger(getClass());
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		logger.info("REQUEST URI : " + request.getRequestURI());
		
		try {
			/*String url = request.getRequestURI();
			if("/".equals(url)) {
				response.sendRedirect(request.getContextPath() + "/monitoring/dashboard");
				return false;
			}*/
		} catch(ClassCastException e) {
			response.sendRedirect(request.getContextPath() + "/monitoring/dashboard");
			return false;
		}
			
		return super.preHandle(request, response, handler);

	}
}