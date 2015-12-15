'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('BrandService', function($http,$location,$state,$resource,ApiService){
	
	 this.brandByMidlist  = function (mid){
            return  $http.get(ApiService.api.brand.brandlist+mid,
                        {'Content-Type': 'application/json;charset=UTF-8'}); 
         };
      this.saveBrand  = function (brand){
            return  $http.post(ApiService.api.brand.save,
            			brand,
                        {'Content-Type': 'application/json;charset=UTF-8'})
            			.success(function(response){
	         				if(response.code==200){
	         					alert("添加品牌成功......");  
	         				}else{
	         					alert("添加品牌异常....."+response.message);
	         				}
	         			}).error(function(response){
							alert("添加品牌失败:"+response);
						});
        };


        this.updateBrand  = function (brand){
            return  $http.post(ApiService.api.brand.update+brand.id,
            			brand,
                        {'Content-Type': 'application/json;charset=UTF-8'})
            			.success(function(response){
	         				if(response.code==200){
	         					alert("修改品牌成功......");  
	         				}else{
	         					alert("修改品牌异常....."+response.message);
	         				}
	         			}).error(function(response){
							alert("修改品牌失败:"+response);
						});
        };



      this.getById = function (bid){
      	return  $http.get(ApiService.api.brand.getbyid+bid,
                        {'Content-Type': 'application/json;charset=UTF-8'}); 
      };
       
});