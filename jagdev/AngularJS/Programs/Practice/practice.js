var myApp = angular.module('myApp',['ngRoute']);
	
	myApp.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl:'pages/main.html',
			controller:'mainController
		})
		.when('/second',{
			templateUrl:'pages/second.html',
			controller:'secondController'
		})
	});
	
	myApp.controller("mainController",["$scope",'$location','$log',function($scope,$location,$log){
	$scope.name="Main";
	$log.info($location.path());
	 }]);
	 myApp.controller("secondController",["$scope",'$location','$log',function($scope,$location,$log){
	$scope.name="Second";
	$log.info($location.path());
	 }]);
	
	