'use strict';

/**
 * @ngdoc overview
 * @name underwritingAdminAppApp
 * @description
 * # underwritingAdminAppApp
 *
 * Main module of the application.
 */
angular
  .module('underwritingAdminAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/admin', {
        templateUrl: 'features/Admin/views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });
