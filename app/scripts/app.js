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
    'storeApp.API',
    'ui.router'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {


    $urlRouterProvider
    .otherwise('/');

    $stateProvider
      .state('store', {
        url: '/',
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
      .state('product', {
        url: '/product/:id',
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product',
        resolve: {
          product: function($q, $stateParams, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin) {
              moltin.Product.Get($stateParams.id, function(product) {
                deferred.resolve(product);
              });
            });
            return deferred.promise;
          },
          moltin: function($q, MoltinAuth) {
            return MoltinAuth;
          }
        }
      })
      .state('category', {
        url: '/category/:id',
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category',
        resolve: {
          category: function($q, $stateParams, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Category.Get($stateParams.id, function(category){
                deferred.resolve(category);
              });
            });
            return deferred.promise;
          },
          products: function($q, $stateParams, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Product.List({category: $stateParams.id}, function(products){
                deferred.resolve(products);
              });
            });
            return deferred.promise;
          }
        }
      })
      .state('collection', {
        url: '/collection/:id',
        templateUrl: 'views/collection.html',
        controller: 'CollectionCtrl',
        controllerAs: 'collection',
        resolve: {
          collection: function($q, $stateParams, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Collection.Get($stateParams.id, function(collection) {
                deferred.resolve(collection);
              });
            });
            return deferred.promise;
          },
          products: function($q, $stateParams, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Product.List({collection: $stateParams.id}, function(products){
                deferred.resolve(products);
              });
            });
            return deferred.promise;
          }
        }
      })
      .state('brand', {
        url: '/brand/:id',
        templateUrl: 'views/brand.html',
        controller: 'BrandCtrl',
        controllerAs: 'brand',
        resolve: {
          brand: function($q, $stateParams, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Brand.Get($stateParams.id, function(brand) {
                deferred.resolve(brand);
              });
            });
            return deferred.promise;
          },
          products: function($q, $stateParams, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Product.List({brand: $stateParams.id}, function(products){
                deferred.resolve(products);
              });
            });
            return deferred.promise;
          }
        }
      })
      .state('cart', {
        url: '/cart',
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
          },
          moltin: function($q, MoltinAuth) {
            return MoltinAuth;
          }
        }
      })
      .state('checkout', {
        url: '/checkout',
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'checkout',
        resolve: {
          checkout: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Cart.Checkout(function(checkout){
                deferred.resolve(checkout);
              });
            });
            return deferred.promise;
          },
          fields: function($q, MoltinAuth) {
            var deferred = $q.defer();
            MoltinAuth.then(function(moltin){
              moltin.Address.Fields(null, null, function(fields){
                deferred.resolve(fields);
              });
            });
            return deferred.promise;
          },
          moltin: function($q, MoltinAuth) {
            return MoltinAuth;
          }
        }
      })
      .state('payment', {
        url: '/payment',
        templateUrl: 'views/payment.html',
        controller: 'PaymentCtrl',
        controllerAs: 'payment',
        resolve: {
          moltin: function($q, MoltinAuth) {
            return MoltinAuth;
          }
        }
      });
  });
