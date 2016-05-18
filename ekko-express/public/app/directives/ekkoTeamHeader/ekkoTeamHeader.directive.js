'use strict';

angular.module('ekkoApp').directive('ekkoTeamHeader', ['Team',
    function (Team) {
        return {
            restrict: 'E',
            scope: {
                activesport: '@'
            },
            templateUrl: '/app/directives/ekkoTeamHeader/ekkoTeamHeader.html',
            link: function ($scope, element, attrs) {
                $scope.isCollapsed = true;
                $scope.teams = [];
                $scope.conferences = [];
                $scope.sport = attrs.activesport;
                
                switch($scope.sport) {
                    case "nfl":
                        var promise = Team.getTeamsBySport($scope.sport);
                        promise.then(
                            function(response) {
                                $scope.teams = response.data;
                            },
                            function() {});
                        break;
                    case "fbs":
                        var promise = Team.getConferencesBySport($scope.sport);
                        promise.then(
                            function(response) {
                                $scope.conferences = response.data;
                            },
                            function() {});
                        break;
                }
            }
        }
    }
]);