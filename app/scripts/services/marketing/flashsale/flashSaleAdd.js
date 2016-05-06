'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
 shopbackApp.service('FlashSaleService', function($http,$location,$state,$resource,ApiService){
 	this.save=function(flashsale){
 		return $http.post(ApiService.api.marketing.flashsale.save,flashsale);
 	};
 	this.single = function(id){
 		return $http.get(ApiService.api.marketing.flashsale.single,{params:{'id':id}});
 	};
 	this.refresh = function(flashsale){
 		return $http.put(ApiService.api.marketing.flashsale.refresh,flashsale)
 	};
 })