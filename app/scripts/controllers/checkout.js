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
    // Return cart
    $scope.car = cart;
    // Return all fields in an Address
    $scope.fields = fields;
    // Return shipping methods
    $scope.shipping = checkout.shipping.methods;
    // Return gateways
    $scope.gateways = checkout.gateways;
    // Bind data from form to a format that can be used in the Moltin function
    $scope.data = {bill: {}, ship: {}, ship_bill: 0, notes: '', shipping: '', gateway: ''}
    // Function to create order from a cart
    $scope.createOrder = function() {
      moltin.Cart.Complete({
        // Customer information
        customer: {
          first_name: $scope.data.bill.first_name,
          last_name:  $scope.data.bill.last_name,
          email:      $scope.data.email
        },
        // Chosen shipping method
        shipping: $scope.data.shipping,
        // Chosen gateway
        gateway: $scope.data.gateway,
        // Billing information
        bill_to: $scope.data.bill,
        // Check if shipping information should be the same as billing information. If not then bind the shipping information
        ship_to: $scope.data.ship_bill ? 'bill_to' : $scope.data.ship,
      }, function(order) {
          // Bind the created order to the rootScope so it can be accessed in the payment controller
          $rootScope.order = order;
          // Apply the new rootScope and move to the the /payment route
          $rootScope.$apply(function() {
            $location.path('/payment');
          });
      });
    };
  });
