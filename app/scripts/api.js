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
            'listWithCondition': 'http://localhost:8080/api/orders/seller/:from/:size',
            'accept':'http://localhost:8080/api/orders/acception',
            'delivered':'http://localhost:8080/api/orders/logistic'
        },
        'refund':{
            'listWithCondition': 'http://localhost:8080/api/refund/seller/:from/:size',
            'accept':'http://localhost:8080/api/refund/acception',
            'deny':'http://localhost:8080/api/refund/denial',
            'done':'http://localhost:8080/api/refund/completion'
        },
        'helpCenter':{
            'category' : {
            	'list' : 'http://localhost:8080/api/information/help/center/category/list',
            	'single' : 'http://localhost:8080/api/information/help/center/category/:id',
            	'save' :'http://localhost:8080/api/information/help/center/category/',
            	'refresh' :'http://localhost:8080/api/information/help/center/category/:id',
            	'remove' :'http://localhost:8080/api/information/help/center/category/:id'
            },
            'detail' : {
            	'list' : 'http://localhost:8080/api/information/help/center/detail/list/:categoryID',
            	'single' : 'http://localhost:8080/api/information/help/center/detail/:id',
            	'save' :'http://localhost:8080/api/information/help/center/detail/',
            	'refresh' :'http://localhost:8080/api/information/help/center/detail/:id',
            	'remove' :'http://localhost:8080/api/information/help/center/detail/:id'
            }
        },

        'counpon':{
            'cashcounpon' : {
                'list' : 'http://localhost:8080/api/vip/coupon/cashcoupon/list/:from/:size',
                'count' : 'http://localhost:8080/api/vip/coupon/cashcoupon/amount',
                'add' : 'http://localhost:8080/api/vip/coupon/cashcoupon',
                'unlock' : 'http://localhost:8080/api/vip/coupon/cashcoupon/unlock/:ids'
            },
            'discountcounpon' : {
                'list' : 'http://localhost:8080/api/vip/coupon/discountcoupon/list/:from/:size',
                'count' : 'http://localhost:8080/api/vip/coupon/discountcoupon/amount',
                'add' : 'http://localhost:8080/api/vip/coupon/discountcoupon',
                'unlock' : 'http://localhost:8080/api/vip/coupon/discountcoupon/unlock/:ids'
            }
        },
        'goods':{//根据条件查询商品
            'queryGoodsList':'http://localhost:8080/api/back/goods/list',
			 'queryGoodsList':'http://localhost:8080/api/back/goods/list',
            'up':'http://localhost:8080/api/goodsOperation/up/',
            'down':'http://localhost:8080/api/goodsOperation/down/'
        },
        'goodsOperation':{//商品操作
            'merchantlist':'http://localhost:8080/api/goodsOperation/merchant/list',
            'brandlist':'http://localhost:8080/api/goodsOperation/brands/',
            'typelist':'http://localhost:8080/api/goods/type/list',
            'show':'http://localhost:8080/api/goodsOperation/updateveiw/',
            'save':'http://localhost:8080/api/goodsOperation/save',
            'update':'http://localhost:8080/api/goodsOperation/update/',
            'updatecount':'http://localhost:8080/api/goodsOperation/modfiycount/:gid/:count'
        },       
  
        'merchant':{//根据条件查询商品
            'queryMerchantList':'http://localhost:8080/api/merchant/list',
            'getMerchantInfo':'http://localhost:8080/api/merchant/info/:mid',
            'update':'http://localhost:8080/api/merchant/updatemerchant',
            'save':'http://localhost:8080/api/merchant/savemerchant',
             'invoicelist':'http://localhost:8080/api/merchant/invoicetype/list',
            'deliverylist':'http://localhost:8080/api/merchant/deliverytype/list'
        },
        'getinformation':{
            'getSchoolSite':'http://localhost:8080/api/information/sites/:siteid',
            'getSchoolName':'http://localhost:8080/api/information/sitesSchool/:names',
            'saveSchool':'http://localhost:8080/api/information/savedetails',
            'alldetail':'http://localhost:8080/api/information/alldetail',
            'getMerchantInfo':'http://localhost:8080/api/merchant/info/:mid',
            'update':'http://localhost:8080/api/merchant/updatemerchant',
            'save':'http://localhost:8080/api/merchant/savemerchant',
			 'invoicelist':'http://localhost:8080/api/merchant/invoicetype/list',
            'deliverylist':'http://localhost:8080/api/merchant/deliverytype/list',
            'deletedetail':'http://localhost:8080/api/information/delete/:id',
            'updateInfo':'http://localhost:8080/api/information/update',
            'getInfoById':'http://localhost:8080/api/information/detail/:id'




        },
        'comment':{
            'querycomment':'http://localhost:8080/api/allcomments'
        },
        'resource':{
            'ueditor':'http://localhost:8080/api/resource/ueditor/upload',
            'single':'http://localhost:8080/api/resource/upload/single'
        },
        'track':{//推广系统模块
            'getAddetailInfo':'http://localhost:8080/api/track/addetail/info/:id',
            'updateAddetail':'http://localhost:8080/api/track/addetail/updateAddetail',
            'saveAddetail':'http://localhost:8080/api/track/addetail/saveAddetail',
            'getAdmoduleInfo':'http://localhost:8080/api/track/admodule/info/:id',
            'updateAdmodule':'http://localhost:8080/api/track/admodule/updateAdmodule',
            'saveAdmodule':'http://localhost:8080/api/track/admodule/saveAdmodule',
            'queryAdmoduleList':'http://localhost:8080/api/track/admodule/list',
            'queryAddetailList':'http://localhost:8080/api/track/addetail/list',
            'removeAddetail':'http://localhost:8080/api/track/addetail/remove/:id',
            'removeAdmodule':'http://localhost:8080/api/track/admodule/remove/:id',
            'admodulelist':'http://localhost:8080/api/track/admodule/list'
        },
        'brand':{
            'brandlist':'http://localhost:8080//api/brand/brands/',
            'save':'http://localhost:8080/api/brand/save',
            'getbyid':'http://localhost:8080/api/brand/updateveiw/',
            'update':'http://localhost:8080/api/brand//update/',
             'del':'http://localhost:8080/api/brand/'


        },
        'goodstype':{
            'typelist':'http://localhost:8080//api/goodstype/list/',
            'save':'http://localhost:8080/api/goodstype/save',
            'getbyid':'http://localhost:8080/api/goodstype/single/',
            'update':'http://localhost:8080/api/goodstype/update/',
            'del':'http://localhost:8080/api/goodstype/del/'
        }
    }
});
