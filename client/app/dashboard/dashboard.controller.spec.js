
'use strict';
var dashboard = require('./dashboard.controller');

describe('myApp.view1 module', function() {

  beforeEach(window.module('app.dashboard'));

  describe('dashboard controller', function(){

    it('should exist', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('DashboardController');
      expect(view1Ctrl).to.exist;
    }));

  });
});
