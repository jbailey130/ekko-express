'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fieldGames', {
        url: '/field/games',
        templateUrl: 'app/field/games/games.html',
        controller: 'GamesCtrl',
        sp: {
            authenticate: true
        }
    });
});