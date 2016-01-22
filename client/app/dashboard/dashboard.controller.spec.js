'use strict';

var dashboard = require('./dashboard.controller');

describe('myApp.view1 module', function() {

  var spy = sinon.spy();

  beforeEach(window.module(function($provide) {
    $provide.value('$mdSidenav', function(v) {
      return {
        toggle: spy
      }
    });
  }));

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

    it('toggles when clicked', inject(function($controller) {
      var dashboardController = $controller('DashboardController');
      dashboardController.openLeftMenu();
      sinon.assert.calledOnce(spy);
    }));
  });
});
