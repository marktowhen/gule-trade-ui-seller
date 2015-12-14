'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('MerchantEditController', function ($scope,$state,$route,$location,MerchantEditService) {
	var mid = $state.params.mid;//获取商家ID
	if(mid){
		MerchantEditService.getMerchantInfo(mid)
				.success(function(data){
					var r = data.body;
					$scope.m.merchantName = r.merchantName;
				});
	}
});