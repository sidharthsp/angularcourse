(function () {

angular.module('data')
.service('MenuDataService' , MenuDataService)
.constant("ApiBasePath" , "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject=['$http','ApiBasePath','$q'];
function MenuDataService($http,ApiBasePath,$q){

  var service = this;
//METHOD ONE --------------------------------------
  service.getAllCategories= function () {

    var response = $http({
      method : 'GET',
      url : (ApiBasePath + '/categories.json')
    });

    return response;

  }
//-------------------------------------------------
//SECOND METHOD------------------------------------
service.getItemsForCategory = function(categoryShortName){


  var promise = $http({
    method : 'GET',
    url : (ApiBasePath + '/menu_items.json'),
    params:{
            category : categoryShortName,
            },
  });


    return promise; 





}
//---------------------------------------------
}


})();
