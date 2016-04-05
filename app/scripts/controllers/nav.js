'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
.controller('NavCtrl', function($scope, $q, MoltinAuth, $window) {

  // Set the width of the window
  var windowWidth = $window.innerWidth;

  // Check if the windowWidth is less than 700px
  if (windowWidth < 700) {
    // If it is then hide the nave on load
    $scope.showNav = false;
  } else {
    // If not then show the nav on load
    $scope.showNav = true;
  }

  // Get Categories promise
  function getCategories() {
    var deferred = $q.defer();
    MoltinAuth.then(function(moltin){
      moltin.Category.List(null, function(categories){
        deferred.resolve(categories);
      });
    });
    return deferred.promise;
  }

  // Resolve the categories promise
  getCategories().then(function(data){
    $scope.categories = data;
  });

});
