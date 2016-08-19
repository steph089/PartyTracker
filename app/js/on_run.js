'use strict';

/**
 * @ngInject
 */
module.exports = function ($state, $rootScope, $cookieStore, PeopleService, $interpolate) {
  /*
  $rootScope.$state = $state;
  $rootScope.$on('$stateChangeStart', function(evt, next, nextParams, current, currentParams) {

    if(!next.isPublic)
    {
      if(!$rootScope.CurrentUser)
      {
        var currentUser;
        if($cookieStore.get('currentUser'))
          currentUser = JSON.parse($cookieStore.get('currentUser'));

        if(currentUser)
        {
          PeopleService.Get(currentUser.Id)
            .then(function(data) {
              $rootScope.CurrentUser = data;
          });
        }
        else
        {
          evt.preventDefault();
          var params = JSON.stringify(nextParams);
          $state.go('login', { redirectTo: next.name, redirectParams: params });
        }
      }
    }
  });

  $rootScope.$on('event:loginRequired', function(event){
    if($state.current.name != "login")
    {
      var state = event.currentScope.$state;
      var params = JSON.stringify(state.params);
      $state.go('login', { redirectTo: $state.current.name, redirectParams:  params });
    }
  });

  $rootScope.$on('event:unauthorized', function(event, data){
    $state.go('home.unauthorized', { message: data.statusText });
  });
*/
};
