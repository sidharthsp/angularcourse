(function () {

angular.module('MenuApp')
.controller('categoriesComponentController', categoriesComponentController)
.controller('itemsComponentController' , itemsComponentController);

//===============================================================
categoriesComponentController.$inject=['MenuDataService','list'];
function categoriesComponentController(MenuDataService,list){

  var ctrl1 = this;
  ctrl1.categories=[];
  ctrl1.test = "NOT HERRRR";

ctrl1.categories = list.data;

// console.log(ctrl1.categories);
// ctrl1.categories =list;

// console.log(ctrl1.categories);


  //
  // ctrl1.$onInit = function () {
  //   promise = MenuDataService.getAllCategories();
  //
  //   promise.then(function(response){
  //     ctrl1.categories = response.data;
  //     console.log(ctrl1.categories);
  //   });
  //
  // }

}

//===============================================================

itemsComponentController.$inject=['item'];
function itemsComponentController(item){
var ctrl2 = this;
ctrl2.itemlist=[];

ctrl2.itemlist=item.data.menu_items;
console.log(ctrl2.itemlist);

}

})();
