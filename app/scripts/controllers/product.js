'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
.controller('ProductCtrl', function($scope, product, moltin, $timeout, $rootScope) {
  // Return single product
  $scope.prod = product;
  // Bind product images
  $scope.images = product.images;
  // Default product quantity
  $scope.quantity = 1;
  // Status that will change while the product is being added to the cart
  $scope.addStatus = null;
  // Message to be displayed when user try to add a product to the cart
  $scope.message = null;

  // Add product to cart function
  $scope.addCart = function() {
    // Change the status so the user can see the product is being added
    $scope.addStatus = "Adding...";
    // Check whether the product is out of stock
    if(product.stock_status.value !== "Out Of Stock") {
      // Moltin function with the product id and quantity from input box
      moltin.Cart.Insert(product.id, $scope.quantity, null, function(cart){
        // Timeout while the product is being added
        $timeout(function(){
          // Reset adding status
          $scope.addStatus = null;
        }, 200);
        // Bind succes message
        $scope.message = "Item Added To Basket";
        // Broadcast event to nav controller to update count of items in count
        $rootScope.$broadcast('updateCartCount');
      });
    } else {
      // Bind out of stock message
      $scope.message = "Sorry, we are out of stock";
      // Reset adding status
      $scope.addStatus = null;
    }
  };

});
