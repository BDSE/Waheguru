//-------------------------------------------------
//	 **  SIMPLE SINGLE PAGE APPLICATION  **
//-------------------------------------------------

var myApp = angular.module('mySPA', ['ngRoute']);

myApp.config(function ($routeProvider) {

	//Look for hash changes and run following
	$routeProvider
		.when('/', {
			templateUrl: 'templates/spaTemplate1.html',
			controller: 'firstController'
		})
		.when('/secondPage/:num1/:num2', {
			 
		})

});

/*
 * My custom srvice 
 */
myApp.service('myCustomService', function () {

	var self = this;

	this.name = 'Amar';

	this.nameLength = function () {
		return self.name.length;
	}

})


/**
 * Controller for template one
 * also injects myCustomService, like inbuilt services angular does dependency injection for custom services too
 */
myApp.controller('firstController', ['$scope', '$log', '$location', '$routeParams', 'myCustomService', function ($scope, $log, $location, $routeParams, myCustomService) {

	$log.log(myCustomService.name + " : " + myCustomService.nameLength());
	//$log.log($location.path());
	$scope.name = "Amar-firstPage";

}]);

/**
 * Controller for template two
 */
myApp.controller('secondController', ['$scope', '$log', '$location', '$routeParams', 'myCustomService', function ($scope, $log, $location, $routeParams, myCustomService) {

	$log.log(myCustomService.name + " : " + myCustomService.nameLength());
	//$log.log($location.path());
	$scope.num1 = $routeParams.num1;
	$scope.num2 = $routeParams.num2;
	$scope.name = "Amar-secondePage";

}]);