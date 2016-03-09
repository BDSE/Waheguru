var myApp = angular.module('myApp',[]);
myApp.controller("mainController",["$scope",'$filter',"$timeout",function($scope,$filter,$timeout){
	$scope.handle="";
	$scope.filteredText = function(){
		return $filter('lowercase')($scope.handle);
	}
	
			var rulesrequest = new XMLHttpRequest();
			rulesrequest.onreadystatechange = function(){
				$scope.$apply(function(){
				if(rulesrequest.readyState == 4 && rulesrequest.status == 200){
					$scope.rules = (JSON.parse(rulesrequest.responseText));
				}
				});
			}
			rulesrequest.open("GET","http://demo8699389.mockable.io/api", true);
			rulesrequest.send();
			}
	 ]);

 