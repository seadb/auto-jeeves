// Ionic Starter App

(function () {
  'use strict';

  angular
    .module('app', [
      'ionic',
      'ui.router',
      'app.routes',
      'app.cars'
    ]);

  angular
    .module('app.routes', ['ui.router', 'ui.router.router']);

angular
  .module('app')
  .run(run);

run.$inject = ['$http'];

/**
* @name run
* @desc Update xsrf $http headers to align with Django's defaults
*/
function run($http) {
  //$http.defaults.headers.common.Authorization = 'tn4usw7w9e3vr5ecf7vs4fdz'
}
})();

