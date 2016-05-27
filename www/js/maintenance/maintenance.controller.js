(function () {
  'use strict';

  angular
    .module('app.maintenance')
    .controller('MaintenanceController', MaintenanceController);

  MaintenanceController.$inject = ['$location', '$scope', 'Cars', 'Maintenance'];

  function MaintenanceController($location, $scope, Cars, Maintenance) {
    var vm = this;
    vm.update = update;
    vm.maintenanceActions = [];
    Cars.registerCallback(update);
    
    update();

    function update() {
      vm.car = Cars.get();
      if(vm.car !== undefined) {
        Maintenance.get(vm.car.year.id)
          .then(maintenanceSuccess);
      }
    }
    function maintenanceSuccess(data) {
      var rawActions = data.data.actionHolder;
      var filteredActions = rawActions.filter(filterByFrequency);
      vm.maintenanceActions = filteredActions;
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
