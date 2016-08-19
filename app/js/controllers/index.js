var angular = require('angular');

var controllers = angular.module('PartyTracker.Controllers', []);
module.exports = controllers;

controllers.controller('HomeCtrl', require('./HomeCtrl'));
controllers.controller('LoginCtrl', require('./LoginCtrl'));
controllers.controller('MainCtrl', require('./MainCtrl'));
controllers.controller('BattleCtrl', require('./BattleCtrl'));
controllers.controller('DocumentsCtrl', require('./DocumentsCtrl'));
controllers.controller('ItemsCtrl', require('./ItemsCtrl'));