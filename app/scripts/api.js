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
            'listWithCondition': 'http://localhost:8080/api/orders/seller/:mid/:from/:size',
            'accept':'http://localhost:8080/api/orders/accept',
            'delivered':'http://localhost:8080/api/orders/logistic'
        },
        'helpCenter':{
            'category' : {
            	'list' : 'http://localhost:8080/api/help/center/list',
            	'single' : 'http://localhost:8080/api/help/center/:id',
            	'save' :'http://localhost:8080/api/help/center/',
            	'refresh' :'http://localhost:8080/api/help/center/:id',
            	'remove' :'http://localhost:8080/api/help/center/:id'
            },
            'detail' : {
            	'list' : 'http://localhost:8080/api/help/center/detail/list/:categoryID',
            	'single' : 'http://localhost:8080/api/help/center/detail/:id',
            	'save' :'http://localhost:8080/api/help/center/detail/',
            	'refresh' :'http://localhost:8080/api/help/center/detail/:id',
            	'remove' :'http://localhost:8080/api/help/center/detail/:id'
            }
        },
        'goods':{//根据条件查询商品
            'queryGoodsList':'http://localhost:8080/api/back/goods/list',
            'up':'http://localhost:8080/api/goodsOperation/up/:gid',
            'down':'http://localhost:8080/api/goodsOperation/down/:gid'
        }
                
    }
});