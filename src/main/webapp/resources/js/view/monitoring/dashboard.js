var optXlog = {
		sContainerId : 'chartdivxl',
		nYMin: 0, nYMax: 10000,
		nZMin: 0, nZMax: 5,
		nBubbleSize: 3,
		nDefaultRadius : 3,
		htTypeAndColor : {
			'Success' : '#0f2bff',
			'Failed' : '#f72525'
		},
		sTitle : '',
		sXLabel : '(time)',
		sYLabel : '(ms)',
		htGuideLine : {
			'nLineWidth' : 1,
			'aLineDash' : [2, 5],
			'nGlobalAlpha' : 0.2
		},
		sXLabel : '',
		nPaddingRight : 40,
		fOnSelect : function(htPosition, htXY){
			console.time('fOnSelect');
			
			selectData = this.getDataByXY(htXY.nXFrom, htXY.nXTo, htXY.nYFrom, htXY.nYTo);
			
			startDate = getTimestamp(new Date(htXY.nXFrom));
			endDate = getTimestamp(new Date(htXY.nXTo));
			
			popupXlogDetail(selectData);
			
			console.timeEnd('fOnSelect');
			
		}
};


var optM = {
    "type": "serial",
    "theme": "light",
    "marginRight": 40,
    "marginLeft": 40,
    "minMarginBottom" : 50,
    "dataDateFormat": "YYYY-MM-DD JJ:NN:SS",
    "synchronizeGrid":true,
    "valueAxes": [{
        "id":"v1",
        "axisColor": "#DADADA",
        "axisThickness": 2,
        "axisAlpha": 1,
        "position": "left"
    }],
    "graphs": [{
        "valueAxis": "v1",
        "lineColor": "#FF6600",
        "bullet": "round",
        "bulletBorderThickness": 1,
        "bulletSize": 1,
        "fillAlphas": 0.5,
        "lineAlpha": 0.5,
        "hideBulletsCount": 50,
        "title": "red line",
        "valueField": "value0",
        "fillAlphas": 0
    }],
    "chartScrollbar": {
        "scrollbarHeight": 5,
        "backgroundAlpha": 0.1,
        "backgroundColor": "#868686",
        "selectedBackgroundColor": "#67b7dc",
        "selectedBackgroundAlpha": 0.5
    },
    "chartCursor": {
        "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
        "minPeriod": "ss",
                "axisAlpha": 0,
                "gridAlpha": 0,
                "tickLength": 0,
        "parseDates": true,
        "axisColor": "#DADADA"
    },
    "export": {
    	"enabled": true
     }
};


var opt = {
		"type": "serial",
		"theme": "light",
		"marginRight": 70,
		"startDuration": 0,
	    "valueAxes": [{
	    }],
		"graphs": [{
			"balloonText": "<b>[[category]]: [[value]]</b>",
			"fillColorsField": "color",
			"fillAlphas": 0.8,
			"lineAlpha": 0.2,
			"type": "column",
			"valueField": "value"
		}],
		"chartCursor": {
			"categoryBalloonEnabled": false,
			"cursorAlpha": 0,
			"zoomable": false
		},
		"categoryField": "cate",
		"categoryAxis": {
			"gridPosition": "start",
			"axisAlpha": 0,
			"gridAlpha": 0,
			"labelRotation": 45
		},
		"export": {
			"enabled": true
		}
	};


// chart 생성
var logChart = AmCharts.makeChart("xlogDiv", $.extend(true, {}, opt));
var errorChart = AmCharts.makeChart("errorRageDiv", $.extend(true, {}, opt));
var httpResCodeChart = AmCharts.makeChart("httpResCodesDiv", $.extend(true, {}, opt));
var IpChart = AmCharts.makeChart("mostActiveIpDiv", $.extend(true, {}, opt));
var pageChart = AmCharts.makeChart("mostReqPagesDiv", $.extend(true, {}, opt));


var grid_id = "monapm-gridstack-layout";
//XLog zoom area
var _range = {
		xstart : 0
		,xend : 0
		,ystart : 0
		,yend : -1
		};

var contextPath = getContextPath();

