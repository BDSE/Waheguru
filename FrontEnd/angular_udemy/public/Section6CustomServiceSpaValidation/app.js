//-------------------------------------------------
//	 **  SIMPLE SINGLE PAGE APPLICATION USING 2 FORMS  **
//-------------------------------------------------

var spa = angular.module('mySPA', ['ngRoute']);
console.log(spa);
spa.config(function ($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'templates/form1.html',
			controller: 'form1Controller'
		})
		.when('/form2', {
			templateUrl: 'templates/form2.html',
			controller: 'form2Controller'
		})

});

//My service created here is singleton, when you inject that in cotroller it get the same copy of myService object
spa.service('myService', function () {

	var self = this;
	this.jsonObj = {};

});

spa.controller('form1Controller', ['$scope', 'myService', '$http', function ($scope, myService, $http) {
	$scope.sendData = function () {
		$http({
			method: 'GET',
			url: 'http://localhost:8080/JsonGetter/jsonSpa.jsp',
			cache: true,
			params: {
				toCity: $scope.toCity,
				fromCity: $scope.fromCity,
				toDate: $scope.toDate,
				fromDate: $scope.fromDate,
				email: $scope.email
			}
		}).then(function (response) {

			myService.jsonObj = response.data;

		}, function () {
			//error
		})
	};
}]);

spa.controller('form2Controller', ['$scope', 'myService', function ($scope, myService) {

	$scope.jsonObj = myService.jsonObj;

	console.log($scope.jsonObj.data);

}]);