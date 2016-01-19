'use strict';

/* Services */

myApp.factory('Colors', ['$http', '$rootScope', function($http, $rootScope) {

    var service = {};
    service.color = '#000000';
    service.getRandomColor = function() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        service.color = color;
    }

    return service;
}]);
