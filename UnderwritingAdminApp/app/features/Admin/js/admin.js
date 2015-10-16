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
try {
  var validFields = true;


// Check for valid ranges in fields then
// submit information to server
    if(document.getElementById("AdminId") === "Enter ID Here!") {
      validFields = false;
      alert("No Identification provided!");
    }
    if($scope.incomeMin > $scope.incomeMax) {
      validFields = false;
      alert("Your Annual Income Minimum is greater then your Annual Income Maximum!");
    }

		if($scope.user.debtMin > $scope.user.debtMax) {
      validFields = false;
			alert("Your Debt Minimum is greater then your Debt Maximum!");
		} 

		if($scope.user.creditScoreMin > $scope.user.creditScoreMax) {
      validFields = false;
			alert("Your Credit Score Maximum is greater then your Annual Income Maximum!");
		}

    if ($scope.user.ageMin > $scope.user.ageMax) {
      validFields = false;
      alert("You Age Minimum is greater then your Age Maximum!")
    };        
//If the above checks out, then send off data object
    if (validFields) {
      console.log(user);
        //$http.post(url, data);   
    };     
    
  } catch(err) {
    alert("Please review all fields for valid respones");
  }
}

});

