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
            'listWithCondition': 'http://localhost:8080/api/orders/seller/list',
            'accept':'http://localhost:8080/api/orders/acception',
            'delivered':'http://localhost:8080/api/orders/logistic',
            'singleByOID':'http://localhost:8080/api/orders/:oid',
            'listTraces': 'http://localhost:8080/api/orders/:oid/traces',
            'logistic':'http://localhost:8080/api/orders/:oid/logistic',
            'listOrderStatus':'http://localhost:8080/api/order/status/visible',
            'cancel':'http://localhost:8080/api/orders/cancellation',
            'count':'http://localhost:8080/api/orders/seller/count'
        },
        'refund':{
            'listWithCondition': 'http://localhost:8080/api/refund/seller/list',
            'accept':'http://localhost:8080/api/refund/acception',
            'deny':'http://localhost:8080/api/refund/denial',
            'done':'http://localhost:8080/api/refund/completion'
        },
        'login':{
            'seller':'http://localhost:8080/api/login/seller',
            'manager':'http://localhost:8080/api/login/manager'
        },
        'logout':'http://localhost:8080/api/logout',
        'refreshPwd':'http://localhost:8080/api/pwd/seller',
        //用户
        'user':{
            'getLoginUser' :'http://localhost:8080/api/user/current'
        },
        //卖家
        'seller':{
            'current' :'http://localhost:8080/api/seller/current'
        },
        //管理员
        'manager':{
            'current' :'http://localhost:8080/api/manager/current'
        },

        'helpCenter':{
            'category' : {
            	'list' : 'http://localhost:8080/api/statics/help/center/category/list',
            	'single' : 'http://localhost:8080/api/statics/help/center/category/:id',
            	'save' :'http://localhost:8080/api/statics/help/center/category/',
            	'refresh' :'http://localhost:8080/api/statics/help/center/category/:id',
            	'remove' :'http://localhost:8080/api/statics/help/center/category/:id'
            },
            'detail' : {
            	'list' : 'http://localhost:8080/api/statics/help/center/detail/list/:categoryID',
            	'single' : 'http://localhost:8080/api/statics/help/center/detail/:id',
            	'save' :'http://localhost:8080/api/statics/help/center/detail/',
            	'refresh' :'http://localhost:8080/api/statics/help/center/detail/:id',
            	'remove' :'http://localhost:8080/api/statics/help/center/detail/:id'
            }
        },

        'counpon':{
            'cashcounpon' : {
                'list' : 'http://localhost:8080/api/vip/coupon/cashcoupon/list/:from/:size',
                'count' : 'http://localhost:8080/api/vip/coupon/cashcoupon/amount',
                'save' : 'http://localhost:8080/api/vip/coupon/cashcoupon/:amount',
                'unlock' : 'http://localhost:8080/api/vip/coupon/cashcoupon/unlock/:ids'
            },
            'discountcounpon' : {
                'list' : 'http://localhost:8080/api/vip/coupon/discountcoupon/list/:from/:size',
                'count' : 'http://localhost:8080/api/vip/coupon/discountcoupon/amount',
                'save' : 'http://localhost:8080/api/vip/coupon/discountcoupon/:amount',
                'unlock' : 'http://localhost:8080/api/vip/coupon/discountcoupon/unlock/:ids'
            }
        },
        'postage' : {
            'list' : 'http://localhost:8080/api/logistic/postage/list/detail',
            'save' : 'http://localhost:8080/api/logistic/postage/',
            'refresh' : 'http://localhost:8080/api/logistic/postage/:ID',
            'remove' : 'http://localhost:8080/api/logistic/postage/:ID',
            'single' : 'http://localhost:8080/api/logistic/postage/:ID'
        },
        'area' : {
            'province' : {
                'list' : 'http://localhost:8080/api/statics/area/province/list',
                'listWithCity' : 'http://localhost:8080/api/statics/area/province/city/list'
            },
            'city' : {
                'list' : 'http://localhost:8080/api/statics/area/city/list/:provinceID'
            }
        },
        
        'goods':{//根据条件查询商品
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
            'updatecount':'http://localhost:8080/api/goodsOperation/modfiycount/:gid/:count',
            'checkcode':'http://localhost:8080/api/goodsOperation/checkcode/:code'
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
            'getSchoolSite':'http://localhost:8080/api/statics/information/sites/:siteid',
            'getSchoolName':'http://localhost:8080/api/statics/information/sitesSchool/:names',
            'saveSchool':'http://localhost:8080/api/statics/information/savedetails',
            'alldetail':'http://localhost:8080/api/statics/information/alldetail',
            'getMerchantInfo':'http://localhost:8080/api/merchant/info/:mid',
            'update':'http://localhost:8080/api/merchant/updatemerchant',
            'save':'http://localhost:8080/api/merchant/savemerchant',
			 'invoicelist':'http://localhost:8080/api/merchant/invoicetype/list',
            'deliverylist':'http://localhost:8080/api/merchant/deliverytype/list',
            'deletedetail':'http://localhost:8080/api/statics/information/delete/:id',
            'updateInfo':'http://localhost:8080/api/statics/information/update',
            'getInfoById':'http://localhost:8080/api/statics/information/detail/:id',
            'getInfoByName':'http://localhost:8080/api/statics/information/byname/detail',
            'maxOrders':'http://localhost:8080/api/statics/information/detail/orders/:id'


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
            'typelist':'http://localhost:8080/api/goods/type/list/',
            'save':'http://localhost:8080/api/goods/type/save',
            'getbyid':'http://localhost:8080/api/goods/type/single/:tid',
            'update':'http://localhost:8080/api/goods/type/update/:tid',
            'del':'http://localhost:8080/api/goods/type/del/:tid',
            'byname':'http://localhost:8080/api/goods/type/singleByName/:tname'
        },
        'marketing':{
            'auction':{
                'goods':{
                    'save' : 'http://localhost:8080/api/marketing/auction/goods/addition',
                    'list':'http://localhost:8080/api/marketing/auction/goods/list',
                    'count':'http://localhost:8080/api/marketing/auction/goods/count',
                    'single':'http://localhost:8080/api/marketing/auction/goods/detail',
                    'refresh':'http://localhost:8080/api/marketing/auction/goods'
                }
            },
            'group':{
                
            },
            'groupGoods':{
                'save':'http://localhost:8080/api/marketing/group/goods/addition',
                'list':'http://localhost:8080/api/marketing/group/goods/list',
                'count':'http://localhost:8080/api/marketing/group/goods/count',
                'single':'http://localhost:8080/api/marketing/group/goods/detail',
                'refresh':'http://localhost:8080/api/marketing/group/goods'
            }
        },
        'logistic':{
            'logisticlist':'http://localhost:8080/api/logistic/express/list',
            'expressinfo':'http://localhost:8080/api/logistic/express/info/:oid/:code/:codeid'
        },
         'wapgoods':{
            'skulist':'http://localhost:8080/api/wap/goods/skus/:gid',
            'allList':'http://localhost:8080/api/wap/goods/list',
            'thisMerchant':'http://localhost:8080/api/merchant/merchantBySellerId/:sellerId',
            'types':'http://localhost:8080/api/goods/type/list',
            'save':'http://localhost:8080/api/goods/operation/save',
            'del':'http://localhost:8080/api/goods/operation/del/:gid',
            'view':'http://localhost:8080/api/goods/operation/view/:gid'
        }
    }
});
