(function () {

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController' , NarrowItDownController)
.service('MenuSearchService' ,MenuSearchService)
.directive('foundItems',foundItems)
.constant('basePath', 'https://davids-restaurant.herokuapp.com/menu_items.json');

function foundItems(){
  var ddo = {
    templateUrl:'foundItems.html',
    scope :{
      onRemove:'&',
      items:'=',

    }

  }

  return ddo;
}

//CONTROLLER MAIN-------------------------
NarrowItDownController.$inject =['MenuSearchService','$q'];
function NarrowItDownController(MenuSearchService){
 var ctrl = this;

 ctrl.searchTerm = "";
ctrl.found=[];
ctrl.msg="";
//---------------------------------------------------------------------
 ctrl.getItems = function(searchTerm){

var promise =MenuSearchService.getMatchedMenuIems(searchTerm);
ctrl.found=[];
promise.then(function (response) {
  var a = response.data.menu_items;
  for (var i = 0; i < a.length; i++) {
   var b =a[i].description;

  if (((a[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()))!==-1 ) && (searchTerm !=="")   ){


   ctrl.found.push(a[i]);

   }

 }

 if (ctrl.found.length===0){ctrl.msg="Nothing Found"}
 else {ctrl.msg=""}



})

};
//------------------------------------------------------------------

ctrl.remove= function(index){
  ctrl.found.splice(index,1);
}
//--------------------

 }





//MENUSEARCHSERVICE--------------------------------
MenuSearchService.$inject=['$http','basePath'];
function MenuSearchService($http,basePath){
var service = this;

service.getMatchedMenuIems = function(){
var response = $http({
      method:'GET',
      url:(basePath),

});
return response;

}



}

})();
