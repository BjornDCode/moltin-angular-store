'use strict';

/**
 * @ngdoc service
 * @name testStoreApp.moltin
 * @description
 * # moltin
 * Service in the testStoreApp.
 */
angular.module('storeApp.API', [])
  .factory('MoltinAuth', function ($q) {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: 'wCjk1JJ0qV8lR3sktcwwpyG7lq4DZf0pUTzPxuSv'});
    moltin.Authenticate(function(){
      deferred.resolve(moltin);
    });
    return deferred.promise;
  });
