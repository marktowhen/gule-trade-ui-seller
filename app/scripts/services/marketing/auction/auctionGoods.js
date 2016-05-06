'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('AuctionGoodsService', function ($http, $location , ApiService) {
    
   this.save = function(auction){
   		return $http.post(ApiService.api.marketing.auction.goods.save, auction);
   }

   this.list = function(mid, from, size){
        return $http.get(ApiService.api.marketing.auction.goods.list ,{params:{'offset':from,'size':size}});
    };

    this.single = function(id){
    	return $http.get(ApiService.api.marketing.auction.goods.single,{params:{'id':id}});
    }
    this.refresh = function(groupGoods){
        return $http.put(ApiService.api.marketing.auction.goods.refresh ,groupGoods);
    };
    this.list = function(mid, from, size,name){
        return $http.get(ApiService.api.marketing.auction.goods.list ,{params:{'mid':mid,'offset':from,'size':size,'name':name}});
    };
    this.count = function(mid, from, size,name){
        return $http.get(ApiService.api.marketing.auction.goods.count ,{params:{'mid':mid,'name':name}});
    };

   
})