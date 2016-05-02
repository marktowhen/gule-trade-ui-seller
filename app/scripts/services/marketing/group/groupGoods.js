'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('GroupGoodsService', function ($http, $location , ApiService) {
    
   
    this.save = function(groupGoods){
        return $http.post(ApiService.api.marketing.groupGoods.save ,groupGoods);
    };

    this.list = function(mid, from, size){
        return $http.get(ApiService.api.marketing.groupGoods.list ,{params:{'mid':mid,'offset':from,'size':size}});
    };

    this.single = function(id){
    	return $http.get(ApiService.api.marketing.groupGoods.single,{params:{'ggid':id}});
    }
    this.refresh = function(groupGoods){
        return $http.put(ApiService.api.marketing.groupGoods.refresh ,groupGoods);
    };
   
})