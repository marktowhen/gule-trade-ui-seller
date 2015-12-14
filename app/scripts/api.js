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
            'listWithCondition': 'http://139.129.87.118/api/orders/seller/:mid/:from/:size',
            'accept':'http://139.129.87.118/api/orders/accept',
            'delivered':'http://139.129.87.118/api/orders/logistic'
        },
        'helpCenter':{
            'category' : {
            	'list' : 'http://139.129.87.118/api/help/center/list',
            	'single' : 'http://139.129.87.118/api/help/center/:id',
            	'save' :'http://139.129.87.118/api/help/center/',
            	'refresh' :'http://139.129.87.118/api/help/center/:id',
            	'remove' :'http://139.129.87.118/api/help/center/:id'
            },
            'detail' : {
            	'list' : 'http://139.129.87.118/api/help/center/detail/list/:categoryID',
            	'single' : 'http://139.129.87.118/api/help/center/detail/:id',
            	'save' :'http://139.129.87.118/api/help/center/detail/',
            	'refresh' :'http://139.129.87.118/api/help/center/detail/:id',
            	'remove' :'http://139.129.87.118/api/help/center/detail/:id'
            }
        },
        'goods':{//根据条件查询商品
            'queryGoodsList':'http://139.129.87.118/api/back/goods/list',
			 'queryGoodsList':'http://139.129.87.118/api/back/goods/list',
            'up':'http://139.129.87.118/api/goodsOperation/up/:gid',
            'down':'http://139.129.87.118/api/goodsOperation/down/:gid',
            'brandlist':'http://139.129.87.118/api/goods/brand/list'
        },
        'goodsOperation':{//商品操作
            'merchantlist':'http://139.129.87.118/api/goodsOperation/merchant/list',
            'brandlist':'http://139.129.87.118/api/goodsOperation/brands/',
            'typelist':'http://139.129.87.118/api/goods/type/list',
            'show':'http://139.129.87.118/api/goodsOperation/updateveiw/',
            'save':'http://139.129.87.118/api/goodsOperation/save',
            'update':'http://139.129.87.118/api/goodsOperation/update/'
        },       
  
        'merchant':{//根据条件查询商品
            'queryMerchantList':'http://139.129.87.118/api/merchant/list',
            'getMerchantInfo':'http://139.129.87.118/api/merchant/info/:mid',
            'update':'http://139.129.87.118/api/merchant/updatemerchant',
            'save':'http://139.129.87.118/api/merchant/savemerchant'
        },
        'resource':{
            'ueditor':'http://139.129.87.118/api/resource/ueditor/upload',
            'single':'http://139.129.87.118/api/resource/upload/single'
        }
                
    };
});
