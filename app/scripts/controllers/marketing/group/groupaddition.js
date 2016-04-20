'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('GroupAdditionController', function ($scope,$cookies, ConstantService,GoodsEditService) {

	GoodsEditService.queryGoodsList("",1,"","",0,100)
	.success(function(data){
		if(data.ok){
			$scope.goodslist = data.body;
		}
	}).error(function(data){

	});

	$scope.pricesettings = [];
	$scope.addpricesetting = function(){
		var pricesetting = {};
		pricesetting.number = 0;
		pricesetting.price = 0;
		$scope.pricesettings.push(pricesetting);
	};
	$scope.removepricesetting = function(setting){
		$scope.pricesettings.splice($scope.pricesettings.indexOf(setting), 1);
	};

	$scope.submit = function(counpon){
	 	$scope.submiting = true;
	 	CashcounponService.save(counpon, counpon.amount)
	 		.success(function(data){
		 		$scope.submiting = false;
		 		if(data.code==200){
		 			alert("成功");
		 		}else{
		 			alert(data.message);
		 		}
		 	})
		 	.error(function(data){
		 		$scope.submiting = false;
	 			alert( "网络异常,请稍后重试");
		 	});
	 };
});