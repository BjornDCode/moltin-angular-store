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
    $scope.bra = brand;
    $scope.products = products;
  });
