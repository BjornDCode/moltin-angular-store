'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('CartCtrl', function ($scope, cart, moltin, $route, $rootScope) {
    // Set the cart on the scope

    $scope.car = cart;
    console.log($scope.car);
    // Delete items from cart
    $scope.deleteItem = function(id) {
      // Update the item with a quanity of 0
      moltin.Cart.Update(id, {quantity: 0}, function(item){
        // Reset the cart on the scope
        moltin.Cart.Contents(function(items){
          $scope.car = items;
          // Reload view with new scope
          $route.reload();
          // Broadcast event to nav controller to update count of items in count
          $rootScope.$broadcast('updateCartCount');
        });
      });
    };

    // Update quantity of item in cart
    $scope.updateItem = function(id, quantity) {
        // Update the item with the new quanity
        moltin.Cart.Update(id, {quantity: quantity}, function(item){
          // Reset the cart on the scope
          moltin.Cart.Contents(function(items){
            $scope.car = items;
            // Reload view with new scope
            $route.reload();
          });
        });
    }

  });
