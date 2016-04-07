'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('CheckoutCtrl', function ($scope, checkout, fields, $rootScope, $location, moltin) {
    $scope.fields = fields;
    $scope.shipping = checkout.shipping.methods;
    $scope.gateways = checkout.gateways;
    $scope.data = {bill: {}, ship: {}, ship_bill: 0, notes: '', shipping: '', gateway: ''}
    $scope.createOrder = function() {
      moltin.Cart.Complete({
        customer: {
          first_name: 'Bjorn',
          last_name:  'Hansen',
          email:      'asbjorn.lindholm@hotmail.com'
        },
        shipping: $scope.data.shipping,
        gateway: $scope.data.gateway,
        bill_to: $scope.data.bill,
        ship_to: $scope.data.ship_bill ? 'bill_to' : $scope.data.ship,
      }, function(order) {
          console.log(order);
      }, function(error) {
          // Something went wrong...
      });
    };
  });
