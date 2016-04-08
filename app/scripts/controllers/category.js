'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
.controller('CategoryCtrl', function ($scope, category, products) {
  // Return a category
  $scope.cat = category;
  // Products from specific category
  $scope.products = products;
});
