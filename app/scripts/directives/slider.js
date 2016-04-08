'use strict';

/**
 * @ngdoc directive
 * @name storeApp.directive:slider
 * @description
 * # slider
 */
angular.module('storeApp')
  // Slider module
  .directive('slider', function () {
    return {
      templateUrl: 'views/slider.html',
      restrict: 'AE',
      replace: true,
      scope: {
        images: '='
      },
      link: function postLink(scope, element, attrs) {
        // Image index
        scope.currentIndex = 0;
        // Necxt function
        scope.next = function() {
          scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
        };
        // Previous function
        scope.prev = function() {
          scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
        };
        // Update the slider based on image index
        scope.$watch('currentIndex', function(){
          // Hide all images
          scope.images.forEach(function(image){
            image.visible = false;
          });
          // Show one image based on image index
          scope.images[scope.currentIndex].visible = true;
        });
      }
    };
  });
