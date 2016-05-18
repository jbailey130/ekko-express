'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/user/profile',
        templateUrl: 'app/user/profile/profile.html',
        controller: 'ProfileCtrl',
        sp: {
            authenticate: true
        }
    });
});