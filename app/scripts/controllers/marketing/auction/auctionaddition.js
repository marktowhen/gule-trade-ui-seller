'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('AuctionAdditionController', function ($state,$stateParams,$scope,$cookies,AuctionGoodsService, ConstantService,WapGoodsOperationService) {

	var notEmpty = function(str){
	 	if (str==null||str==undefined||str=='') {
	 		return false;
	 	}
	 	return true;
	 }
	var mid = $cookies.get(ConstantService.LOGIN_MERCHANT_ID);

	$scope.typeList = [{'id':'ON_TIME','name':'到期结束'},{'id':'DELAY','name':'当到达截止时间前有人出价,延迟结束'}]

	var id = $stateParams.id;
	if(notEmpty(id)){
		AuctionGoodsService.single(id).success(function(data){
			if(data.ok){
				$scope.auctionGoods = data.body;
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

	$scope.submit = function(auctionGoods){
		auctionGoods.startTime = $("#startTime").val();
		auctionGoods.endTime = $("#endTime").val();

		if (notEmpty(id)) {
			AuctionGoodsService.refresh(auctionGoods)
				.success(function(data){
					if (data.ok) {
						alert( "成功");
						$state.go('marketing.auction-mngt');
					}else{
						alert(data.message);
					}
				})
			 	.error(function(data){
		 			alert( "网络异常,请稍后重试");
			 	});
		}else{
			AuctionGoodsService.save(auctionGoods)
				.success(function(data){
					if (data.ok) {
						alert( "成功");
						$state.go('marketing.auction-mngt');
					}else{
						alert(data.message);
					}
				})
			 	.error(function(data){
		 			alert( "网络异常,请稍后重试");
			 	});
		}
		
	 };


	 
});