var startDate = new Date();
var endDate = new Date();
var xlogChart;
var selectData;
var xlogData;
$(function() {
	
	var options = {
			draggable: {
				handle: '.title',
				}
			, alwaysShowResizeHandle:false
			, cellHeight:'auto'
			, cellHeightUnit : 'px'
			, verticalMargin: 10
		};
	$('.grid-stack').gridstack(options);
	
	new function () {
		this.serializedData = [
            {title: "Xlog", id: "xlogDiv", x: 0, y: 0, width: 6, height: 2},
			{title: "Error Rate", id: "errorRageDiv", x: 6, y: 0,  width: 6, height: 2},
			{title: "HTTP RESPONSE CODES", id: "httpResCodesDiv", x: 0, y: 1, width: 4, height: 2},
			{title: "Most Active IP", id: "mostActiveIpDiv", x: 4, y: 1, width: 4, height: 2},
			{title: "Most Requested Pages", id: "mostReqPagesDiv", x: 4, y: 1,  width: 4, height: 2}
			];
		this.grid = $('.grid-stack').data('gridstack');
		this.grid.removeAll();
	   
		/** activeServer chart setting error( title renamed from chartdivas to chardiveq) **/
		var items = GridStackUI.Utils.sort(this.serializedData);
		_.each(items, function (node) {
			this.grid.addWidget($('<div class="grid-stack-item-content"><div class=title>'+node.title+'</div>' 
						+'<div class=container id="'+node.id+'" style="width:100%; height:100%;"></div>'
						+'</div>'),
						node.x, node.y, node.width, node.height, true);
		}, this);
	   
		$(".grid-stack").on("change", function(event, items) {
			saveGrid();
		});
	};

	// 축 이름 지정.
	logChart.valueAxes[0].title = "Xlog";
	errorChart.valueAxes[0].title = "error";
	httpResCodeChart.valueAxes[0].title = "count";
	IpChart.valueAxes[0].title = "activity";
	pageChart.valueAxes[0].title = "request";

//	drawXlogChart();
	
	search();
	
	// SERVICE 목록 클릭 시
	$(document).on('click', '.js-status-update a', function() {
		var $this = $(this);
		var searchServiceName = $this.text();
		$this.parents('.project-context').find('.dropdown-toggle').html(searchServiceName + ' <i class="fa fa-angle-down"></i>');
		$this.parents('.dropdown-menu').find('li').removeClass('active');
		$this.parent().addClass('active');

		var dropdownType = $this.attr('dropdown-type');
		var dropdownData = $this.attr('dropdown-data');
		var dropdownDataType = $this.attr('dropdown-data-type');

		$('#searchServiceName').val(searchServiceName);
		search();
	});	
	
	
	// xlog 차트 제거 후 재출력(responsive)
	$(window).resize( function(){
		if(xlogChart != null) {
			xlogChart.destroy();
			drawXlogChart();
			doBigScatterChart(xlogData);
		}
	});
	
	startDate.setMinutes(startDate.getMinutes() - 30);
	
	// 5초 간격 반복
	timerID = setInterval( function() {
		startDate.addSeconds(3);
		endDate.addSeconds(3);
		search();
	}, 1000 * 3 );
	
	
	var param = {
			"scrollY":        "200px",
			"scrollCollapse": true,
			"paging":         false,
	        "ordering": true,
	        "info":     false,
			"searching": false,
			"autoWidth": true,
			"processing": true,
			"deferLoading": 57,
			"columns" : [
				{	title: "Elapsed"	, data: "elapsed"	},
				{	title: "Service"	, data: "service"	},
				{	title: "EndTime"	, data: "endTime"	},
				{	title: "TXID"		, data: "txid"		},
				{	title: "CPU"		, data: "cpu"		},
				{	title: "SqlCount"	, data: "sqlCount"	},
				{	title: "SqlTime"	, data: "sqlTime"	}
			],
		
			//"data": _data,
			"createdRow": function ( row, data, index ) {
				if(data.error != '0') {
					$(row).eq(0).css('color', '#ff0000');
				}
	        }
		};
		
	// 맨 처음 xLog Table 셋팅
	xlogTable = $('#list-table').DataTable(param);
	
});


function pad(number){
	return (number < 10 ? '0' : '') + number;
}

// 날짜 형식 포맷
function formatDateTime(date){
	var year = date.getFullYear();
	var month = pad(1 + date.getMonth());
	var day = pad(date.getDate());
	var hour = pad(date.getHours());
	var minute = pad(date.getMinutes());
	var second = pad(date.getSeconds());
	var millisecond = date.getMilliseconds();
	return  year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second +'.'+millisecond;
}

function search(){
	var searchServiceName = $('#searchServiceName').val();
	var formatStartDate = formatDateTime(startDate);
	var formatEndDate = formatDateTime(endDate);
	
	console.info('startDate='+formatStartDate +', endDate='+formatEndDate);
	
	$.ajax({
    	url: '/ajax/monitoring/dashboard',
    	type: 'GET',
    	dataType: 'json',
    	data : {
    		startDate : formatStartDate,
    		endDate : formatEndDate,
    		searchServiceName : searchServiceName
    	},
    	success: function (data) {
    		// data를 받아와 그래프 그리기.
    		var logList = data.logList;
    		setMultiGraph(logChart, logList);
    		
    		var errorList = data.errorList;
    		setMultiGraph(errorChart, errorList);
    		
    		var httpResCodeList = data.httpResCodeList;
    		setMultiGraph(httpResCodeChart, httpResCodeList);
    		
    		var IpList = data.IpList;
    		setMultiGraph(IpChart, IpList);
    		
    		var pageList = data.pageList;
    		setMultiGraph(pageChart, pageList);
    		
    		
    		xlogData = [];
    		if(Modernizr.canvas){
    			doBigScatterChart(xlogData);
    		}
    	}
	});	
}

// 다중 그래프 설정
function setMultiGraph(chart, list) {
	if (list.length == 0) {
		list.push( { cate : "0", value : 0 } );
	}

	chart.graphs = [];
	var graph = {
		"balloonText": "<b>[[category]]: [[value]]</b>",
		"fillColorsField": "color",
		"fillAlphas": 0.9,
		"lineAlpha": 0.2,
		"type": "column",
		"valueField": "value"
	};
	
	chart.graphs.push(graph);

	chart.dataProvider = list;
	chart.validateData();
}

// xlog 차트 출력(Responsive)
function drawXlogChart(){
	var nWidth = $('div:contains("Xlog"):parent:eq(3)').width() - 50;
	var nHeight = $('div:contains("Xlog"):parent:eq(3)').height() - 25;
	optXlog.nWidth = nWidth;
	optXlog.nHeight = nHeight;
	optXlog.nXMin = startDate.getTime();
	optXlog.nXMax = endDate.getTime();
	xlogChart = new BigScatterChart(optXlog);
}

//xlog 차트 X,Y 범주 업데이트
function updateXlogXAxis(startTimestamp, endTimestamp) {
	if(xlogChart != null) {
		xlogChart.updateXYAxis(startTimestamp, endTimestamp, null, null);
	}
}

function doBigScatterChart(data){
	if(xlogChart!= null) {
		xlogChart.clear();
		if(data.length == 0) {
			updateXlogXAxis(startDate.getTime(), endDate.getTime());
		} else {
			xlogChart.addBubbleAndMoveAndDraw(data, endDate.getTime());
		}
	}
}
