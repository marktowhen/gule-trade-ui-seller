'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('OrderListController', function ($scope, ConstantService, OrderService, GoodsOperationService, OrderStatusService) {
	
	$scope.gname = '';
	$scope.uname = '';
	$scope.fromdate = '';
	$scope.enddate = '';
	$scope.orderno = '';

	$scope.search = function(){
		$scope.fromdate = $("#fromtime").val();
		$scope.enddate = $("#endtime").val();
		OrderService.listWithCondition(0, 10, $scope.currentstatus.code, $scope.orderno, $scope.gname, $scope.uname, '', $scope.fromdate, $scope.enddate)
		.success(function(data){
			$scope.orders = data.body;
		});
	};

	OrderService.listOrderStatus().success(function(data){
    	$scope.orderstatus = data.body;
    	$scope.orderstatus.splice(0, 0, {'code':'', 'name':'全部状态'});
    	$scope.currentstatus = $scope.orderstatus[0];
    });
	
});