'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('CheckoutCtrl', function ($scope, checkout, fields, $rootScope, $location, moltin, cart) {
    $scope.car = cart;
    $scope.fields = fields;
    $scope.shipping = checkout.shipping.methods;
    $scope.gateways = checkout.gateways;
    $scope.data = {bill: {}, ship: {}, ship_bill: 0, notes: '', shipping: '', gateway: ''}
    $scope.createOrder = function() {
      moltin.Cart.Complete({
        customer: {
          first_name: $scope.data.bill.first_name,
          last_name:  $scope.data.bill.last_name,
          email:      $scope.data.email
        },
        shipping: $scope.data.shipping,
        gateway: $scope.data.gateway,
        bill_to: $scope.data.bill,
        ship_to: $scope.data.ship_bill ? 'bill_to' : $scope.data.ship,
      }, function(order) {

          $rootScope.order = order;
          $rootScope.$apply(function() {
            $location.path('/payment');
          });
      });
    };
  });
