'use strict';

angular.module('ekkoApp').directive('ekkoSidebarSchedule', ['$http', '$location', 'Team',
    function ($http, $location, Team) {
        return {
            restrict: 'E',
            scope: {
                activesport: "=",
                activeteam: "@"
            },
            templateUrl: '/app/directives/ekkoSidebarSchedule/ekkoSidebarSchedule.html',
            link: function ($scope, element, attrs) {
                
                $scope.schedule = [];
                $scope.sref = attrs.activesport + "Event";

                var promise;
                if (!attrs.activeteam) {
                    promise = Team.getSportScheduleForCurrentWeek(attrs.activesport);
                } else {
                    promise = Team.getSportScheduleForCurrentWeekForTeam(attrs.activesport, attrs.activeteam);
                }
                
                promise.then(
                    function (response) {
                        $scope.schedule = response.data;
                    },
                    function () { });                
            }
        }
    }
]);