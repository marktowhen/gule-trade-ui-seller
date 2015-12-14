'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('GoodsOperationService', function ($http, $location,ApiService) {
	//根据商品名模糊查询商品
	  	this.merchantlist  = function (){

    	  	return  $http.get(ApiService.api.goodsOperation.merchantlist,
                        {'Content-Type': 'application/json;charset=UTF-8'}); 
    	  	};
        this.brandAlllist  = function (){
            return  $http.get("http://localhost:8080/api/goods/brand/list",
                        {'Content-Type': 'application/json;charset=UTF-8'}); 
            };
    	 this.brandlist  = function (mid){
    	  	return  $http.get(ApiService.api.goodsOperation.brandlist+mid,
                        {'Content-Type': 'application/json;charset=UTF-8'}); 
    	  	};
    	  	//获取类别
        this.typelist= function(){
            return $http.get(ApiService.api.goodsOperation.typelist,
            	 		{'Content-Type': 'application/json;charset=UTF-8'});
        };

        //商品回显--修改
        this.goodsVO  = function(gid){
            return $http.get(ApiService.api.goodsOperation.show+gid,
                        {'Content-Type': 'application/json;charset=UTF-8'});
        };

        this.saveGoods = function (goods){
        	/*var parmas ={'mid':goods.m.mid,'bid':goods.b.bid,'name':goods.name,'code':goods.code,
        				'tid':goods.t.tid,'price':goods.price,'promotionPrice':goods.promotionPrice,
        				'state':goods.state,'upTime':goods.upTime,'downTime':goods.downTime,
        				'count':goods.count,'pro_start':goods.pro_start,'pro_end':goods.pro_end,
        				'pro_flag':goods.pro_flag,'postage':goods.postage,
        				'subVolumeType':goods.subVolumeType,'barCode':goods.barCode,
        				'goodsDesc':goods.goodsDesc,'goodsTitle':goods.goodsTitle,
        				'thumbpath1':p1,'thumbpath2':p2,'thumbpath3':p3,'thumbpath4':p4,
        				'thumbpath5':p5,'content':content,'standardNo':goods.standardNo,
        				'shelfLife':goods.shelfLife,'approveNo':goods.approveNo,
        				'usage':goods.usage,'commendedUser':goods.commendedUser,
        				'notCommendedUser':goods.notCommendedUser,'ingredients':goods.ingredients,
        				'foodAdditives':goods.foodAdditives,'specifications':goods.specifications,
        				'functions':goods.functions,'ingredient':goods.ingredient,'note':goods.note,
        				'storageMethods':goods.storageMethods,'isGiftBox':goods.isGiftBox,
        				'ProductionDate':goods.ProductionDate,'weight':goods.weight,'unit':goods.unit,
        				'factoryName':goods.factoryName,'factoryAddr':goods.factoryAddr,
        				'factoryTel':goods.factoryTel};*/

         			$http.post(ApiService.api.goodsOperation.save,
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
        };

         this.updateGoods = function (goods){
                    $http.put(ApiService.api.goodsOperation.update+goods.gid,
                        goods,
                        {'Content-Type': 'application/json;charset=UTF-8'})
                        .success(function(response){
                            if(response.code==200){
                                alert("修改商品成功......");
                            }else{
                                alert("修改商品异常....."+response.message);
                            }
                        }).error(function(response){
                            alert("修改商品失败:"+response);
                        });
        };
});