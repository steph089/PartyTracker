/**
 * @ngInject
 */
 module.exports = function($scope, $stateParams, ItemService) {
  'use strict';

	$scope.edit = function (index) {
			$scope.items[index].edit = -$scope.items[index].edit
        };
    $scope.getitems = function () {
    	ItemService.GetItems()
  		.then(function(data) {
    	$scope.Items = data;
  		});
    };
 };
