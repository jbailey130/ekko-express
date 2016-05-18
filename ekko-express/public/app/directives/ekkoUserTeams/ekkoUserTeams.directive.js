'use strict';

angular.module('ekkoApp').directive('ekkoUserTeams', ['$location', '$user',
    function ($location, $user) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/directives/ekkoUserTeams/ekkoUserTeams.html',
            link: function ($scope, element, attrs) {
                
                var data = $user.currentUser.customData;
                $scope.teams = $user.currentUser ? data.Teams : null;
                
                $scope.selectTeam = function (league, teamid) {
                    //"#/nfl/team/{{team.TeamId}}
                    $location.path("/" + league.toLowerCase() + "/team/" + teamid);
                };

            }
        }
    }
]);