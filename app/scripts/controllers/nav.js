'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
.controller('NavCtrl', function($scope, $q, MoltinAuth) {

  function getCategories() {
    var deferred = $q.defer();
    MoltinAuth.then(function(moltin){
      moltin.Category.List(null, function(categories){
        deferred.resolve(categories);
      });
    });
    return deferred.promise;
  }

  getCategories().then(function(data){
    $scope.categories = data;
  });

});
