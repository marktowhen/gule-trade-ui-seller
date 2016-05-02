'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('GroupGoodsManagerController', function ($scope, $cookies,$state ,GroupGoodsService,ConstantService) {

		var mid = $cookies.get(ConstantService.LOGIN_MERCHANT_ID);
		$scope.ggoods = [];
		var size = 20;
		var hasMore = true;
		GroupGoodsService.list(mid, 0, size)
			.success(function(data){
				if(data.ok){
					for (var i = 0; i < data.body.length; i++) {
						$scope.ggoods .push( data.body[i]);
					}
					if (data.body.length<size) {
						hasMore = false;
					}
					
				}
			}).error(function(data){

			});

		$scope.refresh = function(id){
			$state.go('marketing.group-add',{id:id});
		}
	
	
});