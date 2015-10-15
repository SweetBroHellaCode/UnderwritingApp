'use strict'; 

/**
 * @ngdoc function
 * @name underwritingAdminAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the underwritingAdminAppApp
 */
angular.module('underwritingAdminAppApp')
  .controller('AdminCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$scope.update = function(user) {
        console.log("Hello");
       $scope.master = angular.copy(user);
      };
  
  });

