'use strict';

var myApp = angular.module('testapp', []);

myApp.controller("taskCtrl", function ($scope, $timeout) {
    $scope.timeout_value = 'please wait';
    $scope.click_value = 'default value for buttons';

    setTimeout(function(){
        $scope.timeout_value = 'fire no angular setInterval, please wait';
        alert('value does not change');
    }, 3000);

    $timeout(function(){
        $scope.timeout_value = 'fire angular $timeout, please wait';
    }, 8000);

    setTimeout(function(){
        $scope.timeout_value = 'fire no angular setInterval with $digest, now please click links';
        $scope.$digest();
    }, 12000);

    $scope.change_click_value = function(){
        $scope.click_value = 'angular';
    };
    document.getElementById("js").onclick = function(){
        $scope.click_value='js';
        alert('value does not change');
    };
    document.getElementById('jsdigest').onclick = function(){
        $scope.click_value='js digest';
        $scope.$digest();
    };
});