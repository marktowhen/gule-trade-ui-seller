'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('FlashSaleManagerController', function ($scope,$timeout,$state,$cookies,FlashSaleManagerService,ConstantService,WapGoodsOperationService,ApiService){ 
	var mid = $cookies.get(ConstantService.LOGIN_MERCHANT_ID);
	$scope.FlashSaleShow = [];
	$scope.size = 10;
	$scope.shows = 2;
	$scope.hasMore = true;
	$scope.$watch('$viewContentLoaded', function() { 
		 	
		 $scope.list($scope.size,$scope.shows);
		 	
	});
	$scope.list = function(size,shows){
	 	FlashSaleManagerService.list(mid,$scope.FlashSaleShow.length,size).success(function(data){
			if(data.ok){
				for(var i=0;i<data.body.length;i++){

					$scope.FlashSaleShow.push(data.body[i]);
				}
				if(data.body.length<size){
					$scope.hasMore = false;
				}
			}
		})
	 }
	 $scope.refresh = function(id){
	 	$state.go('marketing.flash-sale-add',{id:id});
	 }

	

})