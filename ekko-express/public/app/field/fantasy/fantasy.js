'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fieldFantasy', {
        url: '/field/fantasy',
        templateUrl: 'app/field/fantasy/fantasy.html',
        controller: 'FantasyCtrl',
        sp: {
            authenticate: true
        }
    });
});