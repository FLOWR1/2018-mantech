		<div class="row">
			<div class="col-md-4">
				<div class="project-context">
					<span class="label">DATE:</span>
					<input type="text" id="daterange" size=30 />
				</div>
			</div>

			<div class="col-md-1 mg-top-3">
				<div class="project-context">
					<span class="label"><i class="fa fa-repeat"></i></span>
					<span class="repeat-selector dropdown-toggle" data-toggle="dropdown" aria-expanded="false">off<i class="fa fa-angle-down"></i></span>
					<ul class="dropdown-menu js-status-update">
						<li class="active"><a href="javascript:void(0);" dropdown-type="repeat" dropdown-data="-1">off</a></li>
						<li><a href="javascript:void(0);" dropdown-type="repeat" dropdown-data="5">5sec</a></li>
						<li><a href="javascript:void(0);" dropdown-type="repeat" dropdown-data="10">10sec</a></li>
						<li><a href="javascript:void(0);" dropdown-type="repeat" dropdown-data="30">30sec</a></li>
						<li><a href="javascript:void(0);" dropdown-type="repeat" dropdown-data="60">1min</a></li>
						<li><a href="javascript:void(0);" dropdown-type="repeat" dropdown-data="300">5min</a></li>
					</ul>
				</div>
			</div>
		<c:if test="${gridOff ne 'true'}">
			<div class="col-md-2 mg-top-8">
				<button class="btn btn-default" id="btnApply">Apply</button>
				<button class="btn btn-default" id="btnRefresh">Refresh</button>
			</div>
		</c:if>
			
		</div>
