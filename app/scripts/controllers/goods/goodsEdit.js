'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('GoodsEditController', function ($scope,$location,GoodsEditService) {
	$scope.name = '';
	//默认查询商品
	$scope.state = '1';
	GoodsEditService.queryGoodsList('',0,100)
				.success(function(data){
					$scope.goodslist = data.body;
				});
    //搜索查询商品
    $scope.serch = function(){
    	 GoodsEditService.queryGoodsList($scope.name,0,100)
				.success(function(data){
					$scope.goodslist = data.body;
				});
    };
    //商品上架
  $scope.up =function(id){
     GoodsEditService.up(id);
  };
   //商品下架
  $scope.down =function(id){ 
     GoodsEditService.down(id);
  };
});