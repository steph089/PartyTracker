/**
 * @ngInject
 */
module.exports = function($http, BASE_URI, $q){
  'use strict';

  return {
    Get: function(personId) {
      var q = $q.defer();
      $http.get(BASE_URI + '/people/' + personId)
        .success(function(data) {
          q.resolve(data);
        })
        .error(function(data, status){
          q.reject(data, status);
        });
      return q.promise;
    },
    GetPeopleInCompany: function(companyId){
      var q = $q.defer();
      $http.get(BASE_URI + '/people/peopleincompany?companyId=' + companyId)
        .success(function(data) {
          q.resolve(data);
        })
        .error(function(data, status){
          q.reject(data, status);
        });
      return q.promise;
    }
  };
};
