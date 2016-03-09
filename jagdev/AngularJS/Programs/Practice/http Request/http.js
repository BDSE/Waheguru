var myApp = angular.module('myApp',[]);
myApp.controller("mainController",["$scope",'$filter',"$timeout",'$http',function($scope,$filter,$timeout,$http){
	$scope.handle="";
	$scope.filteredText = function(){
		return $filter('lowercase')($scope.handle);
	 }
	$http.get("http://demo8699389.mockable.io/api")
		.success(function(result){
			$scope.rules = result;
		})
		.error(function(data,status){
			console.log(data);
		})
	 }]);
