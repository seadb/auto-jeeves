(function () {
  'use strict';

  var API_KEY = 'tn4usw7w9e3vr5ecf7vs4fdz',
      EDMUND_URL = 'https://api.edmunds.com/v1/api/',
      PARAMS = {
        fmt: 'json',
        api_key: API_KEY
      };

  angular
    .module('app.maintenance')
    .factory('Maintenance', Maintenance);

  Maintenance.$inject = ['$http', 'localStorageService'];


  /**
  * @namespace Maintenance
  * @returns {Factory}
  */
  function Maintenance($http, localStorageService) {


    var Maintenance = {
      get: get
    };

    return Maintenance;

    function get(modelYear) {
      return $http.get(`${EDMUND_URL}maintenance/actionrepository/findbymodelyearid?modelyearid=${modelYear}`, {
        params: PARAMS
      });
    }
  }
})();
