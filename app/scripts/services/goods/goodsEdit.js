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
       this.queryGoodsList = function(name,offset,size){
            return $http.get(ApiService.api.goods.queryGoodsList, 
                {params:{'name':name,'offset':offset,'size':size}})
       }; 
       this.up = function(id){
         return $http.put(ApiService.api.goods.up+id,{'Content-Type': 'application/json;charset=UTF-8'})
               .success(function(response){
                        if(response.code==200){
                          alert("上架成功......");  
                        }else{
                          alert("上架失败....."+response.message);
                        }
                      }).error(function(response){
                    alert("上架失败:"+response.message);
                  });
             };
       this.down = function(id){
         return $http.put(ApiService.api.goods.down+id,{'Content-Type': 'application/json;charset=UTF-8'})
               .success(function(response){
                        if(response.code==200){
                          alert("下架成功......");  
                        }else{
                          alert("下架失败....."+response.message);
                        }
                      }).error(function(response){
                    alert("下架失败:"+response.message);
                  });
             };
       
});