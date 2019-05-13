<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="kr.co.mantech.accordion.common.Util"%>
<%@ taglib uri="http://accordion.mantech.co.kr/jsp/template" prefix="layout" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<div>This contents will be ignored because of forward.</div>
<layout:extends name="mon_base">

    <layout:put block="head">
		<link rel="stylesheet" href="${pageContext.request.contextPath}/css/plugin/gridstack/gridstack.css"/>
		<link rel="stylesheet" href="${pageContext.request.contextPath}/css/plugin/gridstack/gridstack-extra.css"/>
		<link rel="stylesheet" href="${pageContext.request.contextPath}/css/plugin/BigScatterChart/bigscatterchart.css"/>

<style type="text/css">
	.grid-stack {
		background: transparent;
		padding:0px 0px;
	}
	.grid-stack.grid-stack-12 > .grid-stack-item[data-gs-width='4'] {
	    width: 32.3333333333%;
	}
	.grid-stack.grid-stack-12 > .grid-stack-item[data-gs-width='5'] {
	    width: 40.6666666667%;
	}
	.grid-stack.grid-stack-12 > .grid-stack-item[data-gs-width='7'] {
	    width: 57.3333333333%;
	}
	.grid-stack-item[data-gs-height="1"] {
	   height: 1px;
	}
</style>

	</layout:put>

    <layout:put block="breadcrumb" type="REPLACE">
		<li><a href="${pageContext.request.contextPath}/monitoring/dashboard">Monitoring</a></li>
		<li>Dashboard</li>
    </layout:put>

    
    <layout:put block="contents">

	<%-- <input type="hidden" id="searchServiceName" value="${serviceList[0]}"/> --%>
	<input type="hidden" id="searchServiceName" value="service1"/>
	
	<!-- 검색조건 -->
		<div class="row">
			<div class="col-md-3">
				<div class="project-context">
					<span class="label">SERVICE:</span>
					<span class="repeat-selector dropdown-toggle" data-toggle="dropdown" aria-expanded="false">service1<i class="fa fa-angle-down"></i></span>
					<ul class="dropdown-menu js-status-update">
						<li class="active"><a href="javascript:void(0);" dropdown-type="app" dropdown-data="service1">service1</a></li>
						<li><a href="javascript:void(0);" dropdown-type="app" dropdown-data="service2">service2</a></li>
						<li><a href="javascript:void(0);" dropdown-type="app" dropdown-data="service3">service3</a></li>
						<li><a href="javascript:void(0);" dropdown-type="app" dropdown-data="service4">service4</a></li>
						<li><a href="javascript:void(0);" dropdown-type="app" dropdown-data="service5">service5</a></li>
					</ul>
				</div>
			</div>
<%-- 			<div class="col-md-3">
				<div class="project-context">
					<span class="label">SERVICE:</span>
					<span class="repeat-selector dropdown-toggle" data-toggle="dropdown" aria-expanded="false">${serviceList[0]}<i class="fa fa-angle-down"></i></span>
					<ul class="dropdown-menu js-status-update">
					<c:forEach items="${serviceList}" var="service">
						<li>
							<a href="javascript:void(0);" dropdown-type="app" dropdown-data="${service}">${service}</a>
						</li>
					</c:forEach>
					</ul>
				</div>
			</div> --%>
		</div>

	<div style="padding-top:20px"></div>
    
   	<div class="grid-stack grid-stack-12">
	</div>


	</layout:put>
    
    
	<layout:put block="scripts">
		<!-- JS TOUCH : include this plugin for mobile drag / drop touch events-->
		<script src="${pageContext.request.contextPath}/js/plugin/jquery-touch/jquery.ui.touch-punch.min.js"></script> 
		
		<script src="${pageContext.request.contextPath}/js/plugin/gridstack/gridstack.js"></script>
		<script src="${pageContext.request.contextPath}/js/plugin/gridstack/gridstack.jQueryUI.js"></script>
		
		<!-- PAGE RELATED PLUGIN(S) -->
		<script src="${pageContext.request.contextPath}/js/plugin/dygraphs/demo-data.min.js"></script>
		<!-- DYGRAPH -->
		<script src="${pageContext.request.contextPath}/js/plugin/dygraphs/dygraph-combined.min.js"></script>
		

		<!-- Include DataTables https://datatables.net/ -->
		<script src="${pageContext.request.contextPath}/js/plugin/datatables/jquery.dataTables.min.js" type="text/javascript" ></script>
		<script src="${pageContext.request.contextPath}/js/plugin/datatables/dataTables.bootstrap.min.js"></script>

		<!-- Include Date Range Picker -->
		<script src="${pageContext.request.contextPath}/js/plugin/bootstrap-daterangepicker/2.1.25/daterangepicker.js" type="text/javascript"></script>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/plugin/bootstrap-daterangepicker/2.1.25/daterangepicker.css" />

        <script src="${pageContext.request.contextPath}/js/plugin/amcharts/amcharts.js" type="text/javascript"></script>
        <script src="${pageContext.request.contextPath}/js/plugin/amcharts/xy.js" type="text/javascript"></script>
		<script src="${pageContext.request.contextPath}/js/plugin/amcharts/serial.js" type="text/javascript"></script>

		<!-- Include BigScatterChart -->
		<script src="${pageContext.request.contextPath}/js/plugin/BigScatterChart/modernizr.js" type="text/javascript"></script>
		<script src="${pageContext.request.contextPath}/js/plugin/BigScatterChart/underscore-min.js" type="text/javascript"></script>
		<script src="${pageContext.request.contextPath}/js/plugin/BigScatterChart/date.js" type="text/javascript"></script>
		<script src="${pageContext.request.contextPath}/js/plugin/BigScatterChart/jquery.Class.js" type="text/javascript"></script>
		<script src="${pageContext.request.contextPath}/js/plugin/BigScatterChart/jquery.dragToSelect.js" type="text/javascript"></script>
		<script src="${pageContext.request.contextPath}/js/plugin/BigScatterChart/jquery.BigScatterChart.js" type="text/javascript"></script>
		
		
		<script src="${pageContext.request.contextPath}/js/view/monitoring/dashboard.js"></script>
		

    </layout:put>

</layout:extends>
