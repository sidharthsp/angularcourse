(function(){

angular.module('public')
.service('signUpService' , signUpService);


signUpService.$inject=['$http'];
function signUpService($http){
var service = this;
service.db = {};


service.signup = function (O) {




 var response = $http({
    method:"GET",
    url:("https://shielded-hamlet-49173.herokuapp.com/menu_items/"+ O +".json"),

 });







return response;





}
}



  })();
