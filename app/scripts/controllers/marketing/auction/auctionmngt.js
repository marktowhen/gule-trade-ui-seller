'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('AuctionManagerController', function ($scope, $cookies,$state ,AuctionGoodsService,ConstantService) {

		var mid = $cookies.get(ConstantService.LOGIN_MERCHANT_ID);
		$scope.ggoods = [];
		$scope.condition = {'name':''};
		var size = 20;
		var hasMore = true;
		$scope.$watch('$viewContentLoaded', function() {  
       	   $scope.research();
	        
	    });  
		var list = function(mid, name, from, size){
			AuctionGoodsService.list('', from, size,name)
			.success(function(data){
				if(data.ok){
					for (var i = 0; i < data.body.length; i++) {
						$scope.ggoods .push( data.body[i]);
					}
					if (data.body.length<size) {
						hasMore = false;
					}
					
				}
			})
		}

		var count = function(mid, goodsName){
			AuctionGoodsService.count(mid, goodsName)
				.success(function(data){
					$scope.amount = data.body;
				})
		}

		$scope.research = function(){
			$scope.ggoods = [];
			list(mid,$scope.condition.name,0 ,size);
			count(mid, $scope.condition.name);
		}

		$scope.refresh = function(id){
			$state.go('marketing.auction-add',{id:id});
		}

		$scope.listMore = function(){
			list(mid,$scope.condition.name,$scope.ggoods.length ,size);
		}

		
	
	
});