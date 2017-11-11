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
		.when('/secondPage/:param1/:param2', {
			 templateUrl: 'templates/spaTemplate2.html',
			controller: 'secondController'
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
	$scope.param1 = $routeParams.param1;
	$scope.param2 = $routeParams.param2;
	$scope.name = "Amar-secondePage";

}]);

/*
* this event will not fire, when you click on home or second tab on the page, but in console if you try window.location.hash =
* "newvalue" then this event triggers, thus angular dont let the event fire.
* using the newer version of angular this event will fire.
*/
window.addEventListener("hashchange", function(e){
    console.log("hash change occurred ", window.location.hash);
})