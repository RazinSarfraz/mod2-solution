(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	
	var addItems=this;
	addItems.array=ShoppingListCheckOffService.showItems();

	addItems.alreadyBought=function(index){
		ShoppingListCheckOffService.removeItem(index);
	}

	addItems.checkList=function(){
		if(addItems.array.length<=0){
			return true;
		}
		else{
			false;
		}
	}


}




AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var alreadyBought =this;
	alreadyBought.array2=ShoppingListCheckOffService.showBoughtItems();
	alreadyBought.checkBoughtSize=function(){
		if (alreadyBought.array2.length>=1) {
			return false;
		}
		else{
			return true;
		}
	}
}


function ShoppingListCheckOffService(){
	var service=this;
	var array=[
	{name:"Chocolate(s)",quantity:4},
	{name:"Biscuit(s)",quantity:5},
	{name:"Chips",quantity:7},
	{name:"Soft Drink(s)",quantity:3},
	{name:"Cookie(s)",quantity:6}
	];
	var array2=[];

	 service.removeItem = function (index) {
	 	var item={
	 	name:array[index].name,
	 	quantity:array[index].quantity
	 	};
	 array2.push(item);
    array.splice(index, 1);
  };

    service.showItems = function () {
    return array;
  };

      service.showBoughtItems = function () {
    return array2;
  };

}

})();
