'use strict';

/**
 * @ngdoc overview
 * @name storeApp
 * @description
 * # storeApp
 *
 * Main module of the application.
 */
angular
  .module('storeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'storeApp.API'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store',
        resolve: {
          products: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Product.List(null, function(products){
                deferred.resolve(products);
              });
            });
            return deferred.promise;
          },
          categories: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Category.List(null, function(categories){
                deferred.resolve(categories);
              });
            });
            return deferred.promise;
          },
          collections: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Collection.List(null, function(collection){
                deferred.resolve(collection);
              });
            });
            return deferred.promise;
          },
          brands: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Brand.List(null, function(brand){
                deferred.resolve(brand);
              });
            });
            return deferred.promise;
          }
        }
      })
      .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product',
        resolve: {
          product: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin) {
              moltin.Product.Get($route.current.params.id, function(product) {
                deferred.resolve(product);
              });
            });
            return deferred.promise;
          }
        }
      })
      .when('/category/:id', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category',
        resolve: {
          category: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Category.Get($route.current.params.id, function(category){
                deferred.resolve(category);
              });
            });
            return deferred.promise;
          },
          products: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Product.List({category: $route.current.params.id}, function(products){
                deferred.resolve(products);
              });
            });
            return deferred.promise;
          }
        }
      })
      .when('/collection/:id', {
        templateUrl: 'views/collection.html',
        controller: 'CollectionCtrl',
        controllerAs: 'collection',
        resolve: {
          collection: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Collection.Get($route.current.params.id, function(collection) {
                deferred.resolve(collection);
              });
            });
            return deferred.promise
          },
          products: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Product.List({collection: $route.current.params.id}, function(products){
                deferred.resolve(products);
              });
            });
            return deferred.promise;
          }
        }
      })
      .when('/brand/:id', {
        templateUrl: 'views/brand.html',
        controller: 'BrandCtrl',
        controllerAs: 'brand',
        resolve: {
          brand: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Brand.Get($route.current.params.id, function(brand) {
                deferred.resolve(brand);
              });
            });
            return deferred.promise
          },
          products: function($q, $route, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Product.List({brand: $route.current.params.id}, function(products){
                deferred.resolve(products);
              });
            });
            return deferred.promise;
          }
        }
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart',
        resolve: {
          cart: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Cart.Contents(function(items){
                deferred.resolve(items);
              });
            });
            return deferred.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
