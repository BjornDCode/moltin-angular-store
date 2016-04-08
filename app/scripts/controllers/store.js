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
    // Return all products in the store. Not being used in the current app
    $scope.allProducts = products;
    // Return all categories
    $scope.categories = categories;
    // Return all collections
    $scope.collections = collections;
    // Return all brands
    $scope.brands = brands;
  });
