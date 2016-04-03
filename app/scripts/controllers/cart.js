'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('CartCtrl', function ($scope, cart) {
    $scope.car = cart;
  });
