'use strict';

/**
 * @ngdoc overview
 * @name underwritingClientAppApp
 * @description
 * # underwritingClientAppApp
 *
 * Main module of the application.
 */
angular
  .module('underwritingClientAppApp', [
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
        templateUrl: 'features/landing/views/landing.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/inputform', {
        templateUrl: 'features/inputform/views/inputform.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
