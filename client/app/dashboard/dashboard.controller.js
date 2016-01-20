'use strict';

(function() {
  angular.module('app.dashboard', []);
})();

(function() {
  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$rootScope', '$mdSidenav'];

  function DashboardController($rootScope, $mdSidenav) {
    var vm = this;
    vm.openLeftMenu = openLeftMenu;
    vm.add = add;
    activate();

    function activate() {
      console.log('working');
    }

    function openLeftMenu() {
      console.log('clicked');
      $mdSidenav('left').toggle();
    }

    function add(a, b) {
      return a + b;
    }
  }
})();

