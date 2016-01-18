'use strict';

/* Directives */
myApp.directive('myTabs', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: ['$scope', function ($scope) {
            var panes = $scope.panes = [];
            $scope.title = 'directivevalue';
            $scope.select = function (pane) {
                angular.forEach(panes, function (pane) {
                    pane.selected = false;
                });
                pane.selected = true;
                pane.mycallBackMethod();
            };

            this.addPane = function (pane) {
                if (panes.length === 0) {
                    $scope.select(pane);
                }
                panes.push(pane);
            };
        }],
        templateUrl: 'my-tabs.html'
    };
}).directive('myPane', function () {
    return {
        require: '^myTabs',
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@',
            mycallBackMethod: '&ontabactivated'
        },
        link: function (scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        },
        templateUrl: 'my-pane.html'
    };
});