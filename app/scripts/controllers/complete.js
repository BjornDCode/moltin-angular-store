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
    // Bind the success message from fulfilled order
    $scope.message = $rootScope.payment.message;
  });
