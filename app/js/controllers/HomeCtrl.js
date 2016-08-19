/**
 * @ngInject
 */
module.exports = function($scope, $state, $interpolate, LoginService, CompanyService, $rootScope, $interval, $timeout) {
  'use strict';

  $scope.navigationOpen = true;

  $scope.$on("$stateChangeSuccess", function(event, toState, toParams) {
    var current = $state.$current;
    var interpolationContext =  (typeof current.locals !== 'undefined') ? current.locals.globals : current;
      $scope.Title = $interpolate(current.title)(interpolationContext);
  });

  $scope.logout = function() {
    LoginService.Logout();
    $state.go('login');
  };

  $scope.go = function(route) {
    $state.go(route);
  };

  $scope.searchKeyPressed = function(event) {
    if(event.keyCode === 13)
    {
      $state.go("home.jobs.list", { status: 'all', search: $scope.gloablSearch });
    }
  };
};
