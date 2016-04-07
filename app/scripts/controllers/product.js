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
  $scope.prod = product;
  $scope.images = product.images;
  $scope.quantity = 1;
  $scope.addStatus = null;
  $scope.message = null;


  $scope.addCart = function() {
    $scope.addStatus = "Adding...";
    if(product.stock_status.value != "Out Of Stock") {
      moltin.Cart.Insert(product.id, $scope.quantity, null, function(cart){
        console.log(cart);
        $timeout(function(){
          $scope.addStatus = null;
        }, 200);
        $scope.message = "Item Added To Basket";
        // Broadcast event to nav controller to update count of items in count
        $rootScope.$broadcast('updateCartCount');
      });
    } else {
      $scope.message = "Sorry, we are out of stock";
      $scope.addStatus = null;
    }
  };

});
