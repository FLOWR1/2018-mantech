/**
 * Big Scatter Chart
 * @class BigScatterChart 
 * @version 1.3.6
 * @since June 19, 2013
 * @author Denny Lim<hello@iamdenny.com, iamdenny@nhn.com>
 * @license MIT License
 * @copyright 2013 NHN Corp.
 */
var BigScatterChart = $.Class({
	$init : function(htOption){
		this.option({
			'sContainerId' : '',
			'sPrefix' : 'bigscatterchart-',
			'nWidth': 600,
			'nHeight': 400,
			'nXMin': 0, 'nXMax': 100,
			'nYMin': 0, 'nYMax': 100,
			'nZMin': 0, 'nZMax': 1,
			'nXSteps': 5,
			'nYSteps': 5,
			'nXLabel': null,
			'nYLabel': null,
			'nBubbleSize': 10,
			'nPaddingTop' : 30,
			'nPaddingRight' : 20,
			'nPaddingBottom' : 30,
			'nPaddingLeft' : 50,
			'sLineColor' : '#000',			
			'htTypeAndColor' : {
				'Success' : '#b6da54', // type name : color, also order
				'Warning' : '#fcc666',
				'Failed' : '#fd7865',
				'Others' : '#55c7c7'
			},
			'nZIndexForCanvas' : 1,
			'nDefaultRadius' : 3,
			'htGuideLine' : {
				'nLineWidth' : 1,
				'aLineDash' : [2, 5],
				'nGlobalAlpha' : 0.2
			},
			'sTitle' : 'Big Scatter Chart by Denny',
			'htTitleStyle' : {
				'font-size' : '12px',
				'font-weight' : 'bold'
			},
			'sXLabel' : '',
			'sYLabel' : '',
			'htLabelStyle' : {
				'font-size': '10px',
				'line-height': '20px',
				'height': '20px',
			},
			'sShowLoading' : 'Loading',
			'sShowNoData' : 'No Data',
			'htShowNoDataStyle' : {
				'font-size' : '15px',
				'color' : '#000',
				'font-weight' : 'bold'
			},
			'sDragToSelectClassName' : 'jquery-drag-to-select',
			'htCheckBoxImage' : {
				'checked' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODk0MjRENUI2Qjk2MTFFM0E3NkNCRkIyQTkxMjZFQjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODk0MjRENUM2Qjk2MTFFM0E3NkNCRkIyQTkxMjZFQjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4OTQyNEQ1OTZCOTYxMUUzQTc2Q0JGQjJBOTEyNkVCMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4OTQyNEQ1QTZCOTYxMUUzQTc2Q0JGQjJBOTEyNkVCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkJ02akAAAEfSURBVHjalJI/aoRQEMbnrU8RRVYsBAXJASxEtLGRXEDIJXKTpPcOHiDl1gsp1QvEIiD2AbGLmpm3f7Is68YMjOOb9/0Y/Rg2zzPEcTzDP6IsS7Y5QXTAsibFIH4BQVVVi1Mcx9liyTFN13W/+JpPI0iSpL1hGEHf9+E0TSBAxtifkGVZgSzLgBkMwwCbNZNOEIVpmo3v+78gigLMt+O/3IR0XW/yPH/uuu4AEqQoComeSIznhyUoDMP3cRwPoKZpLyjaqqoKJOacfy5B6Mc39QRYFMUrOtbQO4lt24Z70BlMkqSkSxJdmrMEiYiiSGwOrh6v6/oxTdMP6lGlM/Wv3RYMPY55hrMs292DKNn1kqOb4HketG0L5N5CsB8BBgCZjoUNsxfiYwAAAABJRU5ErkJggg==',
				'unchecked' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEQxQ0ZERUQ2Qjk2MTFFMzg5MjNGMjAzRjdCQ0FEMjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEQxQ0ZERUU2Qjk2MTFFMzg5MjNGMjAzRjdCQ0FEMjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RDFDRkRFQjZCOTYxMUUzODkyM0YyMDNGN0JDQUQyOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RDFDRkRFQzZCOTYxMUUzODkyM0YyMDNGN0JDQUQyOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq1+Js8AAABTSURBVHjaYvz//z+DiYnJfwYSwJkzZxgZjY2NYZoYidQHVs9Eoia4WhY0JxDUBfQWA7KNRGlCVsfEQCYY1UhLjf9hEUtEAgAnOUZyEjlIH0CAAQDn/BlKI9rDJAAAAABJRU5ErkJggg=='
			},
			'fXAxisFormat' : function(nXStep, i){
				var nMilliseconds = (nXStep * i + this._nXMin),
					sDate = new Date(nMilliseconds).toString("HH:mm");
				return sDate; 
			},
			'fYAxisFormat' : function(nYStep, i){
				return this._addComma((this._nYMax + this._nYMin) - ((nYStep*i) + this._nYMin));
			},
			'htDataSource' : {
				sUrl : function(){},
				htParam : function(htFetchedData){},
				nFetch : function(htFetchedData){},
				htOption : {
					dataType : 'jsonp',
					jsonp : 'callback'
				}
			},
			'sConfigImage' : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTI2NzMzRDI2QTlGMTFFM0E1RENBRjZGODkwRDBCMEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTI2NzMzRDM2QTlGMTFFM0E1RENBRjZGODkwRDBCMEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMjY3MzNEMDZBOUYxMUUzQTVEQ0FGNkY4OTBEMEIwQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMjY3MzNEMTZBOUYxMUUzQTVEQ0FGNkY4OTBEMEIwQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn/ejkcAAAFwSURBVHjanFKxSsNQFE2CFEtaTNsMCbSQ4lA6GSghi2igo/o/GVz6AfmD/EFGJ7cKDiVLO0hFEByzpG1EA5LUxntC80jFKhi4LzfnnnPfzXmPz7KM+9ezT6iq6gnF+T4Nny88/110VK1WbwRB4OM4vgyC4PVXIQlW9JqRwGo2mzm2XC65zWYzplSnBo1CeFDu1Ov1XhaLhVWpVBimKAqXJInVarWmJGQ42xHjybIcQSSK4rNt29cgOI5jR1Gkk5gLw1DC2LkvWGBCu90eDwaDDOF53hXhhwjf908LHByYBo2ArqZpfnY6HbEYw3XdJ5riAzEajR4LHJxut6syhyhq5c6apt1hdER5EnCIKzFzqPM7fUwkSZrhf+r1+lmaphFqjUZuJIeaYRgT4q7ZqFvxmn7+GAQYBDcRyIGhBs6PN4dyjKLP5/OL4XA4RSAHhlpZs3OO1PF+W3ggwxQ6u7d+v3+7s9Nfd3VrQm3fXf0SYADyptv3yy4A0QAAAABJRU5ErkJggg=='
		});
		this.option(htOption);
			
		this._initVariables();
		this._initElements();
		this._initEvents();
		this._drawXYAxis();
		this.updateXYAxis();
	},

	_initVariables : function(bIsRedrawing){
		if(bIsRedrawing != true){
			this._aBubbles = [];
			this._aBubbleStep = [];
		}
		
		var nPaddingTop = this.option('nPaddingTop'),
			nPaddingLeft = this.option('nPaddingLeft'),
			nPaddingBottom = this.option('nPaddingBottom'),
			nPaddingRight = this.option('nPaddingRight'),
			nBubbleSize = this.option('nBubbleSize'),
			nWidth = this.option('nWidth'),
			nHeight = this.option('nHeight');

		this._nXSteps = this.option('nXSteps') - 1;
		this._nYSteps = this.option('nYSteps') - 1;

		if (this.option('nYLabel')) this._paddingLeft += 30;
		if (this.option('nXLabel')) this._paddingBottom += 20;

		this._nXWork = (nWidth - (nPaddingLeft + nPaddingRight)) - nBubbleSize * 2;
		this._nYWork = (nHeight - (nPaddingTop + nPaddingBottom)) - nBubbleSize * 2;		
		
		this._nXMax = this.option('nXMax');
		this._nXMin = this.option('nXMin');
				
		this._nYMax = this.option('nYMax');
		this._nYMin = this.option('nYMin');
		
		this._nZMax = this.option('nZMax');
		this._nZMin = this.option('nZMin');
		
		this._awelXNumber = [];
		this._awelYNumber = [];		

		this._htTypeCount = {};

		this._bDestroied = false;
	},

	_initElements : function(){
		var self = this,
			nXStep = this._nXWork / this._nXSteps,
			nYStep = this._nYWork / this._nYSteps,
			nWidth = this.option('nWidth'),
			nHeight = this.option('nHeight'),
			nPaddingTop = this.option('nPaddingTop'),
			nPaddingLeft = this.option('nPaddingLeft'),
			nPaddingBottom = this.option('nPaddingBottom'),
			nPaddingRight = this.option('nPaddingRight'),
			nBubbleSize = this.option('nBubbleSize'),
			sLineColor = this.option('sLineColor'),
			htType = this.option('htTypeAndColor'),
			sPrefix = this.option('sPrefix'),
			nZIndexForCanvas = this.option('nZIndexForCanvas');

		// container
		this._welContainer = $('#' + this.option('sContainerId'));					
		this._welContainer.css({
			'position' : 'relative',
			'width' : this.option('nWidth'),
			'height' : this.option('nHeight'),
		}).addClass('bigscatterchart');

		// guide
		this._welGuideCanvas = $('<canvas>')
			.attr({
				'width' : this.option('nWidth'),
				'height' : this.option('nHeight')
			}).css({
				'position' : 'absolute',
				'top' : 0,
				'z-index' : nZIndexForCanvas - 1
			}).append($('<div>')
				.width(this.option('nWidth'))
				.height(this.option('nHeight'))
				.text('Your browser does not support the canvas element, get a better one!')
				.css({
					'text-align': 'center',
					'background-color': '#8b2e19',
					'color': '#fff'
				})
			);
		this._welGuideCanvas.appendTo(this._welContainer);
		this._oGuideCtx = this._welGuideCanvas.get(0).getContext('2d');

		// plot chart for bubbles
		this._htwelChartCanvas = {};
		this._htBubbleCtx = {};		
		_.each(htType, function(sVal, sKey){
			this._htwelChartCanvas[sKey] = $('<canvas>')
				.addClass(sPrefix+sKey)
				.attr({
					'width' : this.option('nWidth'),
					'height' : this.option('nHeight')
				}).css({
					'position' : 'absolute',
					'top' : 0,
					'z-index' : nZIndexForCanvas++
				}).appendTo(this._welContainer);
			this._htBubbleCtx[sKey] = this._htwelChartCanvas[sKey].get(0).getContext('2d');
		}, this);

		// Axis
		this._welAxisCanvas = $('<canvas>')
			.attr({
				'width' : this.option('nWidth'),
				'height' : this.option('nHeight')
			}).css({
				'position' : 'absolute',
				'top' : 0,
				'z-index' : nZIndexForCanvas++
			}).append($('<div>')
				.width(this.option('nWidth'))
				.height(this.option('nHeight'))
				.text('Your browser does not support the canvas element, get a better one!')
				.css({
					'text-align': 'center',
					'background-color': '#8b2e19',
					'color': '#fff'
				})
			);
		this._welAxisCanvas.appendTo(this._welContainer);
		this._oAxisCtx = this._welAxisCanvas.get(0).getContext('2d');

		// overlay for all the labels
		this._welOverlay = $('<div>').css({
			'position': 'absolute',
			'width': this.option('nWidth'),
			'height': this.option('nHeight'),
			'top': 0,
			'font-family': 'Helvetica, Arial, sans-serif',
			'z-index': nZIndexForCanvas++
		});
		this._welOverlay.appendTo(this._welContainer);

		var htLabelStyle = this.option('htLabelStyle');
		// x axis
		for(var i=0; i<=this._nXSteps; i++){
			this._awelXNumber.push($('<div>')
				.text(' ')
				.css({
					'position': 'absolute',
					'width': nXStep + 'px',
					'text-align': 'center',
					'top': (nHeight - nPaddingBottom + 10) + 'px',
					'left': (nPaddingLeft + nBubbleSize) - (nXStep / 2) + i * nXStep + 'px',
					'color': sLineColor
				})
				.css(htLabelStyle)
			);
		}

		// y axis
		for(var i=0; i<=this._nYSteps; i++){
			this._awelYNumber.push($('<div>')
				.text(' ')
				.css({
					'position': 'absolute',
					'vertical-align': 'middle',
					'width': (nPaddingLeft - 15) + 'px',
					'text-align': 'right',
					'top': (nBubbleSize + (i * nYStep) + nPaddingTop - 10) + 'px',
					'left': '0px',
					'color': sLineColor
				})
				.css(htLabelStyle)
			);
		}
		this._welOverlay.append(this._awelXNumber);
		this._welOverlay.append(this._awelYNumber);	

		// sXLabel
		var sXLabel = this.option('sXLabel');
		if(_.isString(sXLabel) && sXLabel.length > 0){
			this._welOverlay.append(this._welXLabel = $('<div>')
									.text(sXLabel)
									.css(htLabelStyle)
									.css({
										'position': 'absolute',
										'text-align': 'center',
										'top': (nHeight - nPaddingBottom + 10) + 'px',
										'right': 0,
										'color': sLineColor
									})
			);
		}		

		// sYLabel
		var sYLabel = this.option('sYLabel');
		if(_.isString(sYLabel) && sYLabel.length > 0){
			this._welOverlay.append(this._welYLabel = $('<div>')
									.text(sYLabel)
									.css(htLabelStyle)
									.css({
										'position' : 'absolute',
										'vertical-align' : 'middle',
										'width': (nPaddingLeft - 15) + 'px',
										'text-align': 'right',
										'top': (nBubbleSize + nPaddingTop + 10) + 'px',
										'left': '0px',
										'color': sLineColor
									})
			);
		}

		// sShowNoData
		var sShowNoData = this.option('sShowNoData'),
			htShowNoDataStyle = this.option('htShowNoDataStyle');
		this._welShowNoData = $('<div>')
								.text(sShowNoData)
								.css(htShowNoDataStyle)
								.css({
									'position' : 'absolute',
									'top' : nHeight/2 + 'px',
									'width' : '100%',
									'text-align' : 'center'								
								});
		this._welOverlay.append(this._welShowNoData);
		
		// count per type to show up
		this._welTypeUl = $('<ul>')
			.css({
				'position' : 'absolute',
				'top' : '5px',
				'right' : nPaddingRight + 20 + 'px',
				'list-style' : 'none',
				'font-size' : '12px',
				'padding' : '0',
				'margin' :'0'
			});
		this._htwelTypeLi = {};
		this._htwelTypeSpan = {};
		var htCheckBoxImage = this.option('htCheckBoxImage');
		_.each(htType, function(sVal, sKey){
			this._welTypeUl.append(
				this._htwelTypeLi[sKey] = $('<li>')
				.css({
					'display' : 'inline-block',
					'margin' : '0 0 0 20px',
					'padding' : '0 0 0 16px',
					'line-height' : '15px',
					'color' : htType[sKey],
					'background-image' : 'url(' + htCheckBoxImage.checked + ')',
					'background-repeat' : 'no-repeat',
					'cursor' : 'url(data:image/gif;base64,R0lGODlhDgAGAIABAAAAA////yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgTWFjaW50b3NoIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQyMTA0RDZFQjEyNTExRTI5Q0M1REU5NjlFRThGRDZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQyMTA0RDZGQjEyNTExRTI5Q0M1REU5NjlFRThGRDZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDIxMDRENkNCMTI1MTFFMjlDQzVERTk2OUVFOEZENkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDIxMDRENkRCMTI1MTFFMjlDQzVERTk2OUVFOEZENkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAABACwAAAAADgAGAAACEUxgmWjA2pCbtNorH3QL9lAAADs=), move'
				})
				.text(sKey + ' : ')
				.append(
					this._htwelTypeSpan[sKey] = $('<span>')
					.text('0')
				)
			);
		}, this);
		this._welTypeUl.appendTo(this._welOverlay);
		this._oCheckedBoxImage = new Image();
		this._oCheckedBoxImage.src = htCheckBoxImage.checked;
		this._oUncheckedBoxImage = new Image();
		this._oUncheckedBoxImage.src = htCheckBoxImage.unchecked;

		this._awelChartCanvasInOrder = [];
		_.each(this._htwelChartCanvas, function(welChartCanvas, sKey){
			this._awelChartCanvasInOrder.push(welChartCanvas);
		}, this);
		this._welTypeUl.mousedown(function(e){
			e.stopPropagation();
			//e.preventDefault();
		});
		this._welTypeUl.sortable({
			axis: 'x',
			containment: "document",
    		placeholder: sPrefix + 'placeholder',
			start : function(event, ui){
				$('.bigscatterchart-placeholder').append('<span>&nbsp;</span>');
				ui.item.startIndex = ui.item.index();
			},
			stop : function(event,ui){
				var nZIndexForCanvas = self.option('nZIndexForCanvas');
        		var nStart = ui.item.startIndex,
        			nStop = ui.item.index();

        		var welStart = self._awelChartCanvasInOrder[nStart];
        		self._awelChartCanvasInOrder.splice(nStart, 1); 
        		self._awelChartCanvasInOrder.splice(nStop, 0, welStart);
        		
        		for(var i=0, nLen=self._awelChartCanvasInOrder.length; i<nLen; i++){
        			self._awelChartCanvasInOrder[i].css('z-index', nZIndexForCanvas+i);
        		}
			}
		});

		this._resetTypeCount();

		// title
		var htTypeUlOffset = this._welTypeUl.offset(),
			htOverlayOffset = this._welOverlay.offset(),
			nLeftGap = htTypeUlOffset.left - htOverlayOffset.left;
		
		var sTitle = this.option('sTitle'),
			htTitleStyle = this.option('htTitleStyle');
		if(_.isString(sTitle) && sTitle.length > 0){
			this._welOverlay.append(this._welTitle = $('<div>')
									.text(sTitle)
									.css({
										'position' : 'absolute',
										'vertical-align' : 'middle',
										'top': '5px',
										'left': '5px',
										'width' : nLeftGap - 5 + 'px',
										'overflow' : 'hidden',
										'white-space' : 'nowrap',
										'text-overflow' : 'ellipsis'
									})
									.css(htTitleStyle)
			);
			// do after image loading
			setTimeout(function(){
				var htTypeUlOffset = self._welTypeUl.offset(),
					htOverlayOffset = self._welOverlay.offset(),
					nLeftGap = htTypeUlOffset.left - htOverlayOffset.left;
				self._welTitle.width(nLeftGap - 5)
			}, 1000);
		}		
		
		// config
		var nCenterOfWidth = nWidth / 2,
			nMiddleOfHeight = nHeight / 2,
			nConfigLayerWidth = 200,
			nConfigLayerHeight = 130,
			sYMin = sPrefix + 'ymin',
			sYMax = sPrefix + 'ymax';
		
		var fConfigToggle = function(e){
			self._welConfigBg.toggle();
			self._welConfigLayer.toggle();
			$('#' + sYMin).val(self.option('nYMin'));
			$('#' + sYMax).val(self.option('nYMax'));
			if(e) e.preventDefault();
		}		
		var sConfigImage = this.option('sConfigImage');
		this._welContainer.append(this._welConfigButton = $('<img>')
								.attr('src', sConfigImage)
								.css({
									'position' : 'absolute',
									'top' : '6px',
									'right' : '5px',
									'cursor' : 'pointer',
									'z-index' : nZIndexForCanvas++
								})
								.click(fConfigToggle)
		);
		this._welConfigBg = $('<div>')
			.addClass('config-bg')
			.css({
				'position' : 'absolute',
				'width' :  nWidth + 'px',
				'height' : nHeight + 'px',
				'background-color' : '#000',
				'opacity' : 0.3,
				'display' : 'none',
				'z-index' : nZIndexForCanvas++
			})
			.click(fConfigToggle)
			.appendTo(this._welContainer);
		
		this._welConfigLayer = $('<div>')
			.addClass('config')
			.css({
				'top' : nMiddleOfHeight - nConfigLayerHeight/2 + 'px',
				'left' : nCenterOfWidth - nConfigLayerWidth/2 + 'px',
				'width' : nConfigLayerWidth + 'px',
				'height' : nConfigLayerHeight + 'px',
				'z-index' : nZIndexForCanvas++
			})
			.append('<h4>Setting</h4>')
			.append('<label for="'+sYMin+'" class="label">Min of Y axis</label>')
			.append('<input type="text" name="'+sYMin+'" id="'+sYMin+'" class="input"/>')
			.append('<label for="'+sYMax+'" class="label">Max of Y axis</label>')
			.append('<input type="text" name="'+sYMax+'" id="'+sYMax+'" class="input"/>')
			.append(this._welConfigApply = $('<button type="button" class="button apply">Apply</button>'))
			.append(this._welConfigCancel = $('<button type="button" class="button cancel">Cancel</button>'));
		
		this._welConfigApply.click(function(){
			var nYMin = parseInt($('#' + sYMin).val(), 10),
				nYMax = parseInt($('#' + sYMax).val(), 10);
			if(nYMin >= nYMax){
				alert('Min of Y axis is should be smaller than ' + nYMax);
				return;
			}
			self.option('nYMin', nYMin);
			self.option('nYMax', nYMax);
			fConfigToggle();
			self._redraw();
		});
		this._welConfigCancel.click(fConfigToggle);
		this._welConfigLayer.appendTo(this._welContainer);
	},

	_initEvents : function(){
		var self = this;
		var htCheckBoxImage = this.option('htCheckBoxImage');
		_.each(this._htwelTypeLi, function(welTypeLi, sKey){
			welTypeLi.click(function(e){
				e.preventDefault();
				self._htwelChartCanvas[sKey].toggle();
				if(!welTypeLi.hasClass('unchecked')){
					welTypeLi.addClass('unchecked')
					welTypeLi.css('background-image', 'url('+htCheckBoxImage.unchecked+')');
				}else{
					welTypeLi.removeClass('unchecked')
					welTypeLi.css('background-image', 'url('+htCheckBoxImage.checked+')');
				};

			});
		}, this);

		var sDragToSelectClassName = this.option('sDragToSelectClassName');
		this._welOverlay.dragToSelect({
			className: sDragToSelectClassName,
		    onHide: function (welSelectBox) {		    	
		    	var htPosition = self._adjustSelectBoxForChart(welSelectBox),
    	            htXY = self._parseCoordinatesToXY(htPosition);
    	
    	            self._welSelectBox = welSelectBox;
    	
    	        var fOnSelect = self.option('fOnSelect');
    	        if(_.isFunction(fOnSelect)){
    	          fOnSelect.call(self, htPosition, htXY);
    	        }
		    }
		});
	},


	_moveSelectBox : function(nXGap){
		if(!this._welSelectBox) return;
		if(this._welSelectBox.width() < 2) return;

		var nPositionXGap = (nXGap / (this._nXMax - this._nXMin)) * this._nXWork;
		
		var nLeft = parseInt(this._welSelectBox.css('left'), 10),
			nWidth = this._welSelectBox.width(),
			nPaddingLeft = this.option('nPaddingLeft'),
			nBubbleSize = this.option('nBubbleSize'),
			nXMin = nPaddingLeft + nBubbleSize;

		var nNewLeft = nLeft - nPositionXGap;

		if(nLeft > nXMin){
			if(nNewLeft > nXMin){
				this._welSelectBox.css('left', nNewLeft);
			}else{
				this._welSelectBox.css('left', nXMin);
				this._welSelectBox.width(nWidth + nNewLeft);
			}
		}else{
			this._welSelectBox.width(nWidth - nPositionXGap);
		}

		if(nLeft - nPositionXGap > nPaddingLeft + nBubbleSize){
			this._welSelectBox.css('left', nLeft - nPositionXGap);
		}else{
			
		}
	},

	_adjustSelectBoxForChart : function(welSelectBox, cb){
		var nPaddingTop = this.option('nPaddingTop'),
			nPaddingLeft = this.option('nPaddingLeft'),
			nPaddingBottom = this.option('nPaddingBottom'),
			nPaddingRight = this.option('nPaddingRight'),
			nWidth = this.option('nWidth'),
			nHeight = this.option('nHeight'),
			nBubbleSize = this.option('nBubbleSize');

		var nMinLeft = nPaddingLeft + nBubbleSize,
			nMaxRight = nWidth - nPaddingRight - nBubbleSize,
			nMinTop = nPaddingTop + nBubbleSize,
			nMaxBottom = nHeight - nPaddingBottom - nBubbleSize;

    	var nLeft = parseInt(welSelectBox.css('left'), 10),
    		nRight = nLeft + welSelectBox.width(),
    		nTop = parseInt(welSelectBox.css('top'), 10),
    		nBottom = nTop + welSelectBox.height();

    	if(nLeft < nMinLeft) { nLeft = nMinLeft; }
    	if(nRight > nMaxRight) { nRight = nMaxRight; }
    	if(nTop < nMinTop) { nTop = nMinTop; }
    	if(nBottom > nMaxBottom) { nBottom = nMaxBottom; }

    	var self = this;
    	var htPosition = {
    		'nLeft' : nLeft,
    		'nWidth' : nRight - nLeft,
    		'nTop' : nTop,
    		'nHeight' : nBottom - nTop
    	}
    	welSelectBox.animate({
    		'left' : nLeft,
    		'width' : nRight - nLeft,
    		'top' : nTop,
    		'height' : nBottom - nTop
    	}, 200, function(){
    		if(_.isFunction(cb)) cb.call(self, htPosition);
    	});
    	return htPosition;
	},

	_parseCoordinatesToXY : function(htPosition){
		var nPaddingTop = this.option('nPaddingTop'),
			nPaddingLeft = this.option('nPaddingLeft'),
			nPaddingBottom = this.option('nPaddingBottom'),
			nPaddingRight = this.option('nPaddingRight'),
			nWidth = this.option('nWidth'),
			nHeight = this.option('nHeight'),
			nBubbleSize = this.option('nBubbleSize');

		var htXY = {
			'nXFrom' : htPosition.nLeft - nPaddingLeft - nBubbleSize,
			'nXTo' : htPosition.nLeft + htPosition.nWidth - nPaddingLeft - nBubbleSize,
			'nYFrom' : (nHeight - (nPaddingBottom + nBubbleSize)) - (htPosition.nTop + htPosition.nHeight),
			'nYTo' : (nHeight - (nPaddingBottom + nBubbleSize)) - (htPosition.nTop)
		};	

		htXY.nXFrom = this._parseMouseXToXData(htXY.nXFrom);
		htXY.nXTo = this._parseMouseXToXData(htXY.nXTo);
		htXY.nYFrom = this._parseMouseYToYData(htXY.nYFrom);
		htXY.nYTo = this._parseMouseYToYData(htXY.nYTo);
		return htXY;
	},

	_drawXYAxis : function(){
		var nPaddingTop = this.option('nPaddingTop'),
			nPaddingLeft = this.option('nPaddingLeft'),
			nPaddingBottom = this.option('nPaddingBottom'),
			nPaddingRight = this.option('nPaddingRight'),
			nBubbleSize = this.option('nBubbleSize'),
			nWidth = this.option('nWidth'),
			nHeight = this.option('nHeight'),
			sLineColor = this.option('sLineColor'),
			htGuideLine = this.option('htGuideLine');

		this._oAxisCtx.lineWidth = htGuideLine.nLineWidth;
		this._oAxisCtx.globalAlpha = 1;
		this._oAxisCtx.lineCap = 'round';
	  	this._oAxisCtx.strokeStyle = sLineColor;
	  	this._oAxisCtx.beginPath();
	  	this._oAxisCtx.moveTo(nPaddingLeft, nPaddingTop);
		this._oAxisCtx.lineTo(nPaddingLeft, nHeight - nPaddingBottom);
		this._oAxisCtx.lineTo(nWidth - nPaddingRight, nHeight - nPaddingBottom);
	  	this._oAxisCtx.stroke();

	  	this._oGuideCtx.lineWidth = htGuideLine.nLineWidth;
		this._oGuideCtx.globalAlpha = htGuideLine.nGlobalAlpha;	
		if ( this._oGuideCtx.setLineDash !== undefined )   this._oGuideCtx.setLineDash(htGuideLine.aLineDash);
		if ( this._oGuideCtx.mozDash !== undefined )       this._oGuideCtx.mozDash = htGuideLine.aLineDash;
		if ( this._oGuideCtx.webkitLineDash !== undefined) this._oGuideCtx.webkitLineDash = htGuideLine.aLineDash;

		var nXStep = this._nXWork / this._nXSteps;
		var nYStep = this._nYWork / this._nYSteps;

		for(var i=0; i<=this._nXSteps; i++){
			var mov = nPaddingLeft + nBubbleSize + nXStep * i;
	  		this._oAxisCtx.beginPath();
			this._oAxisCtx.moveTo(mov, nHeight - nPaddingBottom);
			this._oAxisCtx.lineTo(mov, nHeight - nPaddingBottom + 10);
			this._oAxisCtx.stroke();

			// x 축 가이드라인
			this._oGuideCtx.beginPath();
			this._oGuideCtx.moveTo(mov, nPaddingTop);
			this._oGuideCtx.lineTo(mov, nHeight - nPaddingBottom);
			this._oGuideCtx.stroke();
		}

		for(var i=0; i<=this._nYSteps; i++){
			var mov = nHeight - (nPaddingBottom + nBubbleSize + nYStep * i);
			this._oAxisCtx.beginPath();
		  	this._oAxisCtx.moveTo(nPaddingLeft, mov);
			this._oAxisCtx.lineTo(nPaddingLeft - 10, mov);
			this._oAxisCtx.stroke();

			// y 축 가이드라인
			this._oGuideCtx.beginPath();
			this._oGuideCtx.moveTo(nPaddingLeft, mov);
			this._oGuideCtx.lineTo(nWidth - nPaddingRight, mov);			
			this._oGuideCtx.stroke();
		}
	},

	updateXYAxis: function(nXMin, nXMax, nYMin, nYMax) {
		if(_.isNumber(nXMin)){ this._nXMin = this.option('nXMin', nXMin); }
		if(_.isNumber(nXMax)){ this._nXMax = this.option('nXMin', nXMax); }
		if(_.isNumber(nYMin)){ this._nYMin = this.option('nYMin', nYMin); }
		if(_.isNumber(nYMin)){ this._nYMax = this.option('nYMax', nYMax); }
		
		var fXAxisFormat = this.option('fXAxisFormat'),
			nXStep = (this._nXMax - this._nXMin) / this._nXSteps;
		_.each(this._awelXNumber, function(el, i){
			if(_.isFunction(fXAxisFormat)){
				el.text(fXAxisFormat.call(this, nXStep, i));
			}else{
				el.text((xstep * i + this._nXMin).round());
			}
		}, this);
		
		var fYAxisFormat = this.option('fYAxisFormat'),
			nYStep = (this._nYMax - this._nYMin) / this._nYSteps;
		_.each(this._awelYNumber, function(el, i){
			if(_.isFunction(fXAxisFormat)){
				el.text(fYAxisFormat.call(this, nYStep, i));
			}else{
				el.text(this._addComma((this._nYMax + this._nYMin) - ((nYStep*i) + this._nYMin)));
			}
		}, this)
	},	

	setBubbles : function(aBubbles){
		this._aBubbles = [];
		this._aBubbleStep = [];

		this.addBubbles(aBubbles);
	},

	addBubbles : function(aBubbles, htTypeCount){
		if(_.isArray(this._aBubbles) === false) return;
		this._aBubbles.push(aBubbles);
		var htTypeCount = htTypeCount || this._countPerType(aBubbles);
		var htBubble = {
			'nXMin' : aBubbles[0].x,
			'nXMax' : aBubbles[aBubbles.length - 1].x,
			'nYMin' : (_.min(aBubbles, function(a){ return a.y; })).y,
			'nYMax' : (_.max(aBubbles, function(a){ return a.y; })).y,
			'nLength' : aBubbles.length,
			'htTypeCount' : {}
		};
		var htType = this.option('htTypeAndColor');
		_.each(htType, function(sVal, sKey){
			htBubble.htTypeCount[sKey] = htTypeCount[sKey];
		}, this);		

		this._aBubbleStep.push(htBubble);
	},

	_countPerType : function(aBubbles){
		var aBubbles = aBubbles,
			htTypeCount = {};		

		if(_.isArray(aBubbles) && aBubbles.length > 0){
			for(var i=0, nLen=aBubbles.length; i<nLen; i++){
				if(_.isNumber(htTypeCount[aBubbles[i].type]) === false){
					htTypeCount[aBubbles[i].type] = 0;
				}
				htTypeCount[aBubbles[i].type] += 1;
			}
		}
		_.each(htTypeCount, function(sVal, sKey){
			this._htTypeCount[sKey] += htTypeCount[sKey];
		}, this);
		return htTypeCount;
	},

	_resetTypeCount : function(){
		this._htTypeCount = {};
		var htType = this.option('htTypeAndColor');
		_.each(htType, function(sVal, sKey){
			this._htTypeCount[sKey] = 0;
		}, this);
	},

	_recountAllPerType : function(){
		var aBubbles = this._aBubbles;

		this._resetTypeCount();

		for(var i=0, nLen=aBubbles.length; i<nLen; i++){
			for(var j=0, nLen2=aBubbles[i].length; j<nLen2; j++){
				this._htTypeCount[aBubbles[i][j].type] += 1;
			}
		}
		return this._htTypeCount;
	},

	_showTypeCount : function(){
		_.each(this._htTypeCount, function(sVal, sKey){
			this._htwelTypeSpan[sKey].text(this._addComma(sVal));
		}, this);	
	},

	_addComma : function(nNumber){
		var sNumber = nNumber + '';
		var sPattern = /(-?[0-9]+)([0-9]{3})/;
		while(sPattern.test(sNumber)) {
			sNumber = sNumber.replace(sPattern,"$1,$2");
		}
		return sNumber;
	},

	_removeComma : function(sNumber){
		return parseInt(sNumber.replace(/\,/g, ''), 10);
	},

	redrawBubbles : function() {	
		this._recountAllPerType();
		this._showTypeCount();		
		this.updateXYAxis();

		if(this._aBubbles.length > 0){
			this._hideNoData();	
		}
		
		for(var i=0, nLen = this._aBubbles.length; i<nLen; i++){
			this._drawBubbules(this._aBubbles[i]);
		}
	},	

	clear : function(){
		var nPaddingLeft = this.option('nPaddingLeft'),
			nPaddingBottom = this.option('nPaddingBottom'),
			nWidth = this.option('nWidth'),
			nHeight = this.option('nHeight'),
			htType = this.option('htTypeAndColor'),
			sDragToSelectClassName = this.option('sDragToSelectClassName');

		_.each(htType, function(sVal, sKey){
			this._htBubbleCtx[sKey].clearRect(0, 0, nWidth, nHeight);
		}, this);		
		this._resetTypeCount();
		this._showTypeCount();
		this._aBubbles = [];
		this._aBubbleStep = [];
		this._showNoData();

		this._welContainer.find('.' + sDragToSelectClassName).hide();
	},

	addBubbleAndDraw : function(aBubbles){
		if(_.isArray(aBubbles) === false || aBubbles.length === 0){
			return;
		}
		if(aBubbles.length > 0){
			this._hideNoData();	
		}		

		this.addBubbles(aBubbles);
		this._showTypeCount();	
		this._drawBubbules(aBubbles);
	},

	_drawBubbules : function(aBubbles){
		var nPaddingTop = this.option('nPaddingTop'),
			nPaddingLeft = this.option('nPaddingLeft'),
			nPaddingBottom = this.option('nPaddingBottom'),
			nPaddingRight = this.option('nPaddingRight'),
			nBubbleSize = this.option('nBubbleSize'),
			htTypeAndColor = this.option('htTypeAndColor'),
			nDefaultRadius = this.option('nDefaultRadius');

		//this._oChartCtx.lineWidth = 1;
		for(var i = 0, nLen = aBubbles.length; i < nLen && !this._bDestroied; i++) {
			var x = this._parseXDataToXChart(this._checkXMinMax(aBubbles[i].x)),
				y = this._parseYDataToYChart(this._checkYMinMax(aBubbles[i].y)),
				r = this._parseZDataToZChart(aBubbles[i].r || nDefaultRadius),
				a = aBubbles[i].y / this._nYMax * 0.7,
				sThisType = aBubbles[i].type;
		
			this._htBubbleCtx[sThisType].beginPath();
			// this._htBubbleCtx[sThisType].globalAlpha = 0.8;
			this._htBubbleCtx[sThisType].fillStyle = htTypeAndColor[sThisType];
			this._htBubbleCtx[sThisType].strokeStyle = htTypeAndColor[sThisType];
			this._htBubbleCtx[sThisType].arc(x, y, r, 0, Math.PI * 2, true);
			this._htBubbleCtx[sThisType].globalAlpha = 0.3 + a;			
			//this._htBubbleCtx[sThisType].stroke();
			this._htBubbleCtx[sThisType].fill();
			
			aBubbles[i].realx = x; aBubbles[i].realy = y; aBubbles[i].realz = r;
		}		
	},

	_checkXMinMax : function(nX){
		if(nX < this._nXMin){
			return this._nXMin;
		}else if(nX > this._nXMax){
			return this._nXMax;
		}else{
			return nX;
		}
	},

	_checkYMinMax : function(nY){
		if(nY < this._nYMin){
			return this._nYMin;
		}else if(nY > this._nYMax){
			return this._nYMax;
		}else{
			return nY;
		}
	},

	_parseXDataToXChart : function(nX){
		var nPaddingLeft = this.option('nPaddingLeft'),
			nBubbleSize = this.option('nBubbleSize');
		return Math.round(((nX - this._nXMin) / (this._nXMax - this._nXMin)) * this._nXWork) + nPaddingLeft + nBubbleSize;
	},
 
	_parseMouseXToXData : function(nX){
		return Math.round((nX / this._nXWork) * (this._nXMax - this._nXMin)) + this._nXMin;
	},

	_parseYDataToYChart : function(nY){
		var nPaddingTop = this.option('nPaddingTop'),
			nBubbleSize = this.option('nBubbleSize');
		return Math.round(this._nYWork - (((nY - this._nYMin) / (this._nYMax - this._nYMin)) * this._nYWork)) + nPaddingTop + nBubbleSize;
	},

	_parseMouseYToYData : function(nY){
		return Math.round((nY / this._nYWork) * (this._nYMax - this._nYMin));
	},

	_parseZDataToZChart : function(nZ){
		var nBubbleSize = this.option('nBubbleSize');		
		return Math.round(((nZ - this._nZMin) / (this._nZMax - this._nZMin)) * (nBubbleSize));
	},

	addBubbleAndMoveAndDraw : function(aBubbles, nXMax){
		var nPaddingTop = this.option('nPaddingTop'),
			nPaddingLeft = this.option('nPaddingLeft'),
			nPaddingBottom = this.option('nPaddingBottom'),
			nPaddingRight = this.option('nPaddingRight'),r
			nBubbleSize = this.option('nBubbleSize'),
			nWidth = this.option('nWidth'),
			nHeight = this.option('nHeight');

		if(_.isArray(aBubbles) === false || aBubbles.length === 0){

			return;
		}else{
			this._hideNoData();
		}
		if(nXMax > this._nXMax){
			var nXGap = nXMax - this._nXMax;
			var nX = nXGap + this._nXMin;
			var nXWidth = Math.round(((nX - this._nXMin) / (this._nXMax - this._nXMin)) * this._nXWork);
			this._moveSelectBox(nXGap);
			this._moveChartLeftwardly(nPaddingLeft + nBubbleSize + nXWidth, 0, nWidth-nXWidth, nHeight);
			this._nXMax = nXMax;
			this._nXMin += nXGap;
			this._removeOldDataLessThan(this._nXMin);
		}		
		this.addBubbles(aBubbles);
		this._showTypeCount();
		this._drawBubbules(aBubbles); // 평균 33 ~ 45 ms 걸림
		//this.redrawBubbles(); // 평균 2629 ~ 3526 ms 걸림, 90~100배 차이
		this.updateXYAxis();

		// _drawBubbules: 35.000ms 
		// _drawBubbules: 44.000ms 
		// _drawBubbules: 43.000ms 
		// _drawBubbules: 43.000ms 
		// _drawBubbules: 45.000ms 
		// _drawBubbules: 36.000ms 
		// _drawBubbules: 37.000ms 
		// _drawBubbules: 36.000ms 
		// _drawBubbules: 33.000ms 
		// 
		// redrawBubbles: 3468.000ms 
		// redrawBubbles: 3526.000ms 
		// redrawBubbles: 3481.000ms 
		// redrawBubbles: 3446.000ms 
		// redrawBubbles: 3478.000ms 
		// redrawBubbles: 3425.000ms 
		// redrawBubbles: 2784.000ms 
		// redrawBubbles: 2685.000ms 
		// redrawBubbles: 2629.000ms 
	},

	_removeOldDataLessThan : function(nX){
		// 여기서 조금 느려질 수 있다.
		// 하지만 그리는데 지장이 없기에 괜찮을 것 같다.
		// 워커를 사용하였지만, 전체 배열을 주고 받는 시간도 오래걸린다 
		var aBubbles = this._aBubbles || [],
			aIndexToBeRemoved = [],
			htType = this.option('htTypeAndColor');

		outerLoop:
		for(var i = 0, nLen = aBubbles.length; i < nLen; i++) {
			var htTypeCountToBeRemoved = {};			
			_.each(htType, function(sVal, sKey){
				htTypeCountToBeRemoved[sKey] = 0;
			}, this);

			if(this._aBubbleStep[i].nXMin <= nX){
				for(var j=0, nLen2 = aBubbles[i].length; j<nLen2; j++){
					htTypeCountToBeRemoved[aBubbles[i][j].type] += 1;
					if(aBubbles[i][j].x > nX || j === nLen2-1){
						aBubbles[i].splice(0, j+1);
						this._aBubbleStep[i].nXMin = nX;
						this._aBubbleStep[i].nLength = aBubbles[i].length;

						_.each(htTypeCountToBeRemoved, function(sVal, sKey){
							this._aBubbleStep[i]['htTypeCount'][sKey] -= sVal;
							this._htTypeCount[sKey] -= sVal;
						}, this);

						if(aBubbles[i].length === 0){
							aIndexToBeRemoved.push(i);							
						}
						break outerLoop;
					}
				}
			}
		}
		for(var i=0, nLen=aIndexToBeRemoved.length; i<nLen; i++){
			aBubbles.splice(aIndexToBeRemoved[i], 1);
			this._aBubbleStep.splice(aIndexToBeRemoved[i], 1);							
		}
		return;
	},

	_moveChartLeftwardly : function(x, y, width, height){
		var nPaddingLeft = this.option('nPaddingLeft'),
			nBubbleSize = this.option('nBubbleSize'),
			htType = this.option('htTypeAndColor');

		_.each(htType, function(sVal, sKey){
			var aImgData = this._htBubbleCtx[sKey].getImageData(x, y, width, height);
			this._htBubbleCtx[sKey].putImageData(aImgData, nPaddingLeft+nBubbleSize, 0);
		}, this);		
	},

	getDataByXY : function(nXFrom, nXTo, nYFrom, nYTo){
		var aBubbleStep = this._aBubbleStep,
			aBubbles = this._aBubbles,
			aData = [],
			bStarted = false;

		var aVisibleType = [];
		_.each(this._htwelTypeLi, function(welTypeLi, sKey){
			if(welTypeLi.hasClass('unchecked') === false){
				aVisibleType.push(sKey);
			}
		}, this);

		// console.time('getDataByXY');
		// 열심히 성능 개선하려 시도하였지만, 그닥 빨라지지 않는다, 오히려 약간 오래 걸림 -_-;;
		for(var i=0, nLen=aBubbleStep.length; i<nLen; i++){
			// if(nXFrom <= aBubbleStep[i].nXMin && nXTo >= aBubbleStep[i].nXMax
			// 	&& nYFrom <= aBubbleStep[i].nYMin && nYTo >= aBubbleStep[i].nYMax){ // xFrom -- min ======= max ---- nTo
			// 	aData = aData.concat(aBubbles[i]);
			// }else if(nXFrom >= aBubbleStep[i].nXMin && nXFrom <= aBubbleStep[i].nXMax){ // min ----- xFrom ====== max
			// 	for(var j=0, nLen2=aBubbleStep[i].nLength; j<nLen2; j++){
			// 		if(aBubbles[i][j].x >= nXFrom && aBubbles[i][j].x <= nXTo){ // 같은 시간대가 여러개 나올 수 있지만 처음꺼 기준.
			// 			//aData = aData.concat(aBubbles[i].slice(j));
			// 			//break;
			// 			if(nYFrom <= aBubbles[i][j].y && nYTo >= aBubbles[i][j].y){
			// 				console.log('a', i, j);
			// 				aData.push(aBubbles[i][j]);
			// 			}
			// 		}
			// 	}
			// }else if(nXTo >= aBubbleStep[i].nXMin && nXTo <= aBubbleStep[i].nXMax){ // min ====== xTo ---- max
			// 	for(var j=0, nLen2=aBubbleStep[i].nLength; j<nLen2; j++){
			// 		if(aBubbles[i][j].x >= nXFrom && aBubbles[i][j].x <= nXTo){
			// 			//aData = aData.concat(aBubbles[i].slice(0, j-1)); // 같은 시간대가 여러개 있을 수 있으므로 마지막 기준.
			// 			//break;
			// 			if(nYFrom <= aBubbles[i][j].y && nYTo >= aBubbles[i][j].y){
			// 				console.log('b', i, j);
			// 				aData.push(aBubbles[i][j]);
			// 			}
			// 		}
			// 	}
			// }else if(nXFrom >= aBubbleStep[i].nXMin || nXTo <= aBubbleStep[i].nXMax){
			// 	console.log('i', i, aBubbleStep[i].nXMin, aBubbleStep[i].nXMax);
			// 	for(var j=0, nLen2=aBubbleStep[i].nLength; j<nLen2; j++){
			// 		if(aBubbles[i][j].x >= nXFrom && aBubbles[i][j].x <= nXTo
			// 			&& aBubbles[i][j].y >= nYFrom && aBubbles[i][j].y <= nYTo){
			// 			console.log('b', i, j);
			// 			aData.push(aBubbles[i][j]);
			// 		}
			// 	}
			// }else if((nXFrom >= aBubbleStep[i].nXMin && nXFrom <= aBubbleStep[i].nXMax) || bStarted){
			// 	bStarted = true;
			// 	if(nXTo >= aBubbleStep[i].nXMin){
			// 		console.log('i', i);
			// 		for(var j=0, nLen2=aBubbleStep[i].nLength; j<nLen2; j++){
			// 			if(aBubbles[i][j].x >= nXFrom && aBubbles[i][j].x <= nXTo
			// 				&& aBubbles[i][j].y >= nYFrom && aBubbles[i][j].y <= nYTo){
			// 				//console.log('c', i, j);
			// 				aData.push(aBubbles[i][j]);
			// 			}
			// 		}	
			// 	}else{
			// 		break;
			// 	}
			// }else{
				for(var j=0, nLen2=aBubbleStep[i].nLength; j<nLen2; j++){
					if(aBubbles[i][j].x >= nXFrom && aBubbles[i][j].x <= nXTo
						&& _.indexOf(aVisibleType, aBubbles[i][j].type) >= 0){

						if(aBubbles[i][j].y >= nYFrom && aBubbles[i][j].y <= nYTo
							||  nYTo === this._nYMax && nYTo < aBubbles[i][j].y){
							aData.push(aBubbles[i][j]);
						}
					}
					// if(aBubbles[i][j].x >= nXFrom && aBubbles[i][j].x <= nXTo
					// 	&& aBubbles[i][j].y >= nYFrom && aBubbles[i][j].y <= nYTo
					// 	&& _.indexOf(aVisibleType, aBubbles[i][j].type) >= 0){
					// 	aData.push(aBubbles[i][j]);
					// }
				}	
			// }
		}
		// console.timeEnd('getDataByXY');
		return aData;
	},

	_hideNoData : function(){
		this._welShowNoData.hide();
	},

	_showNoData : function(){
		this._welShowNoData.show();
	},

	destroy : function(){
		this._unbindAllEvents();
		this._empty();
		_.each(this, function(content, property){
			delete this[property];
		}, this);
		this._bDestroied = true;
	},
	
	_empty : function(){
		this._welContainer.empty();
	},
	
	_unbindAllEvents : function(){
		this._welTypeUl.sortable('destroy');
		this._welOverlay.dragToSelect('destroy');
		// this is for drag-selecting. it should be unbinded.
//		jQuery(document).unbind('mousemove').unbind('mouseup');
	},

	_mergeAllDisplay : function(fCb){
		var nWidth = this.option('nWidth'),
			nHeight = this.option('nHeight');
		var welCanvas = $('<canvas>').attr({
										'width' : nWidth,
										'height' : nHeight
									});
		var oCtx = welCanvas.get(0).getContext('2d');
		oCtx.fillStyle="#FFFFFF";
		oCtx.fillRect(0, 0, nWidth, nHeight);
		// soCtx.globalCompositeOperation = 'destination-out';

		// guide line
		oCtx.drawImage(this._welGuideCanvas.get(0), 0, 0);

		// scatter
		_.each(this._awelChartCanvasInOrder, function(welChartCanvas, sKey){
			if(welChartCanvas.css('display') === 'block'){
				oCtx.drawImage(welChartCanvas.get(0), 0, 0);
			}
		}, this);

		// xy axis
		oCtx.drawImage(this._welAxisCanvas.get(0), 0, 0);

		// common setting
		oCtx.textBaseline = "top";

		// count
		var htContainerOffset = this._welContainer.offset(),
			htCheckBoxImage = this.option('htCheckBoxImage');
		oCtx.textAlign = "left";
		_.each(this._htwelTypeLi, function(welTypeLi){
			var htOffset = welTypeLi.offset();
			var nX = htOffset.left - htContainerOffset.left,
				nY = htOffset.top - htContainerOffset.top;
			oCtx.fillStyle = welTypeLi.css('color');
			oCtx.font = welTypeLi.css('font');
			oCtx.fillText(welTypeLi.text(), nX + parseInt(welTypeLi.css('padding-left'), 10), nY);		

			if(welTypeLi.hasClass('unchecked')){
				oCtx.drawImage(this._oUncheckedBoxImage, nX, nY);
			}else{
				oCtx.drawImage(this._oCheckedBoxImage, nX, nY);
			}
		}, this);		

		// title
		if(this._welTitle){
			var nTitleX = parseInt(this._welTitle.css('left'), 10),
				nTitleY = parseInt(this._welTitle.css('top'), 10);
			oCtx.textAlign = "left"; 
			oCtx.fillStyle = this._welTitle.css('color');		
			oCtx.font = this._welTitle.css('font');
			oCtx.fillText(this._welTitle.text(), nTitleX, nTitleY);
		}

		// x axis
		oCtx.textAlign = "center"; 
		_.each(this._awelXNumber, function(welXNumber){
			var nX = parseInt(welXNumber.css('left'), 10) + welXNumber.width() / 2,
				nY = parseInt(welXNumber.css('top'), 10);
			oCtx.fillStyle = welXNumber.css('color');
			oCtx.font = welXNumber.css('font');
			oCtx.fillText(welXNumber.text(), nX, nY);
		});

		// y axis
		oCtx.textAlign = "right"; 
		_.each(this._awelYNumber, function(welYNumber){
			var nX = parseInt(welYNumber.css('left'), 10) + welYNumber.width(),
				nY = parseInt(welYNumber.css('top'), 10);
			oCtx.fillStyle = welYNumber.css('color');
			oCtx.font = welYNumber.css('font');
			oCtx.fillText(welYNumber.text(), nX, nY);
		});

		// x label
		if(this._welXLabel){
			oCtx.textAlign = "right"; 
			var nX = nWidth,
				nY = parseInt(this._welXLabel.css('top'), 10);
			oCtx.fillStyle = this._welXLabel.css('color');
			oCtx.font = this._welXLabel.css('font');
			oCtx.fillText(this._welXLabel.text(), nX, nY);
		}

		// y label
		if(this._welYLabel){
			oCtx.textAlign = "right"; 
			var nX = parseInt(this._welYLabel.css('left'), 10) + this._welYLabel.width(),
				nY = parseInt(this._welYLabel.css('top'), 10);
			oCtx.fillStyle = this._welYLabel.css('color');
			oCtx.font = this._welYLabel.css('font');
			oCtx.fillText(this._welYLabel.text(), nX, nY);
		}

		// nodata
		if(this._welShowNoData.css('display') === 'block'){
			oCtx.textAlign = "center";
			oCtx.fillStyle = this._welShowNoData.css('color');
			oCtx.font = this._welShowNoData.css('font');
			oCtx.fillText(this._welShowNoData.text(), parseInt(this._welShowNoData.css('top')), nWidth/2);
		}

		// drag-selecting
		var sDragToSelectClassName = this.option('sDragToSelectClassName'),
			welDragToSelect = $('.' + sDragToSelectClassName);
		oCtx.rect(parseInt(welDragToSelect.css('left')), parseInt(welDragToSelect.css('top')), welDragToSelect.width(), welDragToSelect.height());
		oCtx.globalAlpha = welDragToSelect.css('opacity');
		oCtx.fillStyle = welDragToSelect.css('background-color');
		oCtx.fill();
		oCtx.strokeStyle = welDragToSelect.css('border-color');
		oCtx.stroke();

		return welCanvas;
	},

	getChartAsPNG : function(){
		var welCanvas = this._mergeAllDisplay();
		return welCanvas.get(0).toDataURL('image/png')
	},

	getChartAsJPEG : function(){
		var welCanvas = this._mergeAllDisplay();
		return welCanvas.get(0).toDataURL('image/jpeg');
	},

	drawWithDataSource : function(htDataSource){
		if(_.isObject(htDataSource)){
			this.option('htDataSource', htDataSource);
		}
		this.clear();
		this._abortAjax();
		this._nCallCount = 0;
		this._drawWithDataSource();
	},

	_drawWithDataSource : function(){
		var self = this;
		var htDataSource = this.option('htDataSource');

		var htOption = htDataSource.htOption;
		htOption.url = htDataSource.sUrl.call(this, this._nCallCount);
		htOption.data = htDataSource.htParam.call(this, this._nCallCount, this._htLastFechedParam, this._htLastFetchedData);
		htOption.success = function(htData){
			if(htData.scatter.length > 0){
				self._hideNoData();
				self.addBubbleAndMoveAndDraw(htData.scatter, htData.scatter[htData.scatter.length - 1].x);
				self._htLastFetchedData = htData;
			}else{
				self._htLastFetchedData = {};
			}
			/* for testing
			else{
				console.log('--------------');
				self.addBubbleAndMoveAndDraw([
						{
							"x" : self._nXMax + 1000,
							"y" : 5000,
							"z" : 10,
							"traceId" : "e553df1f-6e31-4142-8aea-bdbf50d08f5c",
							"type" : "Success" 
						}
					], self._nXMax + 1000)
			}*/
			htDataSource = self.option('htDataSource'); // refresh
			var nInterval = htDataSource.nFetch.call(self, self._htLastFechedParam, htData);
			if(nInterval > -1){
				setTimeout(function(){
					self._drawWithDataSource();
				}, nInterval);
			}else if(self._aBubbles.length === 0){
				self._showNoData();
				self._welShowNoData.text(self.option('sShowNoData'));
			}
		}
		this._oAjax = $.ajax(htOption);	
		if(this._nCallCount === 0){
			this._welShowNoData.text(this.option('sShowLoading'));
		}
		this._nCallCount += 1;
		this._htLastFechedParam = htOption.data;
	},

	_abortAjax : function(){
		if(this._oAjax){
			this._oAjax.abort();
		}
	},
	
	_redraw : function(){
//		this._unbindAllEvents(); // if unbind all, the sortable type will be not working.
		this._empty();
		
		this._initVariables(true);
		this._initElements();
		this._initEvents();
		this._drawXYAxis();
		this.updateXYAxis();
		this.redrawBubbles();
		
	}
});