'use strict';

angular.module('ekkoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fieldNews', {
        url: '/field/news',
        templateUrl: 'app/field/news/news.html',
        controller: 'NewsCtrl',
        sp: {
            authenticate: true
        }
    });
});