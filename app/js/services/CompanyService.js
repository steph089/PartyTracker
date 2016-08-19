/**
 * @ngInject
 */
module.exports = function($http, BASE_URI, $q){
  'use strict';

  return {
    Search: function(search, page, size) {
      var q = $q.defer();
      $http.get(BASE_URI + "/search/companies?search=" + search + "&page=" + page +"&size=" + size)
        .success(function(data) {
          q.resolve(data);
        });
      return q.promise;
    },  

  getCompany: function(Id) {
      var q = $q.defer();
      $http.get(BASE_URI + "/companies/" + Id)
        .success(function(data) {
          q.resolve(data);
        });
      return q.promise;
    }  
  };
};
