
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
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