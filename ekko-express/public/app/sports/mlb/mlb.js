'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mlb', {
        url: '/mlb',
        templateUrl: 'app/sports/mlb/mlb.html',
        controller: 'MlbCtrl'
    });
});