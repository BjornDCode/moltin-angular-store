'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:PaymentCtrl
 * @description
 * # PaymentCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('PaymentCtrl', function ($scope, moltin, $location, $rootScope, $route) {
    // Function that fulfill payment of an order
    $scope.fulfillPayment = function(data) {
        // Run moltin function with the order id and data from form
        moltin.Checkout.Payment('purchase', $scope.order.id, {data: $scope.data}, function(payment) {
          // On succes, reset rootScope.order
          $rootScope.order = null;
          // Delete the cart
          moltin.Cart.Delete(function() {
            // Broadcast a message to the nav controller that, runs the function to update cart count
            $rootScope.$broadcast('updateCartCount');
          });
          // Bind the payment to rootScope to be used in the complete controller
          $rootScope.payment = payment;
          // Apply new rootScope and move to complete route
          $rootScope.$apply(function() {
            $location.path('/complete');
          });
        }, function(error) {
          // If there is an error bind message
          $scope.message = "Incorrect details";
          // Reload route to update screen with error message
          $route.reload();
        });

    }
  });
