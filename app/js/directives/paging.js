module.exports = function($timeout) {
  'use strict';

    return {
      restrict: 'E',
      scope: {
        page: '=',
        size: '=',
        total: '=',
        onchanged: ' &'
      },
      templateUrl: 'views/Paging.html',
      link: function($scope, $element, $attrs) {                                                       
         $scope.nextPage = function () {
            if ($scope.pageNumber + 1 < 5) {
                $scope.pageNumber++;
                $scope.search();
            }
        };

        $scope.previousPage = function () {
            $scope.pageNumber--;
            if ($scope.pageNumber < 1) 
                $scope.pageNumber = 1;
            $scope.search();
        };

        $scope.$watch('total', function(total) {
          $scope.maxPages = Math.ceil(total / $scope.size);
        });
      }
    };
};