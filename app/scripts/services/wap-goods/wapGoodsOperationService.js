'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('WapGoodsOperationService', function($http,$location,$resource,$state,ApiService){
	  
       this.thisMerchant  = function (sellerId){
    	  	return  $http.get(ApiService.api.wapgoods.thisMerchant.replace(":sellerId",sellerId),
                        {'Content-Type': 'application/json;charset=UTF-8'}); 
    	  	};
    	  	
    	 this.types  = function (sellerId){
    	  	return  $http.get(ApiService.api.wapgoods.types,
                        {'Content-Type': 'application/json;charset=UTF-8'}); 
    	  	};
    	  	this.save= function (goods){
    	  		$http.post(ApiService.api.wapgoods.save,
        				goods,
            	 		{'Content-Type': 'application/json;charset=UTF-8'})
	         			.success(function(response){
	         				if(response.code==200){
	         					alert("添加商品成功......");
	         				}else{
	         					alert("添加商品异常....."+response.message);
	         				}
	         			}).error(function(response){
							alert("添加商品失败:"+response);
						});
    	  	}
});