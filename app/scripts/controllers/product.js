'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
.controller('ProductCtrl', function($scope, product) {
  $scope.prod = product;
  $scope.prodImgs = product.images;
  console.log(product.images);
});
