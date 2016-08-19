/**
 * @ngInject
 */
module.exports = function($http, BASE_URI, $q){
  'use strict';

  return {
    GetPerson: function(search, page, size) {
      var q = $q.defer();
      $http.get(BASE_URI + '/search/people?search=' + search + "&page=" + page)
        .success(function(data) {
           q.resolve(data);
        });
      return q.promise;
      },
  };
};