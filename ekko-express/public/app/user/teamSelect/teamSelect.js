'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teamSelect', {
        url: '/user/teamselect',
        templateUrl: 'app/user/teamSelect/teamSelect.html',
        controller: 'TeamSelectCtrl'
    });
});