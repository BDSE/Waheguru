//////attaching click event to a button using jqlite that angular uses////

//angular.element(document).find('#jqLiteButton').on("click", function(){
//   
//   alert("dfdf");
//    
//    
//});



/**
 * USE OF JQLITE IN ANGULAR JS
 */
angular.element(document.querySelectorAll('#jqLiteButton')).on('click', function () {
    angular.element(this).html("INNER HTML CHANGED BY JQLITE");
})


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

ngRevisitApp.controller("ngRevistController", ["$rootScope", "$scope", "$log", "$timeout", "$filter", "$window", function ($rootScope, $scope, $log, $timeout, $filter, $window) {
    console.count("main controller function");
    $log.log("root scope, it is singleton", $rootScope);
    $scope.myDate = new Date();
    $scope.copyInputValue = "copy the contents in this box";
    $scope.hrefTest = "index.html/test/2/3/4";
    $timeout(function () {
        $log.log("changing href value");
        $scope.hrefTest = "changedvalue"; // since in the view we have used {{::hreftest}} this new value will not take effect.
    }, 5000)
    //$log.log("amar sandhu", 2);

    $scope.name = "Amar";

    $scope.testVariableForWatchers = "amar";


    $scope.verifyEmail = function (email) {
        var reg = new RegExp(/([a-zA-Z0-9_]+.*)@[a-zA-Z]+[\.][a-zA-Z]+/, "g");
        return reg.test(email);
        //test
    }

    //no need to do this, inputhandle will automatically be added to the scope.
    $scope.inputHandle = "zzzzz";

    $scope.obj = {
        a: 20,
        b: (a, b) => {
            $log.log(a + b);
        }
    }
    $scope.objectForDirective = {
        name: "John Doe",
        address: "555 Main St., New York, NY 11111",
        introduce: function () {
            console.log(`Hello my name is ${this.name} i live at ${this.address}`);
        }
    }

    $scope.lowercase = function (arg) {
        console.count("lower case function  count");
        return $filter('lowercase')(arg);
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
    $scope.$watch("name", function (newVal, oldVal) {
        console.log("...........other watch, watching name variable" + oldVal);
        console.log("new value :" + newVal);
    });

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

//////////////////////////////Form Controller/////////////////

ngRevisitApp.controller("formController", ["$scope", "myService", "$log", function ($scope, myService, $log) {

    $scope.number = myService.a;
    myService.fn();
}])



/////////////////////////////////


///////////////////////Service/////////////////

ngRevisitApp.service("myService", function ($log) {

    var self = this;
    this.a = 20;
    this.fn = function () {
        $log.log("from my service", self.a);
    }

})




////////////////////////////////////////////
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
    a: 20,
    fn: function (fn) {
        console.log(this.a);
        fn(this.a);
    }
}


obj.fn(function (a) {

    var c = 300;
    //    console.log(this);
    //    console.log("closure",a+c);


})
///////////////////////////////////////////////////

/**
 * CONTROLLER FOR THE TABLE GENERATED BY NG-REPEAT, FILTERS ARE APPLIED ON THIS TABLE
 * THIS TABLE CAN BE SORTED AND SEARCHED FOR A STRING TOO.
 */

ngRevisitApp.controller("tableController", ["$scope", "$rootScope", "$log", function ($scope, $rootScope, $log) {
    $scope.data = [{
            name: 'Amar',
            city: 'san jose',
            order: 9.99995,
            joined: '2000-12-02',
            url: '/amar'
        }, {
            name: 'Shableen',
            city: 'san jose',
            order: 12.0002020,
            joined: '2015-17-17',
            url: '/Shab'
        },
        {
            name: 'Ammi',
            city: 'Amritsar',
            order: 12.4,
            joined: '2014-12-12',
            url: '/ammi'
        }, {
            name: 'Avitesh',
            city: 'surrey',
            order: 15.3456,
            joined: '2004-12-22',
            url: '/avi'
        },
        {
            name: 'Nihal',
            city: 'surrey',
            order: 19.299995,
            joined: '2013-12-02',
            url: '/nihu'
        }, {
            name: 'sargun',
            city: 'batala',
            order: 29.99995,
            joined: '2010-12-02',
            url: '/sargun'
        },
        {
            name: 'sukhmani',
            city: 'gurdaspur',
            order: 39.99995,
            joined: '2010-22-02',
            url: '/sukhmani'
        }];
    $scope.tasks = ["Task1", "Task2"];

}]);

//ngRevisitApp.controller("filterAndPagination", ["$scope", "$filter", function ($scope, $filter) {
//
//    $scope.filterText = "";
//    $scope.pageSize = 10;
//    $scope.pagesizes = [5, 10, 15, 20];
//    $scope.currentPage = 0;
//    $scope.data = [];
//    $scope.numberOfPages = function () {
//        return Math.ceil($scope.getData().length / $scope.pageSize);
//    };
//    $scope.getData = function () {
//
//        return $filter('filter')($scope.data, $scope.q)
//        /* 
//          // manual filter
//          // if u used this, remove the filter from html, remove above line and replace data with getData()
//          
//           var arr = [];
//           if($scope.q == '') {
//               arr = $scope.data;
//           } else {
//               for(var ea in $scope.data) {
//                   if($scope.data[ea].indexOf($scope.q) > -1) {
//                       arr.push( $scope.data[ea] );
//                   }
//               }
//           }
//           return arr;
//          */
//    };
//
//
//    for (var i = 0; i < 50; i++) {
//        $scope.data.push(`Item ${i}`);
//    };
//
//}]);

ngRevisitApp.controller("filterAndPagination",["$scope","$filter", function($scope,$filter){
    $scope.filterText = "";
    $scope.pageSize = 10;
    $scope.pagesizes = [5, 10, 15, 20];
    $scope.currentPage = 0;
    $scope.data = [];
    
    $scope.numberOfPages = function(){
        return Math.ceil($scope.getData().length / $scope.pageSize);
    };
    
    $scope.getData = function(){
        return $filter('filter')($scope.data, $scope.filterText);
    };
     for (var i=0; i<50; i++) {
        $scope.data.push("Item "+i);
    }
    
}]);

/**
 * Directives
 */

ngRevisitApp.directive("searchResults", function () {

    return {
        restrict: 'AEM',
        //template : '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St., New York, NY 11111</p></a>',
        templateUrl: 'directiveTemplates/searchResults.html',
        replace: false,
        scope: {
            myObject: "=",
            johnAddress: "@",
            inputHandle: "@"
        }

    }

});

ngRevisitApp.directive("ngMydirective", function ($log) {

    return {

        restrict: 'A',
        templateUrl: 'directiveTemplates/ngMydirective.html',
        replace: true,
        scope: {
            myObj: "="
        },
        transclude: true,
        link: function (scope, elements, attrs) {
            $log.log("element", elements);
            $log.log("scope", scope);
            $log.log("attrs", attrs);
        }

    }

});

ngRevisitApp.directive("ngTable", function ($log) {

    var link = function (scope, element, attrs) {
        scope.selectFilter = "name";
        scope.$watch("selectFilter", render);
        console.log("attr.......value.....", scope.ngTable);
        var ngmodelVal = "filterObj." + scope.selectFilter,
            fullHtml = `<label for="filter">Filter: </label>
                        <input id="filter" name="filter" type="text" ng-model=${ngmodelVal}>
                        <div>${scope.selectFilter}</div>
                        <select ng-model="selectFilter">
                                    <option value="name">name</option>
                                    <option value="city">city</option>
                                    <option value="order">order</option>
                        </select>`,
            tableHdr = "<table style='width:70%'>",
            tableEnd = "</table>";

        function render(newValue, oldValue) {
            if (scope.datasource && scope.datasource.length) {
                fullHtml += tableHdr;
                fullHtml += renderTableHdr();
                fullHtml += renderTableRows() + tableEnd;
                renderTableDirective();
            }
        }

        function renderTableDirective() {
            element.html(fullHtml);
            fullHtml = '';
        }

        function renderTableHdr() {
            return `<tr>
                        <th ng-click="sortBy='name';reverse=!reverse">Name</th>
                        <th ng-click="sortBy='city';reverse=!reverse">City</th>
                        <th ng-click="sortBy='order';reverse=!reverse">Order</th>
                        <th ng-click="sortBy='joined';reverse=!reverse">Joined</th>
                    </tr>`;
        }

        function renderTableRows() {
            var tableData = "";
            for (person in scope.datasource) {
                tableData += "<tr>";
                tableData += "<td>" + scope.datasource[person].name + "| uppercase</td>";
                tableData += "<td>" + scope.datasource[person].city + "| lowercase</td>";
                tableData += "<td>" + scope.datasource[person].order + "| currency</td>";
                tableData += "<td>" + scope.datasource[person].joined + "| date</td>";
                tableData += "</tr>";
            }
            //console.log(tableData);
            return tableData;
        }


    }

    return {
        restrict: 'AE',

        //with this approach the variables are not bound to the scope
        template: '<div class="table"><div>',

        //templateUrl: 'directiveTemplates/tableDirective.html',
        scope: {
            datasource: "=",
            ngTable: "@"
        },

        link: link

    }


});

ngRevisitApp.directive("ngTableTwo", function ($log) {

    var link = function (scope, element, attrs, ngModelController) {
        scope.selectFilter = "name";
        scope.$watch("selectFilter", render2);
        console.log("width.....ngtable2......", attrs.width);
        var ngmodelVal = "filterObj." + scope.selectFilter,
            fullHtml = `<label for="filter">Filter: </label>
                        <input id="filter" name="filter" type="text" ng-model=${ngmodelVal}>
                        <div>${scope.selectFilter}</div>
                        <select ng-model="selectFilter">
                                    <option value="name">name</option>
                                    <option value="city">city</option>
                                    <option value="order">order</option>
                        </select>`,
            tableHdr = "<table style='width:70%'>",
            datasource = "",
            tableEnd = "</table>";

        function render2(newValue, oldValue) {
            if (ngModelController && ngModelController.$modelValue.length) {
                datasource = ngModelController.$modelValue;
                fullHtml += tableHdr;
                fullHtml += renderTableHdr2();
                fullHtml += renderTableRows2() + tableEnd;
                renderTableDirective2();
            }
        }

        function renderTableDirective2() {
            element.html(fullHtml);
            fullHtml = '';
        }

        function renderTableHdr2() {
            return `<tr>
                        <th ng-click="sortBy='name';reverse=!reverse">Name</th>
                        <th ng-click="sortBy='city';reverse=!reverse">City</th>
                        <th ng-click="sortBy='order';reverse=!reverse">Order</th>
                        <th ng-click="sortBy='joined';reverse=!reverse">Joined</th>
                    </tr>`;
        }

        function renderTableRows2() {
            var tableData = "";
            for (person in datasource) {
                tableData += "<tr>";
                tableData += "<td>" + datasource[person].name + "| uppercase</td>";
                tableData += "<td>" + datasource[person].city + "| lowercase</td>";
                tableData += "<td>" + datasource[person].order + "| currency</td>";
                tableData += "<td>" + datasource[person].joined + "| date</td>";
                tableData += "</tr>";
            }
            // console.log(tableData);
            return tableData;
        }


    }

    return {
        restrict: 'AE',
        require: 'ngModel',

        //with this approach the variables are not bound to the scope
        template: '<div class="table"><div>',
        scope: {

        },

        link: link

    }


});
ngRevisitApp.directive("geoLocation", ["$window", function ($window) {
    var status = null,
        mapContainer = null,
        link = function (scope, element, attr) {

            status = angular.element(document.querySelector("#status"));
            mapContainer = angular.element(document.querySelector("#map"));

            mapContainer.attr("style", `height:${scope.height}; width:${scope.width}`);

            $window.navigator.geolocation.getCurrentPosition(showPosition, error);

            function showPosition(pos) {
                status.html(`Found your position ${pos.coords.latitude}, ${pos.coords.longitude}`).removeClass("alert-info").addClass("alert-success");

                var latlng = new google.maps.LatLng(pos.coords.latitude,
                    pos.coords.longitude);
                var options = {
                    zoom: 15,
                    center: latlng,
                    mapTypeControl: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map(mapContainer[0], options);

                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    title: "Your location"
                });
            }

            function error(error) {
                status.html("Couldnt locate your, Error: " + error.message);
            }

        };

    return {
        restrict: 'AE',
        scope: {
            height: "@",
            width: "@"
        },
        templateUrl: 'directiveTemplates/geoLocation.html',
        link: link
    }

}]);

ngRevisitApp.directive("transclusionAndControllerDirective", function () {

    var controllerFunc = function () {
        var vm = this;
        console.log("vm is...............", vm);
        vm.addTask = function () {
            var name = vm.taskName;
            vm.tasks.push(name);
        }
    }

    return {
        restrict: 'AE',
        transclude: true,
        scope: {
            tasks: '='
        },
        controller: controllerFunc,
        controllerAs: 'vm',
        bindToController: true,
        templateUrl: 'directiveTemplates/transclusionAndControllerDirective.html'
    }

});

ngRevisitApp.directive("delayBindDirective", ["$interpolate", function ($interpolate) {

    var compile = function (tElem, tAttr) {

        console.log("compile function called from delay bind directive", tAttr.delayBindDirective);
        var interpolateFunction = $interpolate(tAttr.delayBindDirective);
        tAttr.$set('delayBindDirective', "");

        return {

            pre: function (scope, elem, attr) {

                //console.log("Pre function called from delay bind directive", attr);

            },

            post: function (scope, elem, attr) {

                // console.log("post or link function called from delay bind directive", attr);

                elem.on(attr.trigger, function (e) {
                    var attribute = attr.attribute,
                        val = interpolateFunction(scope);
                    if (attribute && !elem.attr(attribute)) {
                        elem.attr(attribute, val);
                    }
                })

            }

        }
    }
    return {
        restrict: 'A',
        compile: compile
    }

}]);

//////////////////////////////practise for interview///////////

ngRevisitApp.service("myhttp", ["$q","$http",function($q,$http){
    
    this.data = {};
    this.error = "";
    this.getApiData = function(url, params){
        var deffered = $q.defer();
        
        $http({
            url: url,
            method: "post",
            params: params,
            timeout: 5000
        }).then(function(data){
            this.data = data;
            deffered.resolve(data);
        }, function(e){
            this.error = e;
            deffered.reject(e);
        });
        return deffered.promise;
    }
    
}]);
ngRevisitApp.controller("interview", ["$scope","myhttp", function($scope, myhttp){
    
    $scope.inter = "infosys";
    
}]);

ngRevisitApp.config(function($routeProvider){
    $routeProvider
    .when("/1", {
        templateUrl: "/spaTemplates/interview1.html",
        controller: "spaTestController"
    })
    
})


