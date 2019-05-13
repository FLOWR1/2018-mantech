<%@page contentType="text/html; charset=UTF-8" %>
<%@page import="kr.co.mantech.accordion.common.Util"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@taglib uri="http://www.springframework.org/security/tags" prefix="sec" %> 

	
<nav>
	<ul>
	
		<li>
			<a href="#" title="blank_"><i class="acc-icon icon-accordion_monitor"></i> 
				<span class="menu-item-parent">
					<spring:message code="side_menu.monitoring" text="Monitoring" />
				</span>				
			</a>
			
 			<ul>
				
				<li class="<%=Util.IsActive("apm", request) %>">
					<a href="${pageContext.request.contextPath}/monitoring/dashboard" title="Dashboard">
						<span class="menu-item-parent"><spring:message code="side_menu.dashboard" text="Dashboard" /></span>
					</a>
				</li>	
							
			</ul>	
			
		</li>

					
	</ul>
</nav>
    
  