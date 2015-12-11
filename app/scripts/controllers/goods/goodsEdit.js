'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('GoodsEditController', function ($scope,GoodsEditService) {
	//默认查询商品
	GoodsEditService.queryGoodsList($scope.name,$scope.state,0,100)
				.success(function(data){
					$scope.goodslist = data.body;
				});
    //搜索查询商品
    $scope.serch = function(){
    	 GoodsEditService.queryGoodsList($scope.name,$scope.state,0,100)
				.success(function(data){
					$scope.goodslist = data.body;
				});
    };
});