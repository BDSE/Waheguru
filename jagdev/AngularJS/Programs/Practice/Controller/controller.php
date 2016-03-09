<!DOCTYPE html>
<html ng-app='myApp'>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>practice</title>
    <link href="../../../sourceFile/css/bootstrap.css" rel="stylesheet">
  </head>
  <body>
	 <header>
			<nav class="navbar navbar-default">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" href="/">AngularJS</a>
				</div>
				<ul class="nav navbar-nav navbar-right">
					<li><a href="#"><i class="fa fa-home"></i> Home</a></li>
                    <li><a href="#/second"><i></i> Second</a></li>
				</ul>
			</div>
			</nav>
		</header>

	<div class="container">
                <div ng-view>
                </div>
   </div> 
	<script type="text/javascript" src = "../../../sourceFile/js/angular.js"></script>
	<script src="https://code.angularjs.org/1.3.0-rc.1/angular-route.min.js"></script>
	<script type="text/javascript" src = "../../../sourceFile/js/jQuery.js"></script>
	<script src="controller.js"></script>
  </body>
</html>