'use strict';

angular.module('ekkoApp')
    .controller('PicksCtrl', ['$scope', 'Team',function ($scope, Team) {
        //  NO CURRENT IMPLEMENTATION

        var promise = Team.getSportScheduleForCurrentWeek('nfl');

        promise.then(
            function(response) {
                $scope.schedule = response.data;
            },
            function() {
                
            });
    }
]);