'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('nhl', {
        url: '/nhl',
        templateUrl: 'app/sports/nhl/nhl.html',
        controller: 'NhlCtrl'
    });
});