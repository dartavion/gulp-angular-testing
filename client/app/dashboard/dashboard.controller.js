'use strict';

(function() {
  angular.module('app.dashboard', []);
})();

(function() {
  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$rootScope'];

  function DashboardController($rootScope) {
    var vm = this;
    vm.openLeftMenu = openLeftMenu;
    vm.add = add;
    activate();

    function activate() {
      console.log('working');
    }

    function openLeftMenu() {
      console.log('clicked');
    }

    function add(a, b) {
      return a + b;
    }
  }
})();

