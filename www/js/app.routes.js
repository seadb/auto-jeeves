(function () {
  'use strict';

  angular
    .module('app.routes')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  /**
  * @name config
  * @desc Defines routes and templates
  */
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'welcome.html'
      })
      .state('cars', {
        url: '/cars',
        templateUrl: 'select-car.html'
      })
      .state('maintenance', {
        url: '/maintenance',
        templateUrl: 'maintenance-schedule.html'
      })
      ;
    $urlRouterProvider.otherwise('/');  
  }
})();
