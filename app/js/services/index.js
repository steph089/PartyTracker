var angular = require('angular');

var services = angular.module('PartyTracker.Services', []);
module.exports = services;

services.service('LoginService', require('./LoginService'));
services.service('PeopleService', require('./PeopleService'));
services.service('CompanyService', require('./CompanyService'));
services.service('AdminService',	require('./AdminService'));
