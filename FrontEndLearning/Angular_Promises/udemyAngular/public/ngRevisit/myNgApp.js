var ngRevisitApp = angular.module("ngRevist", ['ngRoute']);

//var emailRegEx = /([a-zA-Z0-9_]+.*)@[a-zA-Z]+[\.][a-zA-Z]+/g;
/*ngRevisitApp.controller("ngRevistController", function ($scope, $log) {
    $log.log("amar sandhu", 2);
    $scope.name = "Amar";
    $scope.obj = {
        a:20,
        b: (a,b)=>{
            $log.log(a+b);
        }
    }
    $log.log("scope object", $scope);
});*/

ngRevisitApp.controller("ngRevistController", ["$scope", "$log", "$timeout", "$filter", "$window", function ($scope, $log, $timeout, $filter, $window) {
    console.count("main controller function");
    $scope.myDate = new Date();

    //$log.log("amar sandhu", 2);

    $scope.name = "Amar";

    $scope.testVariableForWatchers = "amar";

    $scope.verifyEmail = function (email) {
        var reg = new RegExp(/([a-zA-Z0-9_]+.*)@[a-zA-Z]+[\.][a-zA-Z]+/, "g");
        return reg.test(email);
        //test
    }

    //no need to do this, inputhandle will automatically be added to the scope.
    $scope.inputHandle = "";

    $scope.obj = {
        a: 20,
        b: (a, b) => {
            $log.log(a + b);
        }
    }

    $scope.lowercase = function (arg) {
        console.count("lower case function  count");
        return $filter('lowercase')($scope.inputHandle);
    }

    $scope.changeHash = function () {
        var paramStr = $scope.pokemon; //get the type of pokemon string from the input eg: pokemon/1
        $window.location.hash = `/changedHash/${paramStr}`;
        console.log("change hash function called..", $window.location.hash);
    }

    $scope.nextDate = function () {
        var newDate = new Date();
        newDate.setDate($scope.myDate.getDate() + 1);
        $scope.myDate = newDate;
        //$scope.myDate = new Date().setDate($scope.myDate.getDate() + 1);

    }

    $log.log("scope object", $scope);


    //value of name variable will not be changed after 3 seconds as what we are doing is outside angular context. after the scope.name is updated angular doesnt know that its time to run digest loop..so value in html doesnt change...when something else happens that triggers the digest loop this value will also be changes as now angular will find changes value while running digest loop.
    //    setTimeout(()=>{
    //        //use $apply to make it work....
    //        //$scope.$apply(function(){})
    //        $scope.name = "Name changed";         
    //    }, 3000);

    //    
    //    $timeout(function(){
    //        $log.log("$timeout called...",$scope);
    //    },10000);
    //    
    //    
    //    $scope.$watch("name", function(newVal, oldVal){
    //        console.log("old value :"+oldVal);
    //        console.log("new value :"+newVal);
    //    });

}]);

var myObj = {
    a: 20,
    b: 30,
    testFunction: function (fn) {
        fn(this.a);
    }
}
var b = 10;

window.addEventListener("hashchange", function (e) {

    console.log(e);

    console.log("hash change occured :", window.location.hash);

});



myObj.testFunction(function (a) {
    console.log(a, this.b);
});


ngRevisitApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'spaTemplates/template1.html',
            controller: 'spa1Controller'
        })
        .when('/second', {
            templateUrl: 'spaTemplates/template2.html',
            controller: 'spa2Controller'
        })
        .when('/changedHash', {
            templateUrl: 'spaTemplates/changedHash.html',
            controller: 'changedHashController'
        })
        .when('/changedHash/:param1/:param2', {
            templateUrl: 'spaTemplates/changedHash.html',
            controller: 'changedHashController'
        })
});

ngRevisitApp.controller("spa1Controller", ["$scope", "$log", function ($scope, $log) {

}]);

ngRevisitApp.controller("spa2Controller", ["$scope", "$log", function ($scope, $log) {

}]);

ngRevisitApp.controller("changedHashController", ["$scope", "$log", "$routeParams", "$http", function ($scope, $log, $routeParams, $http) {

    $http.get(`http://pokeapi.co/api/v2/${$routeParams.param1}/${$routeParams.param2}`)
        .then(function (response) {
            $log.log("pokemondata..", response);
            $scope.pokemonData = response.data;

        })
        .catch(function (err) {
            $log.log("error from pokemon : ", err);
        })

    $scope.param1 = $routeParams.param1;
    $scope.param2 = $routeParams.param2;
}]);

ngRevisitApp.controller("testController", function ($scope, $log) {

    $scope.name = "Amar";

    $log.log("test controller ran");
});



/////////////////////////////////
var testXMLHttp = function () {

    var xmlhttpreq = new XMLHttpRequest();
    xmlhttpreq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response);
        }
    }

    xmlhttpreq.open("get", "http://pokeapi.co/api/v2/pokemon/3/?s=121&id=324342", true);

    xmlhttpreq.send();


}


////for debug, stepover, stepinto stepout
function main() {
    var s = foo();
    var r = bar(s);
    var date = new DateTest();
    console.log(r);
}

function foo() {
    return "hi";
}

function bar(s) {
    var t = s + foo(); // Debugger is currently here
    return t;
}
var DateTest = function () {
    this.time = 2;
    this.age = 3;
}
main();

var obj = {
    a:20,
    fn: function(fn){
        console.log(this.a);
        fn(this.a);
    }  
}


obj.fn(function(a){
    
    var c = 300;
    console.log(this);
    console.log("closure",a+c);


})