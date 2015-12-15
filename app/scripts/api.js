'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('ApiService', function () {
    this.api = {
        
        'order':{
            'listWithCondition': 'http://101.200.215.25/api/orders/seller/:mid/:from/:size',
            'accept':'http://101.200.215.25/api/orders/accept',
            'delivered':'http://101.200.215.25/api/orders/logistic'
        },
        'helpCenter':{
            'category' : {
            	'list' : 'http://101.200.215.25/api/help/center/list',
            	'single' : 'http://101.200.215.25/api/help/center/:id',
            	'save' :'http://101.200.215.25/api/help/center/',
            	'refresh' :'http://101.200.215.25/api/help/center/:id',
            	'remove' :'http://101.200.215.25/api/help/center/:id'
            },
            'detail' : {
            	'list' : 'http://101.200.215.25/api/help/center/detail/list/:categoryID',
            	'single' : 'http://101.200.215.25/api/help/center/detail/:id',
            	'save' :'http://101.200.215.25/api/help/center/detail/',
            	'refresh' :'http://101.200.215.25/api/help/center/detail/:id',
            	'remove' :'http://101.200.215.25/api/help/center/detail/:id'
            }
        },
        'goods':{//根据条件查询商品
            'queryGoodsList':'http://101.200.215.25/api/back/goods/list',
			 'queryGoodsList':'http://101.200.215.25/api/back/goods/list',
            'up':'http://101.200.215.25/api/goodsOperation/up/:gid',
            'down':'http://101.200.215.25/api/goodsOperation/down/:gid',
            'brandlist':'http://101.200.215.25/api/goods/brand/list'
        },
        'goodsOperation':{//商品操作
            'merchantlist':'http://101.200.215.25/api/goodsOperation/merchant/list',
            'brandlist':'http://101.200.215.25/api/goodsOperation/brands/',
            'typelist':'http://101.200.215.25/api/goods/type/list',
            'show':'http://101.200.215.25/api/goodsOperation/updateveiw/',
            'save':'http://101.200.215.25/api/goodsOperation/save',
            'update':'http://101.200.215.25/api/goodsOperation/update/'
        },       
  
        'merchant':{//根据条件查询商品
            'queryMerchantList':'http://101.200.215.25/api/merchant/list',
            'getMerchantInfo':'http://101.200.215.25/api/merchant/info/:mid',
            'update':'http://101.200.215.25/api/merchant/updatemerchant',
            'save':'http://101.200.215.25/api/merchant/savemerchant'
        },
        'resource':{
            'ueditor':'http://101.200.215.25/api/resource/ueditor/upload',
            'single':'http://101.200.215.25/api/resource/upload/single'
        }
                
    };
});
