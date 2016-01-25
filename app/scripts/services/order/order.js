'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('OrderService', function ($http, $location, ApiService) {
   this.listWithCondition  = function (from, size, status, orderno, gname, uname, mname, fromdate, enddate){
        return  $http.get(ApiService.api.order.listWithCondition,
                    {'params': {'status':status, 'orderno':orderno, 
                            'gname':gname, 'uname':uname, 'mname': mname, 
                            'fromdate':fromdate, 'enddate':enddate, 'from':from, 'size':size}});
    };

    this.count = function(status, orderno, gname, uname, mname, fromdate, enddate){
        return $http.get(
            ApiService.api.order.count,
            {params:{'status':status, 'orderno':orderno, 'gname':gname, 'uname':uname, 'mname': mname, 'fromdate':fromdate, 'enddate':enddate}});
    }

    this.accept = function(order){
        return $http.put(ApiService.api.order.accept, [order.id], {'Content-Type':'application/json;charset=UTF-8'});
    };

    this.delivered = function(logistic){
        return $http.put(ApiService.api.order.delivered, logistic, {'Content-Type':'application/json;charset=UTF-8'});
    };

    this.singleOrder = function(oid){
        return $http.get(ApiService.api.order.singleByOID.replace(":oid", oid));
    };

    this.listTraces = function(oid){
        return $http.get(ApiService.api.order.listTraces.replace(":oid", oid));
    };
    this.logistic = function(oid){
        return $http.get(ApiService.api.order.logistic.replace(":oid", oid));
    };

    this.listOrderStatus = function(){
        return $http.get(ApiService.api.order.listOrderStatus);
    };
    this.cancel = function(oid, reason){
        return $http.put(ApiService.api.order.cancel, {'oid':oid, 'note':reason.v}, {headers:{'Content-Type':'application/json;charset=UTF-8'}});
    };

      this.logisticlist = function(){
        return $http.get(ApiService.api.logistic.logisticlist);
    };

    this.logisticinfo = function(oid,code,codeid){
        return $http.get(ApiService.api.logistic.expressinfo.replace(":oid",oid)
            .replace(":code",code).replace(":codeid",codeid));
    };
});