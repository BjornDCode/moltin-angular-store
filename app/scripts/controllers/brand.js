'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:BrandCtrl
 * @description
 * # BrandCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('BrandCtrl', function ($scope, brand, products) {
    // Return a brand
    $scope.bra = brand;
    // Products from specific brand
    $scope.products = products;
  });
