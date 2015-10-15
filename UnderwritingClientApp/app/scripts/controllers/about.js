'use strict';

/**
 * @ngdoc function
 * @name underwritingClientAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the underwritingClientAppApp
 */
angular.module('underwritingClientAppApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.clientData = {};
    $scope.submitForm = function(isValid) {
    	
    	console.log("Hello");
    	if (isValid) {
    		$scope.clientData.name = $scope.name;
    		$scope.clientData.age = $scope.age;
    		$scope.clientData.phone = $scope.phone_number;
    		$scope.clientData.income = $scope.income;
    		$scope.clientData.debt = $scope.debt;
    		$scope.clientData.home = $scope.home_value;
    		$scope.clientData.car = $scope.car_value;
    		$scope.clientData.savings = $scope.savings_investment_value;
    		console.log($scope.clientData);	
    	}
    }
  });
