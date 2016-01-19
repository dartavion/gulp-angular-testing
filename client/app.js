'use strict';
var angular = require('angular');
require('angular-route');
require('angular-material');
require('./app/dashboard/dashboard.controller');
require('./app.less');
(function() {
  angular
    .module('app', [
      'ngMaterial',
      'ngAnimate',
      'ngRoute',
      'app.dashboard'
    ])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: './app/dashboard/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'vm',
          resolve: {
            // I will cause a 1 second delay
            delay: function ($q, $timeout) {
              var delay = $q.defer();
              $timeout(delay.resolve, 1000);
              return delay.promise;
            }
          }
        });
    });
})();
