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
        'goods':{//根据条件查询商品
            'queryGoodsList':'http://localhost:8080/api/back/goods/list'
        },
                
    }
});
