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
    $scope.collect = collection;
    $scope.products = products;
    console.log(products);
  });
