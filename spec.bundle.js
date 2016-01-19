'use strict';

var angular = require('angular');

var mocks = require('angular-mocks');

var context = require.context('./client/app', true, /\.spec\.js/);

context.keys().forEach(context);
