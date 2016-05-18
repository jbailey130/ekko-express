
'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('forgot', {
        url: '/forgot',
        templateUrl: 'app/auth/forgot/forgot.html',
        controller: 'ForgotCtrl'
    });
});