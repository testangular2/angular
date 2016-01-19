'use strict';

/* Directives */
myApp.directive('setcolor', function factory(Colors) {
    return {
        restrict: 'E',
        scope: {},
        controller: ['$scope', function ($scope) {
            $scope.generatecolor = function() {
                Colors.getRandomColor();
            }
        }],
        templateUrl: 'setcolor.html'
    };
}).directive('showcolor', function factory(Colors) {
    return {
        restrict: 'E',
        scope: {},
        controller: ['$scope', function ($scope) {
            $scope.Color = Colors;
        }],
        templateUrl: 'showcolor.html'
    };
});