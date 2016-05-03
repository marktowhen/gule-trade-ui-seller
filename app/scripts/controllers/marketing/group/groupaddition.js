'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('GroupAdditionController', function ($state,$stateParams,$scope,$cookies,GroupGoodsService, ConstantService,WapGoodsOperationService,GroupService) {

	var notEmpty = function(str){
	 	if (str==null||str==undefined||str=='') {
	 		return false;
	 	}
	 	return true;
	 }
	var mid = $cookies.get(ConstantService.LOGIN_MERCHANT_ID);

	var id = $stateParams.id;
	if(notEmpty(id)){
		GroupGoodsService.single(id).success(function(data){
			if(data.ok){
				$scope.groupGoods = data.body;
				$scope.pricesetting = {'number':$scope.groupGoods.priceSettings[0].floor,
										'price':$scope.groupGoods.priceSettings[0].price};
				$scope.listSku($scope.groupGoods.gid);

		 		$scope.groupGoods.day = getDay($scope.groupGoods.duration);
		 		$scope.groupGoods.hour = getHour($scope.groupGoods.duration);
		 		$scope.groupGoods.minute = getMinute($scope.groupGoods.duration);
		 		if($scope.groupGoods.show){
		 			$scope.groupGoods.show = 'true';
		 		}else{
		 			$("#notShow").attr('checked',checked);
		 		} 
			 	
			}else{
				alert(data.message);
			}
		})
	}

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
		if (notEmpty(id)) {
			GroupGoodsService.refresh(grouGoods)
				.success(function(data){
					if (data.ok) {
						alert( "成功");
						$state.go('marketing.group-mngt');
					}else{
						alert(data.message);
					}
				})
			 	.error(function(data){
			 		$scope.submiting = false;
		 			alert( "网络异常,请稍后重试");
			 	});
		}else{
			GroupGoodsService.save(grouGoods)
				.success(function(data){
					if (data.ok) {
						alert( "成功");
						$state.go('marketing.group-mngt');
					}else{
						alert(data.message);
					}
				})
			 	.error(function(data){
			 		$scope.submiting = false;
		 			alert( "网络异常,请稍后重试");
			 	});
		}
		
	 };

	 var getDuration = function(){
	 	var second = 0;
	 	if (notEmpty($scope.groupGoods.day)) {
	 		second+=$scope.groupGoods.day* 3600 *24;
	 	}
	 	if (notEmpty($scope.groupGoods.hour)) {
	 		second+=$scope.groupGoods.hour*3600;
	 	}
	 	if (notEmpty($scope.groupGoods.minute)) {
	 		second+=$scope.groupGoods.minute*60;
	 	}

	 	return   second;
	 }

	 var getDay = function(second){
			return parseInt(second/(60*60*24));
	}
	var getHour = function(second){
		return parseInt((second-getDay(second)*60*60*24)/(60*60));
	}
	var getMinute = function(second){
		return parseInt((second-getDay(second)*60*60*24-getHour(second)*60*60)/60);
	}

	 
});