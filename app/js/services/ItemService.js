/**
 * @ngInject
 */
module.exports = function($http, BASE_URI, $q){
  'use strict';

  return {
    GetItems: function(Num) {
      var q = $q.defer();
      $http.get( BASE_URI + 'items.php')
        .success(function(data) {
           q.resolve(data);
        });
      return q.promise;
      },
  };
};