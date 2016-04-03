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
  $scope.cat = category;
  $scope.products = products;
});
