'use strict';

/**
 * @ngdoc directive
 * @name storeApp.directive:product
 * @description
 * # product
 */
angular.module('storeApp')
  .directive('product', function () {
    return {
      templateUrl: 'views/productmodule.html',
      replace: true,
      restrict: 'E'
    };
  });
