'use strict';

angular.module('ekkoApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'stormpath',
    'stormpath.templates',
    'ekkoFilters',
    'ui.bootstrap',
    'ngAnimate'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    
    $locationProvider.html5Mode(true);
})
  .run(function ($stormpath, $rootScope, $state) {
    
    /*
      In this example we use UI router, and this
      is how we tell the Stormpath module which
      states we would like to use to use for login
      and post-login
     */

    $stormpath.uiRouter({
        loginState: 'login',
        defaultPostLoginState: 'field'
    });
    
    /*
      We want to redirect users back to the login
      state after they logout, so we watch for the
      logout event and then transition them to the
      login state
     */
    $rootScope.$on('$sessionEnd', function () {
        $state.transitionTo('login');
    });
});