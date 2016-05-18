'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('verify', {
        url: '/verify?sptoken',
        templateUrl: 'app/auth/verify/verify.html',
        controller: 'VerifyCtrl'
    });
});