//-------------------------------------------------
//	 **  SIMPLE SINGLE PAGE APPLICATION WITH CUSTOM DIRECTIVE **
//-------------------------------------------------

var myApp = angular.module('mySPA', ['ngRoute']);
myApp.config(function ($routeProvider) {

	//Look for hash changes and run following
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'firstController'
		})
		.when('/secondPage/:num1/:num2', {
			templateUrl: 'templates/second.html',
			controller: 'secondController'
		})

});


/**
 * Controller for template one
 */
myApp.controller('firstController', ['$scope', function ($scope) {
	$scope.person = {
		name: 'Amar Sandhu',
		address: '733 piercy road, san jose, ca'
	}
	$scope.classes1 = ['class1', 'class2', 'class3', {
		orange: 'truthyValue',
		thisClassWontBeAddedDueToFalseyValue: ''
	}]
	$scope.testVariable = "hey there";
	console.log($scope);

}]);

/**
 * Controller for template two
 */
myApp.controller('secondController', ['$scope', function ($scope) {


}]);

/*
 * Custom Directive
 */
myApp.directive('searchResult', ['$log', function ($log) {
	return {
		restrict: 'AECM',
		templateUrl: 'directives/searchResult.html',
		replace: false,

		//poking a hole
		scope: {
			personObject: "="
		},
		transclude: true,
		compile: function (elements, attributes) {
			$log.info('****-----------COMPILE---------------****');
			$log.log(elements);
			$log.log(attributes);
			return {
				//				pre: function (scope, elements, attributes) {
				//					$log.info(scope);
				//					$log.log(elements);
				//					$log.log(attributes);
				//				},
				post: function (scope, elements, attributes) {
					$log.info('****-----------POST---------------****');
					$log.info(scope);
					$log.log(elements);
					$log.log(attributes);
					$log.info('******************************************');
				}
			}
		}
	}
}])