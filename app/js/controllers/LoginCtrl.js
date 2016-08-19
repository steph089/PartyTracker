/**
 * @ngInject
 */
module.exports = function($scope, LoginService, $state, $stateParams, $cookieStore, $rootScope) {
  'use strict';

  $scope.doLogin = function(){
    LoginService.LoginAs($scope.login.email, $scope.login.password, 1)
      .then(function(data) {
        if(!data.Succeded)
          $scope.error = data.Message;
        else
        {
          var redirectTo = $stateParams.redirectTo;
          if(redirectTo && redirectTo != "login")
          {
          	var params = JSON.parse($stateParams.redirectParams);
            $state.go(redirectTo, params);
          }
          else
            $state.go("home");
        }
      },
      function(error) {
        $scope.error = "Invalid Username or Password.";
      });
  };
};
