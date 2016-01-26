'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('OrderController', function ($scope, ConstantService, OrderService, GoodsOperationService, OrderStatusService) {
	
	// GoodsOperationService.merchantlist().success(function(data){
 //        $scope.merchantlist =data.body;
 //    });

     OrderService.logisticlist().success(function(data){
    	$scope.logisticlist = data.body;
    	//console.log($scope.logisticlist);
    });

	$scope.condition = {};
	
	$scope.search2Accept = function(){
		OrderService.listWithCondition(0, 10, OrderStatusService.PAID_CODE)
		.success(function(data){
			if(data.ok){
				$scope.orders = data.body;
				if($scope.orders.length == 0){
					$scope.emptyorder = true;
				}
			}else{
				alert(data.message);
			}
		});
	};

	$scope.accept = function(order){
		OrderService.accept(order)
		.success(function(data){
			if(data.ok){
				$scope.orders.splice($scope.orders.indexOf(order), 1);
			}else{
				alert(data.message);
			}
		}).error(function(){
			alert("网络异常，稍后重试。");
		});
	};

	$scope.searchDelivering = function(){
		OrderService.listWithCondition(0, 10, OrderStatusService.ACCEPT_CODE)
		.success(function(data){
			if(data.ok){
				$scope.orders = data.body;
				for (var i = 0; i < $scope.orders.length; i++) {
					var order = $scope.orders[i];
					order.logistic = {'expressno':'', 'expressName':'', 'oid':order.id, 'typeCode':order.deliveryTypeCode, 'typeName':order.deliveryTypeName};
				};
				if($scope.orders.length == 0){
					$scope.emptyorder = true;
				}
			}else{
				alert(data.message);
			}
		});
	};


	$scope.getexpressName = function(code){
		for (var i = 0; i<$scope.logisticlist.length;i++) {
			if (code == $scope.logisticlist[i].code){
				$scope.expressName = $scope.logisticlist[i].name;
			}
		}
	};

	$scope.delivered = function(order){
		order.logistic.expressName =  $scope.expressName;  
		if(!order.logistic || !order.logistic.expressno || !order.logistic.expressName|| !order.logistic.expressCode){
			alert("请完善物流信息！");
			return;
		}
		OrderService.delivered(order.logistic)
		.success(function(data){
			if(data.ok)
				$scope.orders.splice($scope.orders.indexOf(order), 1);
			else
				alert(data.message);
		}).error(function(data){
			alert("网络异常，稍后重试。")
		});
	};

	$scope.pickupself = function(order){
		if(confirm("您确定要将发货信息设置为")){
			order.logistic.expressName = '自提';
			order.logistic.expressno = 'PICKUPBYUSER';
			order.logistic.expressCode = 'USERPICKUP';
			OrderService.delivered(order.logistic)
			.success(function(data){
				if(data.ok)
					$scope.orders.splice($scope.orders.indexOf(order), 1);
				else
					alert(data.message);
			}).error(function(data){
				alert("网络异常，稍后重试。")
			});
		}
	};

	$scope.searchDelivered = function(){
		OrderService.listWithCondition(0, 10, OrderStatusService.DELIVERED_CODE)
		.success(function(data){
			if(data.ok){
				$scope.orders = data.body;
				if($scope.orders.length == 0){
					$scope.emptyorder = true;
				}
			}else{
				alert(data.message);
			}
		});
	};
	
});