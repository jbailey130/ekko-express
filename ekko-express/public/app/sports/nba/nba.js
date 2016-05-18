'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('nba', {
        url: '/nba',
        templateUrl: 'app/sports/nba/nba.html',
        controller: 'NbaCtrl'
    });
});