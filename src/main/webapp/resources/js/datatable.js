﻿﻿
function DataTable(id, url, pageShowLength, search_form, pagenum, complete) {

    this.page = 0;
    this.dataTable = null;
    this.id = id;
    this.columns = null;
    this.url = url;
    this.pageLength = pageShowLength;
    this.pageShowLength = 5;
    this.search_form = search_form;
    this.pagenum = pagenum;
    this.complete = complete;


    this.setPageLength = function (length) {
        this.pageLength = length;
    }

    this.reload = function () {
        this.dataTable.ajax.reload();
    }

    this.setColumns = function (columns) {
        this.columns = columns;
    }

    this.show = function () {

        var url = this.url;
        var page = this.page;
        var pageLength = this.pageLength;
        var columnDefs = columnDefs = [{
            targets: "_all",
            orderable: false
        }];

        var columns = [];

        for (var i = 0; i < this.columns.length; ++i) {
            if (typeof this.columns[i].render == 'function') {
                columnDefs.push({
                    targets: i,
                    render: this.columns[i].render
                });
            }

            columns.push({
                className: (typeof this.columns[i].className == 'undefined') ? null : this.columns[i].className,
                data: this.columns[i].data
            });
        }

        var parent = this;

        var param = {};

        param.dom = '<"toolbar">tp';
        param.paging = true;
        param.ordering = false;
        param.info = false;
        param.Search = false;
        param.columnDefs = columnDefs;
        param.processing = true;
        param.responsive = true;
        param.retrieve = true;
        param.language = {
            "processing": "Hang on. Waiting for response...",
        };
        param.pageLength = pageLength;
        
        param.ajax = {
        		url: url,
				type: "POST",
				data: function (d) {


				},
				dataSrc: function(json){
					
					parent.total = json.list.recordsTotal;

                    if (typeof parent.complete != 'undefined')
                    {
                    	parent.complete();
                    }

					return json.list.data;

				}
        }

        param.pagingType = "full_numbers";
        param.columns = columns;
        
        // pagination small
        if(id == '#service-list') {
        	param.drawCallback = function () {
        		$('.dataTables_paginate > .pagination').addClass('pagination-sm');
        	}
        }
        
        this.dataTable = $(this.id).DataTable(param);
        
        if(id != '#service-list' && id != '#buildTable' && id != '#list-pod') { // only list view.
	        var html = '';
	        html += '<div class="input-group">';
	        html += '	<span class="input-group-addon">';
	        html += '		<i class="glyphicon glyphicon-search"></i>';
	        html += '	</span>';
	        html += '	<input class="form-control" id="search" type="text">';
	        html += '</div>';
	        $(id).prev('div.toolbar').html(html);
	        
	        $(document).on( 'keyup', '#search', function () {
	        	$(id).DataTable().search($(this).val()).draw();
	        } );
        }
        
    }
    
}
