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
$scope.user = {
  incomeMin: 0,
  incomeMax: 0,
  debtMin: 0,
  debtMax: 0,
  creditScoreMin: 0,
  creditScoreMax: 0,
  ageMin: 18,
  ageMax: 100,
  adminId: "Enter ID Here!",
};

$scope.update = function(user) {

  var validFields = true;

// Check for valid ranges in fields then
// submit information to server
    if($scope.user == undefined) {
      alert("Please review fields to ensure entries");
    }

    if($scope.user.adminId == "Enter ID Here!") {
      validFields = false;
      alert("No Identification provided!");
    }

    if($scope.user.incomeMin > $scope.user.incomeMax) {
      validFields = false;
      alert("Your Annual Income Minimum is greater then your Annual Income Maximum!");
    }

		if($scope.debtMin > $scope.debtMax) {
      validFields = false;
			alert("Your Debt Minimum is greater then your Debt Maximum!");
		} 

		if($scope.creditScoreMin > $scope.creditScoreMax) {
      validFields = false;
			alert("Your Credit Score Maximum is greater then your Annual Income Maximum!");
		}

    if ($scope.ageMin > $scope.ageMax) {
      validFields = false;
      alert("You Age Minimum is greater then your Age Maximum!")
    };        
//If the above checks out, then send off data object
    if (validFields && user != undefined) {
      console.log(user);
        //$http.post(url, data);   
    } else {
      alert("Please review fields to ensure valid entry.")
    }   
    
  
}

});

