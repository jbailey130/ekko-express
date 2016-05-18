'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fieldUpsets', {
        url: '/field/upsets',
        templateUrl: 'app/field/upsets/upsets.html',
        controller: 'UpsetsCtrl',
        sp: {
            authenticate: true
        }
    });
});