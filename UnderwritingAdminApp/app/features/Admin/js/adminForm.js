angular.module('formAdmin', [])
    .controller('AdminFormCtrl', ['$scope', function($scope) {
      

      $scope.update = function(user) {
        console.log("Hello");
       $scope.master = angular.copy(user);
      };


      $scope.reset();
    }]);