'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('friends', {
        url: '/user/friends',
        templateUrl: 'app/user/friends/friends.html',
        controller: 'FriendsCtrl',
        sp: {
            authenticate: true
        }
    });
});