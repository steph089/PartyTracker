'use strict'

module.exports = function ($cookieStore, $q, $location, $rootScope) {
  'use strict';
 /* return {
    request: function(config) {
      config.headers = config.headers || {};
      if ($cookieStore.get('token')) {
          config.headers.Token = $cookieStore.get('token');
      }
      else
      {
      	console.log('no token! trying to get to: ' + config.url);
      }
      return config || $q.when(config);
    },
    responseError: function(rejection) {
      if (rejection.status === 401) {
        $cookieStore.remove('token');
        $cookieStore.remove('currentUser');
        $rootScope.$broadcast('event:loginRequired', rejection);
      }
      else if(rejection.status === 403) {
      	$rootScope.$broadcast('event:unauthorized', rejection);
      }
      return $q.reject(rejection);
    }
  };
  */
};
