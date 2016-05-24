// Ionic Starter App

(function () {
  'use strict';

  angular
    .module('app', [
      'ionic',
      'ui.router',
      'app.routes'
    ]);

  angular
    .module('app.routes', ['ui.router', 'ui.router.router']);

})();

