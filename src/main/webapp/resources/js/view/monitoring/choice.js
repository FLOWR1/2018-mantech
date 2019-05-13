// 갱신 주기값
var timerID;

function initChoice  () {
	
	$('#daterange').daterangepicker({
		autoApply: true,
		timePicker: true,
		timePickerIncrement: 15,
		locale: {
			format: 'YYYY-MM-DD HH:mm'
			},
		alwaysShowCalendars: true,
		opens:'center',
		startDate: moment().subtract(30, 'minutes'),
		endDate: moment(),
        ranges: {
        	'5 minutes': [moment().subtract(5, 'minutes'), moment()]
        	, '15 minutes': [moment().subtract(15, 'minutes'), moment()]
        	, '30 minutes': [moment().subtract(30, 'minutes'), moment()]
        	, '1 hour': [moment().subtract(1, 'hours'), moment()]
        	, '3 hours': [moment().subtract(3, 'hours'), moment()]
        	, '6 hours': [moment().subtract(6, 'hours'), moment()]
        	, '12 hours': [moment().subtract(12, 'hours'), moment()]
        	, '24 hours': [moment().subtract(1, 'days'), moment()]
         }

	});

	initDropDownClick ();

	buttonGo();
	
	// Exit for gridOff
	if ( $('#gridOff').val() ) return;
	
	$('#btnGo').click(function(e) {
		buttonGo();
	});

	$('#btnRestore').click(function(e) {
		deleteCookie(grid_id);
		location.reload();
	});
	
}		

function initDropDownClick () {
	
	$(".js-status-update a").click(function() {
		var $this = $(this);
		var selText = $this.text();
		//$this.parents('.project-context').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
		$this.parents('.project-context').find('.dropdown-toggle').html(selText + ' <i class="fa fa-angle-down"></i>');
		$this.parents('.dropdown-menu').find('li').removeClass('active');
		$this.parent().addClass('active');

		var dropdownType = $this.attr('dropdown-type');
		var dropdownData = $this.attr('dropdown-data');
		var dropdownDataType = $this.attr('dropdown-data-type');

		switch (dropdownType) {
		case "app":
			$('#currentApp').val(dropdownData);
			$('#currentAppType').val(dropdownDataType);
			changePodNames(dropdownData);
			break;
		case "pod":
			$('#currentPod').val(dropdownData);
			break;
		case "repeat":
			$('#currentRpt').val(dropdownData);
			break;
		}
	});	
	
}
var _start;
var _end;
// buttonGo - Button Label Display by "Apply" 
function buttonGo () {
	$('#lastDate').val('');
	var _rpt =  Number( $('#currentRpt').val() );
	var menu = $('#menu').val();
	if($('#daterange').length == 0) { // dashboard
		var startDate = new Date();
		var endDate = new Date();
		startDate.setMinutes(startDate.getMinutes() - 30);
		
		_start = getTimestamp(startDate);
		_end = getTimestamp(endDate);
	} else {
		_start = $('#daterange').data('daterangepicker').startDate.format('YYYY-MM-DD HH:mm:ss');
		_end = $('#daterange').data('daterangepicker').endDate.format('YYYY-MM-DD HH:mm:ss');
		if(menu == 'dashboard' || menu == 'apm') {
			var startTimestamp = new Date(_start).getTime();
			var endTimestamp = new Date(_end).getTime();
			updateXlogXAxis(startTimestamp, endTimestamp);
		}
	}
	
	buttonApply(_start, _end);
	
	clearInterval(timerID);
	
	if (_rpt > 0) {
		timerID = setInterval( function() {
			
			var _daterangepicker = $('#daterange').data('daterangepicker');
			var _duration = moment.duration(_daterangepicker.endDate.diff(_daterangepicker.startDate));
			_start = moment().subtract(_duration).format('YYYY-MM-DD HH:mm:ss');
			_end = moment().format('YYYY-MM-DD HH:mm:ss');
			if(menu == 'dashboard' || menu == 'apm') {
				updateXlogXAxis(new Date(moment().subtract(_duration)).getTime(), new Date(moment()).getTime());
			}
			buttonApply(_start, _end);
		}
		, 1000 * _rpt );
	}
	
}

function buttonApply(startDate, endDate, lastDate) {
	
	var url = $('#url').val();
	var podName =  $('#currentPod').val();
	var appName = $('#currentApp').val();
	var choiceKey = podName == 'All'? appName : podName;
	
	if(url != null) {
		var appType = $('#currentAppType').val();
		var searchKey = choiceKey == appName? appName+ '-' : podName;
		//var lastDate = $('#lastDate').val();
		var data ={ 
		    		podName : podName
		    		, appName : appName
		    		, appType : appType
		    		, choiceKey : choiceKey
		    		, searchKey : searchKey
		    		, startDate : startDate
		    		, endDate : endDate
		    		, lastDate : lastDate
		    		};
		applyCharts(url, data);
		//lastDate = endDate;
	} else {	// server log
		applyList(appName, choiceKey, startDate, endDate);
	}
}

function applyCharts(url, data) {
	
	$.ajax({
    	url: url ,
    	type: 'POST',
    	dataType: 'json',
    	data : data,
    	success: function (response) {
    		if(response.data == null) {
    			setCharts(response);
    		} else {
    			setCharts(JSON.parse(response.data));
    		}
    	}
	});	
}

function getTimestamp(date){
	var timestamp = $.datepicker.formatDate('yy-mm-dd', date) + " " + pad(date.getHours())+":"+ pad(date.getMinutes())+":"+pad(date.getSeconds());
	return timestamp;
}

function pad(number){
	return (number < 10 ? '0' : '') + number;
}


function setMultiGraph(_chart, _list, _names) {
	if(_names == null ) {
		if (_list.length < 1) {
			_list.push( { cate : "0", value : 0 } );
		}

		_chart.graphs = [];
		var _graph = {
			"balloonText": "<b>[[category]]: [[value]]</b>",
			"fillColorsField": "color",
			"fillAlphas": 0.9,
			"lineAlpha": 0.2,
			"type": "column",
			"valueField": "value"
		};
		
		_chart.graphs.push(_graph);
	} else {
		var _lineColor = [
			"#FF5548", "#2CA0FB", "#652FC5", "#8459D1", "#FFDE00",
			"#5DDAE8", "#FC4A46", "#FD7114", "#59D7E4", "#8055CD",
			];
		
		_chart.graphs = [];
		
		for (i=0; i<_names.length; i++) {
			var _graph = {
					"valueAxis": "v1",
					"bullet": "round",
					"bulletBorderThickness": 1,
					"bulletColor": "#FFFFFF",
					"bulletSize": 1,
			        "hideBulletsCount": 1,
			        "fillAlphas": 0.5,
			        "lineAlpha": 0.5,
			        "balloonText" : "[[title]] : [[value]]"
				}
			
			_graph.lineColor = _lineColor[ i % 10 ];
			_graph.valueField = "value" + i;
			_graph.title = _names[i];
			
			_chart.graphs.push(_graph);
		}
	}
	/*if(_chart.dataProvider !=null) {
		_chart.dataProvider.shift();
		$.each(_list,function(index, item) {
			_chart.dataProvider.push(item);	
		});
		
	} else {
		_chart.dataProvider = _list;
	}*/
	_chart.dataProvider = _list;
	_chart.validateData();
	
    //overflow: hidden;
    //text-overflow: ellipsis;
}

function popupXlogDetail(sData){
	if(sData.length > 0) {
		var option = 'width=930, height=850, resizable=yes, scrollbars=yes, status=no;';
		
		var popup = window.open('xlog',"", option);
	}
}
