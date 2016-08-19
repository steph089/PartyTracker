/**
 * @ngInject
 */
 module.exports = function($scope) {
  'use strict';
  $scope.searchText = '';
  $scope.pageSize = 10;
  $scope.pageNumber = 1;

$scope.counting = function () {
            if ($scope.count + 1 < 5) {
                $scope.count++;
            }
            else (
              $scope.count = 1
            )
        };

 $scope.roll20 = function () {
    $scope.roll203 = $scope.roll202
    $scope.roll202 = $scope.roll201
    $scope.roll201 = Math.round((Math.random() * 100) % 19 )+1;
 }
  $scope.roll12 = function () {
    $scope.roll123 = $scope.roll122
    $scope.roll122 = $scope.roll121
    $scope.roll121 = Math.round((Math.random() * 100) % 11 )+1;
 }
  $scope.roll10 = function () {
    $scope.roll103 = $scope.roll102
    $scope.roll102 = $scope.roll101 
    $scope.roll101 = Math.round((Math.random() * 100) % 9 )+1;
 }
  $scope.roll8 = function () {
    $scope.roll83 = $scope.roll82
    $scope.roll82 = $scope.roll81
    $scope.roll81 = Math.round((Math.random() * 100) % 7 )+1;
 }
  $scope.roll6 = function () {
    $scope.roll63 = $scope.roll62
    $scope.roll62 = $scope.roll61
    $scope.roll61 = Math.round((Math.random() * 100) % 5 )+1;
 }
  $scope.roll4 = function () {
    $scope.roll43 = $scope.roll42
    $scope.roll42 = $scope.roll41 
    $scope.roll41 = Math.round((Math.random() * 100) % 3 )+1;
 }
 };
