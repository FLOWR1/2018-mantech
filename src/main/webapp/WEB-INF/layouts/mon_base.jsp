<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.Locale" %>
<%@ page import="org.springframework.web.servlet.i18n.SessionLocaleResolver" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="layout" uri="http://accordion.mantech.co.kr/jsp/template" %>
<%
	Locale locale = new Locale("ko");
	String lang = locale.getLanguage();
%>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<!--<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">-->

		<title>APM</title>
		
		<meta name="description" content="">
		<meta name="author" content="">
			
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

		<!-- Basic Styles -->
		<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/css/font-awesome.css">
		<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/css/acco-font.css">

		<!-- SmartAdmin Styles : Caution! DO NOT change the order -->
		<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/css/smartadmin-production-plugins.css">
		<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/css/smartadmin-production.css">
		<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/css/smartadmin-skins.css">
		<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/css/accordion-skins.css">

		<!-- SmartAdmin RTL Support -->
		<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/css/smartadmin-rtl.css"> 

		<!-- We recommend you use "your_style.css" to override SmartAdmin
		     specific styles this will also ensure you retrain your customization with each SmartAdmin update.-->
		<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/css/accordion.css?${timestamp}"> 
		

		<!-- FAVICONS -->
		<link rel="shortcut icon" href="${pageContext.request.contextPath}/img/favicon/favicon.ico" type="image/x-icon">
		<link rel="icon" href="${pageContext.request.contextPath}/img/favicon/favicon.ico" type="image/x-icon">

	

		<!-- Specifying a Webpage Icon for Web Clip 
			 Ref: https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html -->
		<link rel="apple-touch-icon" href="${pageContext.request.contextPath}/img/splash/sptouch-icon-iphone.png">
		<link rel="apple-touch-icon" sizes="76x76" href="${pageContext.request.contextPath}/img/splash/touch-icon-ipad.png">
		<link rel="apple-touch-icon" sizes="120x120" href="${pageContext.request.contextPath}/img/splash/touch-icon-iphone-retina.png">
		<link rel="apple-touch-icon" sizes="152x152" href="${pageContext.request.contextPath}/img/splash/touch-icon-ipad-retina.png">
		
		<!-- iOS web-app metas : hides Safari UI Components and Changes Status Bar Appearance -->
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		
		<!-- Startup image for web apps -->
		<link rel="apple-touch-startup-image" href="${pageContext.request.contextPath}/img/splash/ipad-landscape.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape)">
		<link rel="apple-touch-startup-image" href="${pageContext.request.contextPath}/img/splash/ipad-portrait.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)">
		<link rel="apple-touch-startup-image" href="${pageContext.request.contextPath}/img/splash/iphone.png" media="screen and (max-device-width: 320px)">
 
        <layout:block name="head">

        </layout:block>
    </head>
	
	
	<body class="accordion-style fixed-header fixed-navigation fixed-ribbon">

		<!-- #HEADER -->
		<header id="header">
			<div id="logo-group">
				<!-- PLACE YOUR LOGO HERE -->
				
				<!-- END LOGO PLACEHOLDER -->
			</div>
			<%-- <%@ include file="projects.jsp" %> --%>
			
			<!-- #TOGGLE LAYOUT BUTTONS -->
			<!-- pulled right: nav area -->
			<div class="pull-right">
				
				<!-- collapse menu button -->
				<div id="hide-menu" class="btn-header pull-right">
					<span> <a href="javascript:void(0);" data-action="toggleMenu" title="Collapse Menu"><i class="fa fa-reorder"></i></a> </span>
				</div>
				<!-- end collapse menu -->
	
				<!-- logout button -->
				<%-- <div id="logout" class="btn-header transparent pull-right">
					<span> <a href="${pageContext.request.contextPath}/logout" title="Sign Out" data-action="userLogout" data-logout-msg="You can improve your security further after logging out by closing this opened browser"><i class="fa fa-sign-out"></i></a> </span>
				</div> --%>
				<!-- end logout button -->

				<%-- 영어 메세지 미구현으로 인해 언어설정 메뉴 보이지않게 처리 (추후 영어 메세지 추가시 활성화)
				<!-- multiple lang dropdown : find all flags in the flags page -->
				
				<jsp:include page="lang_dropdown.jsp">
   					<jsp:param name="locale" value="<%=lang%>" />
 				</jsp:include>
				
				<!-- end multiple lang -->
				--%>
			</div>
			<!-- end pulled right: nav area -->

		</header>
		<!-- END HEADER -->

		<!-- #NAVIGATION -->
		<!-- Left panel : Navigation area -->
		<!-- Note: This width of the aside area can be adjusted through LESS/SASS variables -->
		<aside id="left-panel">
			<!-- NAVIGATION : This navigation is also responsive

			To make this navigation dynamic please make sure to link the node
			(the reference to the nav > ul) after page load. Or the navigation
			will not initialize.
			-->
			<%@ include file="mon_side_menu.jsp" %>


		</aside>
		<!-- END NAVIGATION -->
		
		<!-- #MAIN PANEL -->
		<div id="main" role="main">

			<!-- RIBBON -->
			<div id="ribbon">
        		
				<!-- breadcrumb -->
				<ol class="breadcrumb">
					<layout:block name="breadcrumb">
						<li>MENU</li>
						<li>Blank</li>
					</layout:block>
				</ol>




				<!-- end breadcrumb -->

				<!-- You can also add more buttons to the
				ribbon for further usability

				Example below:

				<span class="ribbon-button-alignment pull-right" style="margin-right:25px">
					<a href="#" id="search" class="btn btn-ribbon hidden-xs" data-title="search"><i class="fa fa-grid"></i> Change Grid</a>
					<span id="add" class="btn btn-ribbon hidden-xs" data-title="add"><i class="fa fa-plus"></i> Add</span>
					<button id="search" class="btn btn-ribbon" data-title="search"><i class="fa fa-search"></i> <span class="hidden-mobile">Search</span></button>
				</span> -->

			</div>
			<!-- END RIBBON -->

			<!-- #MAIN CONTENT -->
			<div id="content">
	        	<layout:block name="contents">
    	    	</layout:block>
        	</div>
			<!-- END #MAIN CONTENT -->

		</div>
		<!-- END #MAIN PANEL -->

		<!-- #PAGE FOOTER 
		<div class="page-footer">
			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<span class="txt-color-white">SmartAdmin 1.8.x <span class="hidden-xs"> - Web Application Framework</span> © 2014-2016</span>
				</div>
			</div>
			
		</div>
		-->
		<!-- END FOOTER -->

		<!-- #SHORTCUT AREA : With large tiles (activated via clicking user name tag)
			 Note: These tiles are completely responsive, you can add as many as you like -->
		<div id="shortcut">
			<ul>
				<li>
					<a href="${pageContext.request.contextPath}/index.html" class="jarvismetro-tile big-cubes bg-color-blue"> <span class="iconbox"> <i class="fa fa-envelope fa-4x"></i> <span>Mail <span class="label pull-right bg-color-darken">14</span></span> </span> </a>
				</li>
			</ul>
		</div>
		<!-- END SHORTCUT AREA -->



		<!-- jQuery + jQueryUI -->
		<script src="${pageContext.request.contextPath}/js/libs/jquery-2.1.1.min.js"></script>

		<script src="${pageContext.request.contextPath}/js/libs/jquery-ui-1.10.3.min.js"></script>



    	<script src="${pageContext.request.contextPath}/js/lodash/3.5.0/lodash.min.js"></script>
		
		

		<!-- IMPORTANT: APP CONFIG -->
		<script src="${pageContext.request.contextPath}/js/app.config.js"></script>

		<!-- JS TOUCH : include this plugin for mobile drag / drop touch events-->
		<script src="${pageContext.request.contextPath}/js/plugin/jquery-touch/jquery.ui.touch-punch.min.js"></script> 

		<!-- BOOTSTRAP JS -->
		<script src="${pageContext.request.contextPath}/js/bootstrap/bootstrap.min.js"></script>

		<!-- CUSTOM NOTIFICATION -->
		<script src="${pageContext.request.contextPath}/js/notification/SmartNotification.min.js"></script>

		<!-- JARVIS WIDGETS -->
		<script src="${pageContext.request.contextPath}/js/smartwidgets/jarvis.widget.min.js"></script>

		<!-- EASY PIE CHARTS -->
		<script src="${pageContext.request.contextPath}/js/plugin/easy-pie-chart/jquery.easy-pie-chart.min.js"></script>

		<!-- SPARKLINES -->
		<script src="${pageContext.request.contextPath}/js/plugin/sparkline/jquery.sparkline.min.js"></script>

		<!-- JQUERY VALIDATE -->
		<script src="${pageContext.request.contextPath}/js/plugin/jquery-validate/jquery.validate.min.js"></script>

		<!-- JQUERY MASKED INPUT -->
		<script src="${pageContext.request.contextPath}/js/plugin/masked-input/jquery.maskedinput.min.js"></script>

		<!-- JQUERY SELECT2 INPUT -->
		<script src="${pageContext.request.contextPath}/js/plugin/select2/select2.min.js"></script>

		<!-- JQUERY UI + Bootstrap Slider -->
		<script src="${pageContext.request.contextPath}/js/plugin/bootstrap-slider/bootstrap-slider.min.js"></script>

		<!-- browser msie issue fix -->
		<script src="${pageContext.request.contextPath}/js/plugin/msie-fix/jquery.mb.browser.min.js"></script>

		<!-- FastClick: For mobile devices -->
		<script src="${pageContext.request.contextPath}/js/plugin/fastclick/fastclick.min.js"></script>

		<!--[if IE 8]>

		<h1>Your browser is out of date, please update your browser by going to www.microsoft.com/download</h1>

		<![endif]-->

		<!-- MAIN APP JS FILE -->
		<script src="${pageContext.request.contextPath}/js/app.min.js"></script>


		<!-- SmartChat UI : plugin -->
		<script src="${pageContext.request.contextPath}/js/smart-chat-ui/smart.chat.ui.min.js"></script>
		<script src="${pageContext.request.contextPath}/js/smart-chat-ui/smart.chat.manager.min.js"></script>
		
		<!-- Alertt UI : plugin -->
		<script src="${pageContext.request.contextPath}/js/bootbox.min.js"></script>
		
		<!-- Locale -->
		<script src="${pageContext.request.contextPath}/js/jquery.i18n.properties-min-1.0.9.js"></script>	
		<!-- Error -->
		<script src="${pageContext.request.contextPath}/js/errorMessage.js"></script>	
		
		<script src="${pageContext.request.contextPath}/js/common.js"></script>	
		<script src="${pageContext.request.contextPath}/js/moment.js"></script>
		
	     <script>
	     
	     var contextPath = '${pageContext.request.contextPath}';
	     
	     jQuery.i18n.properties({
	    	 name:'message',
	    	 path:'${pageContext.request.contextPath}/locale/',
	    	 mode:'both',
	    	 language:'<%=(Util.getLocale(request)).toString()%>',
	    	 checkAvailableLanguages: true,
	    	 async: true,
	    	 callback: function() {
	    	 	I18N=$.i18n.prop;
	    	 }
	     });
	     
	     
 			$(document).ready(function() {
 				
				pageSetUp();
				
				
				$(".dropdown-menu li a").click(function(){
					
					var dropDownType = $(this).attr('dropdown-type');
					
					if (dropDownType=="locale")
					{
						var locale = $(this).attr('data-lang');
						
						if (typeof locale != 'undefined')
						{
							$(this).parents(".header-dropdown-list").find(".active").removeClass("active");
							$(this).parent().addClass("active");
							
							var html = $(this).html();
							html += '<i class="fa fa-angle-down"></i>'; 
							$(this).parents(".header-dropdown-list").find('.dropdown-toggle').html(html);
							
							 $.ajax({
			                     	url: '${pageContext.request.contextPath}/ajax/locale/change',
			                     	type: 'POST',
			                     	dataType: 'json',
			                     	data: { locale : locale },
			                     	success: function (response) {
			                     		
			                     		if (response.result == 0)
			                     		{
			                     			location.reload();
			                     		}
			                     		else
			                     		{
			                     		}

			                     	}
			                 	});	
							
						}	
					}
					else if (dropDownType=="project")
					{
						
						var projectName = $(this).attr('data-project');
						
						
						$(this).parents(".header-dropdown-list").find(".active").removeClass("active");
						$(this).parent().addClass("active");
						
						var html = $(this).html();
						html += '<i class="fa fa-angle-down"></i>'; 
						$(this).parents(".project-context").find('.dropdown-toggle').html(html);	
						
						
						 $.ajax({
		                     	url: '${pageContext.request.contextPath}/ajax/projects/' + projectName + '/change',
		                     	type: 'POST',
		                     	dataType: 'json',
		                     	success: function (response) {
		                     		
		                     		if (response.result == 0)
		                     		{
		                     			location.reload();
		                     		}
		                     		else
		                     		{
		                     		}

		                     	}
		                 	});	
						
					}
				});

			});
	     </script>
   	
        <layout:block name="scripts">
          
        </layout:block>
	</body>	
	
	

</html>