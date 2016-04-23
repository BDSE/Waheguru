var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', '$timeout', '$filter', '$http', function ($scope, $timeout, $filter, $http) {

	$scope.testFn = function () {
		alert("amar");
		return 'Amarsandhu test fn';
	}
	$scope.name = 'AmarSandhu';
	$scope.handleInput1 = '';
	$scope.characters = function () {
		return $scope.handleInput1.length;
	}
	$scope.changeToUpperCase = function () {
		//alert("amar");
		return $filter('uppercase')($scope.handleInput1);
	}

	//	$scope.$watch('handleInput1', function () {
	//		$scope.changeToUpperCase = $filter('uppercase')($scope.handleInput1);
	//	})

	$scope.testvar = 'test';
	$scope.rules = [
		{
			ruleName: 'rule number 1'
		}, {
			ruleName: 'rule number 2'
		}, {
			ruleName: 'rule number 3'
		}
	];
	$scope.clickHandler = function () {
		console.log('clicked');
	}
	$scope.btnClass = 'btn-success';
	$scope.changeColor = function () {
		console.log("ng-focus works");
		$scope.btnClass = 'btn-danger';
	}
	$scope.dummyJson = [
		{
			ruleName: 'rule number 1'
		}, {
			ruleName: 'rule number 2'
		}, {
			ruleName: 'rule number 3'
		}
	];
	$scope.handleInput2 = '';

	//Angular ajax call - different ways
	$scope.getDummyJson = function () {
		$http({
			method: 'GET',
			url: 'http://localhost:8080/JsonGetter/index.jsp',
			params: {
				ruleName: $scope.handleInput2
			},
			cache: true,
			timeout: 5

		}).then(function (response) {
			console.log(response);
			$scope.dummyJson = response.data;
			$scope.handleInput2 = '';
		}, function () {
			//error function
		});
		//========================================================================================================
		//		$http.get('http://localhost:8080/JsonGetter/index.jsp?ruleName=' + $scope.handleInput2)
		//			.then(function (response) {
		//				console.log(response);
		//				$scope.dummyJson = response.data;
		//				$scope.handleInput2 = '';
		//			}, function () {
		//				console.log('error occurred in connection');
		//			});
		//------------------------------------------------------------------------------
		//        ABOVE- USES THE THEN METHOD-OR- BELOW- USES THE SUCCESS, ERROR METHODS
		//------------------------------------------------------------------------------
		//					.success(function (data) {
		//					console.log(data);
		//					$scope.dummyJson = data;
		//					$scope.handleInput2 = '';
		//				})
		//				.error(function () {
		//					console.log('error occurred in connection')
		//				})
		//========================================================================================================
	}
	console.dir($scope);
	//	$scope.$watch('handleInput1', function (newValue, oldValue) {
	//		console.info('Watch...');
	//		console.log('Old Value: ' + oldValue);
	//		console.log('New Value: ' + newValue);
	//	})

	//		setTimeout(function () {
	//	
	//			$scope.name = 'not from angular architechture';
	//			console.log($scope);
	//		}, 3000)

	//console.log($scope);

	//		$timeout(function () {
	//		$scope.name = "Amar...";
	//	}, 3000);

	//Asynchronous delay- but with power to be discovered by digest loop of angular
	//Behind the scenes $Timeout service wraps up the set time out method this way----using apply method
	setTimeout(function () {

		$scope.$apply(function () {
			$scope.name = 'NameFromAsynTimeout....';
			$scope.handleInput1 = 'setTimeoutDone';
		})

	}, 3000)

	//Synchronous delay
	//	$scope.causeDelay = function (ms) {
	//
	//		var time = new Date().getTime();
	//		var cntr = 0;
	//		ms += time;
	//		while (time < ms) {
	//			time = new Date().getTime();
	//			cntr++;
	//		}
	//		//to see how many times loop ran..just for fun :)
	//		console.log(cntr);
	//		//tryToChangeScopeOutSideAngularContext('AmarSandhuFromSynDelayFunction');
	//	}

	//	function tryToChangeScopeOutSideAngularContext(name) {
	//		$scope.name = name;
	//	}

	//$scope.causeDelay(4000);
}]);