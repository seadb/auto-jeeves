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
    console.log("car controller");
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
      console.log(vm.selectedMake);
      Cars.models(vm.selectedMake)
        .then(modelsSuccess);
    }
    function modelsSuccess(data) {
      console.log(data);
      vm.models = data.data.models;
    }
    function getYears() {
      console.log(vm.selectedMake);
      console.log(vm.selectedModel);
      Cars.years(vm.selectedMake, vm.selectedModel)
        .then(yearsSuccess);
    }
    function yearsSuccess(data) {
      console.log(data);
      vm.years = data.data.years;
    }
    function saveCar() {
      Cars.save(vm.selectedMake, vm.selectedModel, vm.selectedYear);
      $scope.$emit('carChange');
      $scope.$broadcast('carChange');
    }
    function getCar() {
      console.log(Cars.get());
      vm.storedCar = Cars.get();
    }
    function submit() {
      console.log('submit');
      saveCar();
      window.location = '#/maintenance'
    }
  }
})();
