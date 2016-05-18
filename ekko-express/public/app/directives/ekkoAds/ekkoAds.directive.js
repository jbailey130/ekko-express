'use strict';

angular.module('ekkoApp').directive('ekkoAds', [   
    function() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/directives/ekkoAds/ekkoAds.html',
            link: function($scope, element, attrs) {

            }
        }
    }
]);