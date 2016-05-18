'use strict';

angular.module('ekkoApp')
    .controller('NflCtrl', [
        '$scope', '$stateParams', function($scope, $stateParams) {
            $scope.teamId = $stateParams.teamid;
        }
    ]);