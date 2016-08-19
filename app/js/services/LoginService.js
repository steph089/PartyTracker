/**
 * @ngInject
 */
module.exports =  function($http, $q, $cookieStore, PeopleService, BASE_URI, $rootScope) {
  'use strict';
/*
  return {
    LoginAs: function(username, password, company) {
      var q = $q.defer();
      $http.post(BASE_URI + '/auth/loginas', { username: username, password: password, companyId: company })
        .success(function(data){
        	if(data.Succeded)
        	{
	          $cookieStore.put('token', data.Token);

	          PeopleService.Get(data.PersonId)
	            .then(function(user) {
	              $cookieStore.put('currentUser', JSON.stringify(user));
	              $rootScope.CurrentUser = user;

	              q.resolve(data);
	            });
          }
          else
          	q.resolve(data);
        })
        .error(function(data, status){
          $cookieStore.remove('token');
          $cookieStore.remove('currentUser');
          q.reject(data, status);
        });
      return q.promise;
    },
    Logout: function() {
	    $cookieStore.remove('token');
	    $cookieStore.remove('currentUser');
    }
  };
  */
};
