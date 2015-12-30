'use strict';
var myApp = angular.module('testapp',[]);

myApp.controller('tabsCtrl', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    $scope.lazyLoading = function (tab_id, html_source_url) {
        if (typeof $scope.htmlfortab[tab_id] == 'undefined')
            $http({
                method: 'GET',
                url: html_source_url
            }).success(function(data){
                $scope.htmlfortab[tab_id] = $sce.trustAsHtml(data);
            }).error(function(){
                $scope.htmlfortab[tab_id] = $sce.trustAsHtml('Error getting data for tab '+tab_id);
            });
    };
}]);

