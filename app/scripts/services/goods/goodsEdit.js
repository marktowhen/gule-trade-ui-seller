'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('GoodsEditService', function($http,$location,$resource,ApiService){
	   //根据条件查询商品列表
       this.queryGoodsList = function(name,state,offset,size){
            return $http.get(ApiService.api.goods.queryGoodsList, 
                {params:{'name':name, 'state':state,'offset':offset,'size':size}})
       }; 
       this.up = function(){
        return $resource(ApiService.api.goods.up, {});
       };
       this.down = function(){
        return $resource(ApiService.api.goods.down, {});
       };
});