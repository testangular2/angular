'use strict';
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
/* Directives */
myApp.directive('setcolor', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: ['$scope', '$rootScope', function ($scope, $rootScope) {
            $scope.generatecolor = function () {
                $rootScope.$broadcast('generatecolor');
            }
        }],
        templateUrl: 'setcolor.html'
    };
}).directive('showcolor', function () {
    return {
        require: '^setcolor',
        restrict: 'E',
        scope: {},
        controller: ['$scope', function ($scope) {
            var randomcolor = document.getElementById("colordiv");
            $scope.$on('generatecolor', function () {
                randomcolor.style.backgroundColor = getRandomColor();
            });
        }],
        templateUrl: 'showcolor.html'
    };
});