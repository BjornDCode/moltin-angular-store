'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:CompleteCtrl
 * @description
 * # CompleteCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('CompleteCtrl', function ($scope, $rootScope) {
    $scope.message = $rootScope.payment.message;
  });
