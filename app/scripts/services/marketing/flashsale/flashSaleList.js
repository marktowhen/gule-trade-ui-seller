'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
  shopbackApp.service('FlashSaleManagerService', function($http,$location,$state,$resource,ApiService){
  		this.list = function(mid,from,size){
  			return $http.get(ApiService.api.marketing.flashsale.list,{params:{'mid':mid,'offset':from,'size':size}})
  		}
  })

