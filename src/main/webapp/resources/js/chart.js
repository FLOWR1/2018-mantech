

function chart(url, id, legend) {
	
	var url = contextPath + url;
	//'/ajax/metrics/kubernetes/cpu_using'
	var lastDate;

	$.getJSON(url, function (data) {
		
		function generateChartData(index) {
			var chartData = [];
	   		
	   		var total = 0;
	   		var last = 0;
	   		
	   		

	   		for (var j = 0; j < data.chartData[index].data.length; ++j)
		    {
				var item = data.chartData[index].data[j];
				
				total += item.value;
				last = item.value;

	    		chartData.push({
	            	date: new Date(moment(item.time).toDate()),
	            	value: item.value

	        	});
	    		
	    		lastDate = item.time;

		    }
	   		
	   		if (legend == true)
	   		{
		   		$('#' + id + '_average').html((total / data.chartData[index].data.length).toFixed(2));
		   		$('#' + id + '_pie').data('easyPieChart').update(last)
	   		}
	   		

	   		return chartData;
		}

		
		
		var chartData = generateChartData(0);
	

		
		function Graphs()
		{
			return [{
		        "valueAxis": "v1",
		        "lineColor": "#FF6600",
		        "bullet": "none",
		        "title": data.chartData.name,
		        "valueField": "value",
				"fillAlphas": 0
		    }];
		}
		
		
		var chart = AmCharts.makeChart(id, {
		    "type": "serial",
		    "theme": "light",
		    "dataProvider": chartData,
		    "synchronizeGrid":true,
		    "valueAxes": [{
		        "id":"v1",
		        "axisColor": "#FF6600",
		        "axisThickness": 1,
		        "axisAlpha": 1,
		        "position": "left"
		    }],
		    "graphs": Graphs(),
		    "categoryField": "date",
		    "categoryAxis": {
		        "parseDates": true,
		        "axisColor": "#DADADA",
		        "minorGridEnabled": true,
		        "minPeriod" : "mm"
		    }
		});
		

	
		
		function reqMetrics()
		{
			$.getJSON(url, 
					{
						lastDate: lastDate,
					}, 
				    function(data) {
						
						if(data.chartData.length > 0 && data.chartData[0].data.length > 0)
						{
							
							var chartUpdate = false;
							
					   		for (var j = 0; j < data.chartData[0].data.length; ++j)
						    {
								var item = data.chartData[0].data[j];
								
								var t1 = moment(lastDate).unix();
								var t2 = moment(item.time).unix();
								
								if (t1 < t2)
								{

									last = item.value;
									chart.dataProvider.shift();
									chart.dataProvider.push({
						            	date: new Date(moment(item.time).toDate()),
						            	value: item.value

						        	});
									
									chartUpdate = true;
									lastDate = item.time;
								}
						    }
					   		
					   		
					   		if (chartUpdate)
					   		{
						   		var total = 0;
								 
						   		
						   		for (var j = 0; j < chart.dataProvider.length; ++j)
						   		{
						   			
						   			total += chart.dataProvider[j].value;
						   		}
						   		
						   		if (legend == true)
						   		{
							   		$('#' + id + '_average').html((total / chart.dataProvider.length).toFixed(2));
							   		$('#' + id + '_pie').data('easyPieChart').update(last)
						   		}
						   		
						   		chart.validateData();
					   		}

						}
						
						setTimeout(reqMetrics, 10000);
						

					});
		}
		
		reqMetrics();


		
	});
	
}

