'use strict';

var angular = require('angular');
require('angular-ui-router');
require('angular-cookies');
require('angular-bootstrap-npm');

require('./templates');
require('./controllers');
require('./services');
require('./directives');
require('./filters');
require('../config/configuration.js');

angular.element(document).ready(function() {
  var dependencies = [
    'PartyTracker.Controllers',
    'PartyTracker.Directives',
    'PartyTracker.Filters',
    'PartyTracker.Services',
    'templates',
    'client-configuration',
    'ui.router',
    'ui.bootstrap',
    'ngCookies'
  ];

  // mount on window for testing
  window.app = angular.module('PartyTracker', dependencies);

  //angular.module('PartyTracker').factory('AuthInterceptor', require('./AuthInterceptor'));
  angular.module('PartyTracker').config(require('./on_config'));
  angular.module('PartyTracker').run(require('./on_run'));

  angular.bootstrap(document, ['PartyTracker']);
});
