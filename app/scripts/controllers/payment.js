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
    console.log($rootScope.order);
    $scope.fullfillPayment = function(data) {
        moltin.Checkout.Payment('purchase', $scope.order.id, {data: $scope.data}, function(payment) {
          $rootScope.order = null;
          moltin.Cart.Delete(function() {
            $rootScope.$broadcast('updateCartCount');
          });
          $rootScope.payment = payment;
          $rootScope.$apply(function() {
            $location.path('/complete');
          });
        });
    }
  });
