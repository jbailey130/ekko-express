'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fieldPicks', {
        url: '/field/picks',
        templateUrl: 'app/field/picks/picks.html',
        controller: 'PicksCtrl',
        sp: {
            authenticate: true
        }
    });
});