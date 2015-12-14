'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('MerchantEditService', function($http,$location,$resource,ApiService){
	   //根据ID查询商家信息
       this.getMerchantInfo = function(mid){
            return $http.get(ApiService.api.merchant.getMerchantInfo.replace(":mid", mid))
       }; 
});