<!DOCTYPE html>
<html ng-app='myApp'>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>practice</title>
    <link href="../../../sourceFile/css/bootstrap.css" rel="stylesheet">
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  </head>
  <body>
	<div class="container">
					
					<div ng-controller="mainController">
					{{name+" How are you "}}
					hello world;
					<div>
					<h1>What is your twitter handle</h1>
					<input type="text" ng-model="handle">
					<input type="button" ng-click="alertHandle()" value='Click me!'>
					<hr />
					</div>
					<div class="alert" ng-show="handle.length !== 5">
					Must be 5 characters.
					</div>
					<h1 ng-cloak>Twitter handle/{{filteredText()}}</h1>
					<h2>Rules</h2>
					<div ng-repeat="rule in rules" ng-cloak >
					<ul>
						<li>
						{{rule.RuleName}}
						</li>
					</ul>
					</div>
					</div>
					
	
			</div> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="../../../sourceFile/js/bootstrap.min.js"></script>
	<script type="text/javascript" src = "../../../sourceFile/js/jQuery.js"></script>
	<script type="text/javascript" src = "../../../sourceFile/js/angular.js"></script>
	<script src="XMLHttpRequest.js"></script>
	<script src="https://code.angularjs.org/1.3.0-rc.1/angular-messages.min.js"></script>
	<script src="https://code.angularjs.org/1.3.0-rc.1/angular-resource.min.js"></script>
  </body>
</html>