'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('GroupAdditionController', function ($scope,$cookies, ConstantService,WapGoodsOperationService,GroupService) {
	var mid = $cookies.get(ConstantService.LOGIN_MERCHANT_ID);
	WapGoodsOperationService.allList('',mid,0,200)
	.success(function(data){
		if(data.ok){
			$scope.goodslist = data.body;
		}
	}).error(function(data){

	});

	$scope.listSku = function(gid){
		WapGoodsOperationService.listSku(gid)
		.success(function(data){
			if (data.ok) {
				$scope.skulist = data.body;
			}
		})
	}

	$scope.pricesetting = {};
	$scope.pricesetting.number = 0;
	$scope.pricesetting.price = 0;

	$scope.submit = function(grouGoods){
		grouGoods.minpeople = $scope.pricesetting.number;
		$scope.pricesetting.floor = $scope.pricesetting.number;
		$scope.pricesetting.ceiling = $scope.pricesetting.number;
		var priceSettings = [];
		priceSettings.push($scope.pricesetting);
		grouGoods.priceSettings = priceSettings;
		grouGoods.duration = getDuration();
		grouGoods.deadline = $("#pro_end").val();
		GroupService.save(grouGoods)
			.success(function(data){
				if (data.ok) {
					alert( "成功");
				}else{
					alert(data.message);
				}
			})
		 	.error(function(data){
		 		$scope.submiting = false;
	 			alert( "网络异常,请稍后重试");
		 	});
	 };

	 var getDuration = function(){
	 	return $scope.groupGoods.day * 3600 *24 +$scope.groupGoods.hour*3600 +$scope.groupGoods.minute*60
	 }
});