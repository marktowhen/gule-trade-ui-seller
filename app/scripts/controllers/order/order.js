'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('OrderController', function ($scope, ConstantService, OrderService, GoodsOperationService) {
	
	GoodsOperationService.merchantlist().success(function(data){
        $scope.merchantlist =data.body;
    });

	$scope.condition = {};
	$scope.logistic = {'expressno':'', 'expressName':'', 'oid':'', 'typeCode':'', 'typeName':''};
	$scope.search2Accept = function(){
		OrderService.listWithCondition($scope.mid, 0, 10, 'PAID')
		.success(function(data){
			$scope.orders = data.body;
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
		OrderService.listWithCondition($scope.mid, 0, 10, 'ACCEPT')
		.success(function(data){
			$scope.orders = data.body;
		});
	};

	$scope.delivered = function(order){
		if(!$scope.logistic || !$scope.logistic.expressno || !$scope.logistic.expressName){
			alert("请完善物流信息！");
			return;
		}
		$scope.logistic.typeCode = order.deliveryTypeCode;
		$scope.logistic.typeName = order.deliveryTypeName;
		$scope.logistic.oid = order.id;
		OrderService.delivered($scope.logistic)
		.success(function(data){
			if(data.code == 200)
				$scope.orders.splice($scope.orders.indexOf(order), 1);
			else
				alert(data.message);
		}).error(function(data){
			alert("网络异常，稍后重试。")
		});
	};

	$scope.searchDelivered = function(){
		OrderService.listWithCondition($scope.mid, 0, 10, 'DELIVERED')
		.success(function(data){
			$scope.orders = data.body;
		});
	};
	
});