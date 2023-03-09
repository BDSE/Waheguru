var myApp = angular.module('timesheet', []);

myApp.controller('timesheetController', ["$scope", "$q", "$timeout", function($scope, $q, $timeout)
{
    $scope.actionsArr = [];
    $scope.view = 'main';
    $scope.showLoader=false;
    $scope.views ={
        main: {
            hdrTxt: "Submit Timesheet",
            action: ['next', 'clear'],
            index:1
        },
        confirmView:{
            hdrTxt: "Confirm Information",
            action: ['back', 'save'],
            index:2
        },
        submitted: {
            hdrTxt: "Timesheet Submitted",
            action: ['relaunch'],
            index:3
        }

    }

    $scope.changeView = function(view){
        $scope.view = view;
        $scope.getActions();
    };

    $scope.saveData = function(data){
        var defer = $q.defer();
        $timeout(function(){
            defer.resolve(data);
        }, 1000);
        return defer.promise;
    }

    $scope.next = function(){
        $scope.changeView('confirmView');
    };

    $scope.clear = function(){
        $scope.formData = null;
    };

    $scope.submit = function(){
        $scope.loadingStart();
        $scope.saveData($scope.formData).then(function(data){
            if(data){
                //success
                $scope.changeView("submitted");
                $scope.loadingComplete();
            }
        })
    };

    $scope.loadingStart = function(){
        $scope.showLoader=true;
    };

    $scope.loadingComplete = function(){
        $scope.showLoader=false;
    };

    $scope.back = function(){
        $scope.changeView('main');
    };

    $scope.relaunch = function(){
        $scope.clear();
        $scope.changeView('main');
    };

    $scope.actions = {
        next: {
            onclick: $scope.next,
            text: "Next",
            idx: 1,
            canDisable: true
        },
        clear: {
            onclick: $scope.clear,
            text: 'Clear Form',
            idx: 2
        },
        save: {
            onclick: $scope.submit,
            text: 'Submit',
            idx: 3
        },
        back: {
            onclick: $scope.back,
            text: 'Back',
            idx: 4
        },
        relaunch: {
            onclick: $scope.relaunch,
            text: 'Relaunch',
            idx: 1
        }
    }

    $scope.getActions = function(){
        $scope.actionsArr = [];
        var view = $scope.view || 'main';
        var allowedActions = $scope.views[view].action
        angular.forEach(allowedActions, function(action){
            this.actionsArr.push($scope.actions[action]);
        }, $scope);
    };

    $scope.getActions();
}]);