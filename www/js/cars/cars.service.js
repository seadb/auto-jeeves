(function () {
  'use strict';

  var API_KEY = 'tn4usw7w9e3vr5ecf7vs4fdz',
      EDMUND_URL = 'https://api.edmunds.com/api/vehicle/v2/',
      PARAMS = {
        fmt: 'json',
        api_key: API_KEY
      };

  angular
    .module('app.cars')
    .factory('Cars', Cars);

  Cars.$inject = ['$http', 'localStorageService'];


  /**
  * @namespace Cars
  * @returns {Factory}
  */
  function Cars($http, localStorageService) {

    var Cars = {
      makes: makes,
      models: models,
      years: years,
      all: all,
      save: save,
      get: get,
      registerCallback: registerCallback
    };

    return Cars;

    ////////////////////
    
    var callback;

    /**
    * @desc Get all Cars
    */
    function all() {
      return $http.get('/api/v1/cars/');
    }

    function makes() {
      return $http.get(`${EDMUND_URL}makes`, {
        params: PARAMS
      });
    }

    function models(make) {
      return $http.get(`${EDMUND_URL}${make}/models`, {
        params: PARAMS
      });
    }

    function years(make, model) {
      return $http.get(`${EDMUND_URL}${make}/${model}/years`, {
        params: PARAMS
      });
    }

    function save(make, model, year) {
      var car = {
        make: make,
        model: model,
        year: year
      }
      console.log(car);
      localStorageService.set('car', car);
      if( typeof(callback) === "function") {
        callback();
      }
    }

    function get() {
      return localStorageService.get('car');
    }

    function registerCallback(cb) {
      callback = cb;
    }
  }
})();
