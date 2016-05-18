'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ncaam', {
        url: '/ncaam',
        templateUrl: 'app/sports/ncaam/ncaam.html',
        controller: 'NcaamCtrl'
    });
});