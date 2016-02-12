'use strict';

/* Directives */

testApp.directive("files", function () {
    return {
        restrict: 'E',
        template: '<br/><br/>Selected files',
        link: function (scope, el, attrs) {
            el.widgetfiles({
                onValueChanged: function ( data) {
                    scope.files = data;
                    scope.$digest();
                }
            });
        }
    };
});