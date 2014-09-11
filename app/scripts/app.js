(function (window) {
  'use strict';
  window.app = angular.module('portfolioApp', ['ngRoute','ngSanitize', 'duScroll', 'ui.bootstrap']);

  window.app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './views/main.html',
        controller: 'mainCtrl'
      })
      .when('/apps', {
        templateUrl: './views/application.html',
        controller: 'applicationCtrl'
      })
      .when('/ecommerce', {
        templateUrl: './views/ecom.html',
        controller: 'ecommerceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

}(window));