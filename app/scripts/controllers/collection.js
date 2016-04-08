'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:CollectionCtrl
 * @description
 * # CollectionCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('CollectionCtrl', function ($scope, collection, products) {
    // Return collection
    $scope.collect = collection;
    // Return products in specific collection
    $scope.products = products;
  });
