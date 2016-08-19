var angular = require('angular');

var directives = angular.module('PartyTracker.Directives', []);
module.exports = directives;

var app = angular.module('PartyTracker',[]);

app.directive('paging', require('./paging'));