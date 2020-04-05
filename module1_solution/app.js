
(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchController', lunchController);

lunchController.$inject = ['$scope'];
function lunchController($scope) {
  $scope.input = "";
  $scope.Msg= "";

  $scope.showMsg = function () {
if ($scope.input==""){$scope.Msg= "Please Enter data first!!!";}

else{

if ($scope.input.split(",").length <= 3)
	{
		$scope.Msg= "	Enjoy!!";
}

else {$scope.Msg= "Too Much!!"}





}

  
}


}

})();