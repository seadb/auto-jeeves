(function () {
  'use strict';

  angular
    .module('app.cars')
    .controller('CarsController', CarsController);

  CarsController.$inject = ['$location', '$scope', 'Cars'];

  /**
  * @namespace CarsController
  */
  function CarsController($location, $scope, Cars) {
    var vm = this;
    vm.getModels = getModels;
    vm.getYears = getYears;
    vm.saveCar = saveCar;
    vm.getCar = getCar;
    vm.submit = submit;
    vm.isSubmitEnabled = false;
    vm.enableSubmit = enableSubmit;

    init();

    function init() {
      Cars.makes()
        .then(makesSuccess);
    }
    function makesSuccess(data) {
      console.log(data);
      vm.makes = data.data.makes;
    }
    function getModels() {
      Cars.models(vm.selectedMake)
        .then(modelsSuccess);
    }
    function modelsSuccess(data) {
      disableSubmit();
      vm.selectedModel = undefined;
      vm.selectedYear = undefined;
      vm.models = data.data.models;
    }
    function getYears() {
      Cars.years(vm.selectedMake, vm.selectedModel)
        .then(yearsSuccess);
    }
    function yearsSuccess(data) {
      disableSubmit();
      vm.selectedYear = undefined;
      vm.years = data.data.years;
    }
    function saveCar() {
      vm.selectedYear = JSON.parse(vm.selectedYear);
      Cars.save(vm.selectedMake, vm.selectedModel, vm.selectedYear);
    }
    function getCar() {
      vm.storedCar = Cars.get();
    }
    function submit() {
      saveCar();
      window.location = '#/maintenance'
    }
    function enableSubmit() {
      vm.isSubmitEnabled = true;
    }
    function disableSubmit() {
      vm.isSubmitEnabled = false;
    }
  }
})();
