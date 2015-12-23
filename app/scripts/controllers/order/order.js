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
			if(data.code == 200)
				$scope.orders.splice($scope.orders.indexOf(order), 1);
			else
				alert("操作异常，请刷新重试。");
		});
	};

	$scope.searchDelivering = function(){
		OrderService.listWithCondition($scope.mid, 0, 10, 'ACCEPT')
		.success(function(data){
			$scope.orders = data.body;
		});
	};

	$scope.delivered = function(order){
		$scope.logistic.typeCode = order.deliveryTypeCode;
		$scope.logistic.typeName = order.deliveryTypeName;
		$scope.logistic.oid = order.id;
		OrderService.delivered($scope.logistic)
		.success(function(data){
			if(data.code == 200)
				$scope.orders.splice($scope.orders.indexOf(order), 1);
			else
				alert("操作异常，请刷新重试。");
		});
	};

	$scope.searchDelivered = function(){
		OrderService.listWithCondition($scope.mid, 0, 10, 'DELIVERED')
		.success(function(data){
			$scope.orders = data.body;
		});
	};
	
});