function INT(str) {
    var t1 = parseInt(str);


    if (isNaN(t1)) {
        return 0;
    }

    return t1;
}

function validateNumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
  return theEvent.returnValue;
}

$.validator.addMethod("regx", function(value, element, regexpr) {   
    return regexpr.test(value);
}, "Please check your input.");

$.validator.addMethod("same", function(value, element, url) {
	var fff = false;
	url += value;
	$.ajax({
       	url: contextPath + url,
       	type: 'POST',
       	dataType: 'json',
       	async : false,
       	data: {} ,
       	success: function (response) {
       		if (response.result == 0){
       			fff = true;
       		}
       	}
  	});
	return fff;
}, "Please check your input.");

$.validator.addMethod(
        "projectName",
        function(value, element) {
			var re = new RegExp(/^[a-z0-9]([a-z0-9]*[a-z0-9])?[a-z0-9]$/);
            return re.test(value);
        },
        "Please check your input."
);

$.validator.addMethod(
        "appName",
        function(value, element) {
			var re = new RegExp(/^[a-z]([-a-z0-9]*[a-z0-9])?[a-z0-9]$/);
            return re.test(value);
            return fff;
          
        },
        "Please check your input."
);

$.validator.addMethod(
        "kubeName",
        function(value, element) {
			var re = new RegExp(/(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?/);
            return re.test(value);

          
        },
        "Please check your input."
);


$.validator.addMethod(
        "pathName",
        function(value, element) {
			var re = new RegExp(/^(\/[A-Za-z0-9-.]*)+/);
            var fff = re.test(value);
            return re.lastIndex == value.length
          
        },
        "Please check your input."
);


$.validator.addMethod(
        "volumeName",
        function(value, element) {
			var re = new RegExp(/(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?/);
            var fff = re.test(value);
            return re.lastIndex == value.length
          
        },
        "Please check your input."
);

$.validator.addMethod(
        "ipAddress",
        function(value, element) {
			var re = new RegExp(/[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}/);
            return re.test(value);
        },
        "Please check your input."
);


$.validator.addMethod(
        "hostName",
        function(value, element) {
			var re = new RegExp(/^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/);
            return re.test(value);
        },
        "Please check your input."
);

function confirm(mag, callback)
{
	
	bootbox.confirm({
	    message: I18N(mag),
	    buttons: {
	        cancel: {
	            label: '<i class="fa fa-times"></i> ' + I18N("alert.cancel")
	        },
	        confirm: {
	            label: '<i class="fa fa-check"></i> ' + I18N("alert.confirm")
	        }
	    },
	    callback: function (result) {
	    	callback(result);
	    }
	})
}

// 숫자 통화형식
function formatNumber(num) {
	 return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getContextPath() {
    var contextPath = window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
    return contextPath;
}

