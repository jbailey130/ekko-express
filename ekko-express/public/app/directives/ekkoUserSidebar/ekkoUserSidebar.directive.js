'use strict';

angular.module('ekkoApp').directive('ekkoUserSidebar', ['$user', 
    function ($user) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/directives/ekkoUserSidebar/ekkoUserSidebar.html',
            link: function ($scope, element, attrs) {
                $scope.user = $user.currentUser;
            }
        }
    }
]);