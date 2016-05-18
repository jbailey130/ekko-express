'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fieldRivals', {
        url: '/field/rivals',
        templateUrl: 'app/field/rivals/rivals.html',
        controller: 'RivalsCtrl',
        sp: {
            authenticate: true
        }
    });
});