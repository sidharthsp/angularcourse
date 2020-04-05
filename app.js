(function(){


"use strict";

angular.module("NameCalculator",[])
.controller('NameCalculatorController', function($scope){

$scope.name ="";
$scope.tv= 0;

$scope.displayN = function(){
	var totalNameValue = calculateNumericForString($scope.name); //get the total value
	$scope.tv= totalNameValue;
};

function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }



})




})();