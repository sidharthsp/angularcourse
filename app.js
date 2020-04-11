angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController" ,myCtrl)
.controller("AlreadyBoughtController",myCtrl1)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);




myCtrl.$inject=['ShoppingListCheckOffService'];
function myCtrl(ShoppingListCheckOffService){

	var ctrl = this; 
	
	ctrl.tobuy= ShoppingListCheckOffService.getlist();
    ctrl.msg="";
	ctrl.buyItem = function(itemindex){ShoppingListCheckOffService.buyItem(itemindex)}

	
  

}


myCtrl1.$inject=['ShoppingListCheckOffService'];
 function myCtrl1(ShoppingListCheckOffService){
var ctrl1 = this;
ctrl1.alreadybought= ShoppingListCheckOffService.getboughtlist();

 }





function ShoppingListCheckOffService(){
	var service =this;

	var items= [{name:"Cookies",quantity:"10"},
{name:"bags of chips",quantity:"4"}
,{name:"bottles of sugary drinks",quantity:"5"},
{name:"cartons of Milk",quantity:"2"},
{name:"rolls of Toilet Paper",quantity:"10"},]

var itemsbgt = [];


service.buyItem = function(itemindex){
itemsbgt.push(items[itemindex]);
items.splice(itemindex,1);

}



service.getlist = function() {
	return items;
}

service.getboughtlist = function(){
	return itemsbgt;
}

}

