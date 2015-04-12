(function() {
var app = angular.module('gemStore', []);

app.controller('StoreController', function(){
this.products = gem;
});

var gem = [{
	name: 'Azurite',
	price: 110,
	canPurchase: true,
	soldOut: false
},
	{
		name: 'Azurite2',
		price: 110.50,
		canPurchase: true,
		soldOut: false
	}];
})();
