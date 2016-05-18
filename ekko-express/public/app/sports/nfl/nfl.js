'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('nfl', {
        url: '/nfl/:teamid',
        templateUrl: 'app/sports/nfl/nfl.html',
        controller: 'NflCtrl'
    });
});