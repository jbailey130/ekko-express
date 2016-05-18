'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('nflEvent', {
        url: '/nfl/event/:eventid',
        templateUrl: 'app/sports/nfl/event/event.html',
        controller: 'NflEventCtrl'
    });
});