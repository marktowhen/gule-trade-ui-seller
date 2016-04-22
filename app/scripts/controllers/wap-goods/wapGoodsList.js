'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('WapGoodsListController', function ($scope, $state,$location,$cookies,ConstantService,
	WapGoodsOperationService) {
	var name ="";
	 WapGoodsOperationService.allList(name).success(function(data){
	 				$scope.goods = data.body;
	 				//console.log($scope.goods);
	 });


	$scope.query =function(){
		 WapGoodsOperationService.allList($scope.goodsname).success(function(data){
	 				$scope.goods = data.body;
	 				//console.log($scope.goods);
	 });
	};


	 $scope.delGoods = function (id){
	 	WapGoodsOperationService.del(id);
	 };

	 $scope.toUpdate = function(id){
			$state.go('station-goods.wap-goods-update',{gid:id});		
	 };
});