var myApp = angular.module("myApp", []);

const country = ["india", "usa"];

const states = [{

        india: ["punjab", "haryana"]

},

    {
        usa: ["california", "nevada"]

                }];





myApp.controller("controller", ["$scope", "$http","$log", function ($scope, $http, $log) {
    $scope.countries = ["india", "usa"];
    $scope.showHide = {};
    $scope.states = [
        {
        states:["punjab","Haryana"],
        country: "india"
    },
        {
        states:["cali","nevada"],
        country: "usa"
    },
         {
        states:["bc","ontario"],
        country: "canada"
    }
        
    ];
    $scope.india =false;
    $scope.usa = false;
    
    $log.log($scope);
    
    $scope.obj3 = {a:20};
    $scope.assignModel= function(a){
        $log.log($scope.showHide);
    }
    $scope.test = "";

}])
