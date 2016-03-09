var myApp = angular.module('myApp',['ngRoute']);
	
	myApp.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl:'pages/main.html',
			controller:'mainController'
		})
		.when('/second',{
			templateUrl:'pages/second.html',
			controller:'secondController'
		})
	});
	myApp.service('nameService',function(){
		var self = this;
		this.name = "john doe";
		this.namelength = function(){
			return self.name.length ;
		}
	});
	myApp.directive('searchResult',function(){
			return{
				restrict:"AECM",
				templateUrl:'directives/searchResult.html',
				replace:true,
				scope:{
					personObject:"=",
				}
			}
	});
	
	myApp.controller("mainController",['$scope','$location','$log','nameService','$routeParams',function($scope,$location,$log,nameService,$routeParams){
		$scope.person = {
			name:"john doe",
			address:'1111 new york st'
			}
		
			$scope.name=nameService.name;
			$scope.$watch('name',function(){
				nameService.name = $scope.name;
			});
			$log.info(nameService.name);
			$log.info(nameService.namelength());
			 }]);
	 myApp.controller("secondController",["$scope",'$location','$log','nameService','$routeParams',function($scope,$location,$log,nameService,$routeParams){
	$scope.name=nameService.name;
	$scope.$watch('name',function(){
		nameService.name = $scope.name;
	});
	$log.info($location.path());
	 }]);
	
	