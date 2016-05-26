(function () {
  'use strict';

  angular
    .module('app.maintenance')
    .controller('MaintenanceController', MaintenanceController);

  MaintenanceController.$inject = ['$location', '$scope', 'Cars', 'Maintenance'];

  /**
  * @namespace MaintenanceController
  */
  function MaintenanceController($location, $scope, Cars, Maintenance) {
    var vm = this;
    vm.getMaintenance = getMaintenance;
    vm.hasMileageAndMaintenance = hasMileageAndMaintenance;
    vm.update = update;
    vm.maintenanceActions = [];
    console.log("maintenance controller");
    Cars.registerCallback(update);
    
    update();

    function update() {
      vm.car = getCar();
      getMaintenance(vm.car.year.id);
    }
    function getCar() {
      return Cars.get();
    }
    function getMaintenance(modelYear) {
      Maintenance.get(modelYear)
        .then(maintenanceSuccess);
    }
    function maintenanceSuccess(data) {
      console.log(data);
      var rawActions = data.data.actionHolder;
      var filteredActions = rawActions.filter(filterByFrequency);
      console.log(filteredActions);
      vm.maintenanceActions = filteredActions;
    }
    function hasMileageAndMaintenance(action) {
      console.log(action);
      if ( action.intervalMileage !== undefined && action.intervalMonth !== undefined ) {
        return true;
      }
      else {
        return false;
      }
    }
    function filterByFrequency(action) {
      var allowed = [ 3, 4, 5, 6 ]
      if(allowed.includes(action.frequency)) {
        return true;
      }
      else {
        return false;
      }
    }
  }
})();
