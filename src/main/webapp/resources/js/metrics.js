
function status(running, failed )
{
    var html = "";

    if (running > 0)
    {

    	html += "<p>";
    	html += String.format('<i class="fa fa-check-circle-o"></i> <span style="padding-right:20px">{0} running </span>', 
    			running);
    	html += "</p>";
    }
    
    if (failed > 0)
    {
        html += "<p>";
        html += String.format('<i class="fa fa-check-circle-o"></i> <span style="padding-right:20px">{0} failed  </span>',
        		failed);
        html += '</p>';
    	
    }
    
    return html;
}

function podStatus(projectName)
{
	var url;
	
	if (typeof projectName == 'undefined')
	{
		url = contextPath + '/ajax/dashboard/pod/status';
	}
	else
	{
		url = contextPath + '/ajax/dashboard/pod/status/' + projectName;
	}
	
	$.ajax({
       	url: url,
       	type: 'POST',
       	dataType: 'json',
       	success: function (response) {
       		$('#pod').html(response.total + " PODS");
    	    $('#pod_container').html(status(response.running, response.failed));
       	}
  	});	
}

function volumeStatus(projectName)
{
	
	var url;
	
	if (typeof projectName == 'undefined')
	{
		url = contextPath + '/ajax/dashboard/volume/status';
	}
	else
	{
		url = contextPath + '/ajax/dashboard/volume/status/' + projectName;
	}
	
	
	$.ajax({
       	url: url,
       	type: 'POST',
       	dataType: 'json',
       	success: function (response) {
       		$('#volume').html(response.total + " Volums");
    	    $('#volume_container').html(status(response.bound, 0));
       	}
  	});	
}

function serviceStatus(projectName)
{
	var url;
	
	if (typeof projectName == 'undefined')
	{
		url = contextPath + '/ajax/dashboard/service/status';
	}
	else
	{
		url = contextPath + '/ajax/dashboard/service/status/' + projectName;
	}
	
	$.ajax({
       	url: url,
       	type: 'POST',
       	dataType: 'json',
       	success: function (response) {
       		$('#servicesCount').html(response.total);
       	}
  	});	
}

