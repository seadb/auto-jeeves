// Ionic Starter App

(function () {
  'use strict';

  angular
    .module('app', [
      'ionic',
      'ui.router',
      'app.routes',
      'app.cars',
      'LocalStorageModule'
    ]);

  angular
    .module('app.routes', ['ui.router', 'ui.router.router']);

  angular
    .module('app')
    .config(config);
  
  function config(localStorageServiceProvider) {
      localStorageServiceProvider
        .setPrefix('auto-jeeves');
    };

})();

