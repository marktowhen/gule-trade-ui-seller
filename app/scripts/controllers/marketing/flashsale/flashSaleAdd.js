'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 shopbackApp.controller('FlashSalController', function ($scope,$timeout,$state,$location,$stateParams,$cookies,FlashSaleService,ConstantService,WapGoodsOperationService,ApiService) {
 	var notnull = function(str){
 		if(str==null || str==undefined ||str==''){
 			return false;
 		}
 		return true;
 	}
 	var id=$stateParams.id;
 	if(notnull(id)){
 		FlashSaleService.single(id).success(function(data){
 			if(data.ok){
 				$scope.flashsale=data.body;
 				$scope.listSku($scope.flashsale.gid);
 			}else{
 				alert(data.message);
 			}
 		})
 	}
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
	$scope.save = function(flashsale){
		flashsale.activityTime=$("#time").val();
		if(notnull(id)){
			if($scope.flashsale.shows==1){
                $scope.flashsale.shows="true";
            }else{
                $scope.flashsale.shows="false";
            };
			FlashSaleService.refresh(flashsale).success(function(data){
				if(data.ok){
					alert("修改成功");
					/*$location.path("/flash-sale-list");*/

				}else{
					alert("修改失败");
				}
			})
		}else{
			if($scope.flashsale.shows==1){
                $scope.flashsale.shows="true";
            }else{
                $scope.flashsale.shows="false";
            };
			FlashSaleService.save(flashsale).success(function(data){
			if(data.ok){
				alert("保存成功");
				/*$location.path("/flash-sale-list");*/
			}else{
				alert(data.message);
			}
		})
		}
		
	}
 })