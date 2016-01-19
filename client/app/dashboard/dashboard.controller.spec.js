
'use strict';
var dashboard = require('./dashboard.controller');

describe('myApp.view1 module', function() {

  beforeEach(window.module('app.dashboard'));

  describe('dashboard controller', function() {

    it('should exist', inject(function($controller) {
      var dashboardController = $controller('DashboardController');
      expect(dashboardController).to.exist;
    }));

    it('should add', inject(function($controller) {
      var dashboardController = $controller('DashboardController');
      var result = dashboardController.add(2, 2);
      expect(result).to.equal(4);
    }));
  });
});
