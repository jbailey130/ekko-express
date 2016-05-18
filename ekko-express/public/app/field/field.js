'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('field', {
        url: '/field',
        templateUrl: 'app/field/field.html',
        controller: 'FieldCtrl',
        sp: {
            authenticate: true
        }
    });
});