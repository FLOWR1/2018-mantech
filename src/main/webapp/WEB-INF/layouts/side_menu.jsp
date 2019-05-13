<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="kr.co.mantech.accordion.common.Util" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>

<nav>
	<ul>
<sec:authorize access="hasRole('ROLE_ADMIN_DASH_BOARD_VIEW')">
		<li class="<%=Util.IsActive("adminDashboard", request)%>">
			<a href="${pageContext.request.contextPath}/adminDashboard">
				<i class="acc-icon icon-accordion_dashboard"></i> 
				<span class="menu-item-parent">
					<spring:message code="side_menu.admin_dashboard" text="Admin Dashboard" />
				</span>
			</a>
		</li>
</sec:authorize>

<sec:authorize access="hasRole('ROLE_PROJECT_VIEW')">
		<li class="<%=Util.IsActive("projects", request) %>">
			<a href="${pageContext.request.contextPath}/projects/list">
				<i class="acc-icon icon-accordion_project"></i>
				<span class="menu-item-parent">
					<spring:message code="side_menu.projects" text="Projects" />
				</span>
			</a>
		</li>
</sec:authorize>

<sec:authorize access="hasRole('ROLE_USER_VIEW')">
		<li class="<%=Util.IsActive("users", request) %>">
			<a href="${pageContext.request.contextPath}/users/list">
				<i class="acc-icon icon-accordion_human"></i>
				<span class="menu-item-parent">
					<spring:message code="side_menu.users" text="Users" />
				</span>
			</a>
		</li>
</sec:authorize>

<sec:authorize access="hasRole('ROLE_GROUP_VIEW')">
		<li class="<%=Util.IsActive("groups", request) %>">
			<a href="${pageContext.request.contextPath}/groups/list">
				<i class="acc-icon icon-accordion_group"></i>
				<span class="menu-item-parent">
					<spring:message code="side_menu.groups" text="Groups" />
				</span>
			</a>
		</li>
</sec:authorize>

<sec:authorize access="hasRole('ROLE_TOPOLOGY_VIEW')">
		<li class="<%=Util.IsActive("topology", request) %>">
			<a class="btnLicense" href="#" data-url="${pageContext.request.contextPath}/topology">
				<i class="acc-icon icon-accordion_topology"></i>
				<span class="menu-item-parent">
					<spring:message code="side_menu.topology" text="Topology" />
				</span>
			</a>
		</li>
</sec:authorize>

<sec:authorize access="hasRole('ROLE_SETTING_VIEW')">
		<li>
			<a href="#">
				<i class="acc-icon icon-accordion_setting"></i>
				<span class="menu-item-parent">
					<spring:message code="side_menu.settings" text="Settings" />
				</span>
			</a>
			
			<ul>
				<li class="<%=Util.IsActive("license", request) %>">
					<a href="${pageContext.request.contextPath}/license/list">
						<span class="menu-item-parent"><spring:message code="side_menu.license" text="License" /></span>
					</a>
				</li>
				<%-- 스토리지 내용이 반영되지 않는 문제로 인해 미사용하기로함 (2018.03.16)
				<li class="<%=Util.IsActive("storage", request) %>">
					<a href="#" class="btnLicense" data-url="${pageContext.request.contextPath}/storage/list" >
						<span class="menu-item-parent"><spring:message code="side_menu.storage" text="Storage" /></span>
					</a>
				</li>
				 --%>
				<li class="<%=Util.IsActive("alert", request) %>">
					<a href="#" class="btnLicense" data-url="${pageContext.request.contextPath}/alert/list" >
						<span class="menu-item-parent"><spring:message code="side_menu.alert" text="Alert" /></span>
					</a>
				</li>
				<li class="<%=Util.IsActive("template", request) %>">
					<a href="#" class="btnLicense" data-url="${pageContext.request.contextPath}/template/list">
						<span class="menu-item-parent"><spring:message code="side_menu.template" text="Template" /></span>
					</a>
				</li>
			</ul>
		</li>
</sec:authorize>			

<sec:authorize access="hasRole('ROLE_PROJECT_DASHBOARD_VIEW')">
		<li class="<%=Util.IsActive("projectDashboard", request) %>">
			<a href="${pageContext.request.contextPath}/projectDashboard">
				<i class="acc-icon icon-accordion_dashboard_pro"></i>
				<span class="menu-item-parent">
					<spring:message code="side_menu.project_dashboard" text="Project Dashboard" />
				</span>
			</a>
		</li>
</sec:authorize>

<sec:authorize access="hasRole('ROLE_APP_VIEW')">
		<li class="<%=Util.IsActive("application", request) %>">
			<a href="${pageContext.request.contextPath}/application">
				<i class="acc-icon icon-accordion_app"></i>
				<span class="menu-item-parent">
					<spring:message code="side_menu.application" text="Application" />
				</span>
			</a>
		</li>
</sec:authorize>

<sec:authorize access="hasRole('ROLE_BUILD_VIEW')">
		<li class="<%=Util.IsActive("build", request) %>">
			<a href="${pageContext.request.contextPath}/build/list">
				<i class="acc-icon icon-accordion_build"></i>
				<span class="menu-item-parent">
					<spring:message code="side_menu.builds" text="Builds" />
				</span>
			</a>
		</li>
</sec:authorize>

<sec:authorize access="hasRole('ROLE_NETWORK_VIEW')">
		<li class="<%=Util.IsActive("network", request) %>">
			<a href="${pageContext.request.contextPath}/network/list">
				<i class="acc-icon icon-accordion_network"></i>
				<span class="menu-item-parent">
					<spring:message code="side_menu.network" text="Network" />
				</span>
			</a>
		</li>
</sec:authorize>

<sec:authorize access="hasRole('ROLE_VOLUME_VIEW')">
		<li class="<%=Util.IsActive("volumes", request) %>">
			<a href="${pageContext.request.contextPath}/volumes/list">
				<i class="acc-icon icon-accordion_volume"></i>
				<span class="menu-item-parent">
					<spring:message code="side_menu.volumes" text="volumes" />
				</span>
			</a>
		</li>
</sec:authorize>

<sec:authorize access="hasRole('ROLE_USER_DEF_VAR_VIEW')">
		<li class="<%= Util.IsActive("userDefinedVariable", request) %>">
			<a href="${pageContext.request.contextPath}/userDefinedVariable/list">
				<i class="acc-icon icon-accordion_setting"></i>
				<span class="menu-item-parent">
					<spring:message code="menu.userDefinedVariable" />
				</span>
			</a>
		</li>
</sec:authorize>

<sec:authorize access="hasRole('ROLE_MONITORING_VIEW')">
		<li class="<%=Util.IsActive("monitoring", request) %>">
			<a href="#" onclick="javascript:window.open('${pageContext.request.contextPath}/monitoring/dashboard', 'Monitoring', 'top=0, left=0, height='+screen.height+', width='+screen.width+', resizable, scrollbars=yes');">
			<i class="acc-icon icon-accordion_monitor"></i>
				<span class="menu-item-parent">
					<spring:message code="side_menu.monitor" text="none" />
				</span>
			</a>
		</li>
</sec:authorize>

<sec:authorize access="hasRole('ROLE_PROJECT_TOPOLOGY_VIEW')">
		<li class="<%=Util.IsActive("projectTopology", request) %>">
			<a href="#" class="btnLicense" data-url="${pageContext.request.contextPath}/projectTopology">
			<i class="acc-icon icon-accordion_topology"></i>
				<span class="menu-item-parent">
					<spring:message code="side_menu.project_topology" text="none" />
				</span>
			</a>
		</li>
</sec:authorize>
	</ul>
</nav>