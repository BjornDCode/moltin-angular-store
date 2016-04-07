'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:PaymentCtrl
 * @description
 * # PaymentCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('PaymentCtrl', function ($scope, moltin, $location, $rootScope) {
    console.log($scope.order.id);
    $scope.fullfillPayment = function(data) {
      moltin.Checkout.Payment('purchase', $scope.order.id, {data: $scope.data}, function(payment) {
          console.log(payment);
      });
    }
  });
