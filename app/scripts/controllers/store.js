'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('StoreCtrl', function($scope, products, categories, collections, brands) {
    $scope.allProducts = products;
    $scope.categories = categories;
    $scope.collections = collections
    $scope.brands = brands;
    console.log(brands);
  });
