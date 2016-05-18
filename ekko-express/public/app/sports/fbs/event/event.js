'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fbs', {
        url: '/fbs',
        templateUrl: 'app/sports/fbs/event/event.html',
        controller: 'fbsEventSSCtrl'
    });
});