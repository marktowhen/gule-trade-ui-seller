'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('MerchantEditController', function ($scope,$location,MerchantEditService) {
	$scope.name = '';
	//默认查询商家
	MerchantEditService.queryMerchantList('',0,100)
				.success(function(data){
					$scope.merchantlist = data.body;
				});
    //搜索查询商家
    $scope.serch = function(){
    	 MerchantEditService.queryMerchantList($scope.name,0,100)
				.success(function(data){
					$scope.merchantlist = data.body;
				});
    };
   /* //商品上架
  $scope.up =function(id){
     GoodsEditService.up().get({gid:id},  function(data){
     		$location.path("/seller-center/goods/list");
            alert("上架成功！");
           }, 
        function(data){
        	$location.path("/seller-center/goods/list");
            alert("上架失败！");
          });
  };
   //商品下架
  $scope.down =function(id){ 
     GoodsEditService.down().get({gid:id},  function(data){
            $location.path("/seller-center/goods/list");
            alert("下架成功！");
           }, 
        function(data){
        	$location.path("/seller-center/goods/list");
            alert("下架失败！");
          });
  };*/
});