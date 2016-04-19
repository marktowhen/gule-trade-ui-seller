'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('PostageRefreshController', function ($scope,$cookies, ConstantService ,PostageService,$stateParams,$state) {

	var postageExemple = {
		"type" :"计费类型",
		"posageDetailList" :[
			{"firstNumber":"","firstCost":"","transportType":""}
		]
	};

	$scope.transportList = [
			{"transportType":"EXPRESS","selected":false,"details":[]},
			{"transportType":"EMS","selected":false,"details":[]},
			{"transportType":"POST","selected":false,"details":[]}
		];
	var ID = $stateParams.ID;
	if (ID!=null&&ID!=''&&ID!=undefined) {
		PostageService.single(ID).success(function(data){
			if(data.ok){
				$scope.postage = data.body;
				for (var i = 0; i < $scope.transportList.length; i++) {

					for (var j = 0; j < $scope.postage.postageDetailList.length; j++) {
						if (!$scope.postage.postageDetailList[j].free) {
							$scope.postage.postageDetailList[j].free = '0';
						}
						if($scope.postage.postageDetailList[j].transportType == $scope.transportList[i].transportType){
							$scope.transportList[i].selected = true;
							$scope.transportList[i].details.push($scope.postage.postageDetailList[j]);
						}
					}
				}
				
			}
		})
	}else{
		alert("数据错误 请重新打开该页面");
	}

	$scope.submit = function(postage){
		if(!check($scope.transportList)){
			return;
		}

		var postageDetailList = [];
		for (var i = 0; i < $scope.transportList.length; i++) {
			for (var j = 0; j < $scope.transportList[i].details.length; j++) {
				if($scope.transportList[i].details[j].free=='0'){
					$scope.transportList[i].details[j].free = null;
				}
				postageDetailList.push($scope.transportList[i].details[j]);
			}
		}
		for (var i = 0; i < postageDetailList.length; i++) {
			if (postageDetailList[i].free==0) {
				postageDetailList[i].free = false;
			}
		}
		postage.postageDetailList = postageDetailList;

		//refresh
		PostageService.refresh(postage).success(function(data){
			if (data.ok) {
				alert("修改成功");
				$state.go('postage.list');
			}else{
				alert(data.message);
			}
		})

	}
	var check = function(transportList){
		for (var i = 0; i < transportList.length; i++) {
			var fitArea = [];
			for (var j = 0; j < transportList[i].details.length; j++) {
				var newFitArea =transportList[i].details[j].fitArea.split(",");
				for (var k = 0; k < newFitArea.length; k++) {
					if (fitArea.indexOf(newFitArea[k])>-1) {
						alert(getTransportName(transportList[i].transportType)+"中城市设置重复,请检查");
						return false;
					}else{
						fitArea.push(newFitArea[k]);
					}
				}
			}
		}

		return true;
	}
	var getTransportName = function(attr){
		if(attr=='POST'){
			return '平邮';
		}else if(attr=='EXPRESS'){
			return '快递';
		}else if(attr=='EMS'){
			return 'EMS';
		}
		return attr;
	}

	

	
	$scope.changeTransport = function(transport){

		//选中
		if(transport.selected){
			transport.details = [{"fitArea":"default","fitAreaName":"全国默认","transportType":transport.transportType,"free":"0"}];
			
		}
		//取消选中运送方式
		else{
			transport.details = [];
		}


	}	

	$scope.addItem = function(details,transportType){
		var newItem = {"transportType":transportType,"free":"0"};
		details.push(newItem);
	}

	$scope.removeDetail = function(details, index){
		details.splice(index,1);
	}
	

	$scope.areaTree = function(detail){
		//广播 到地区弹出框
		$scope.$broadcast("transportDetail", detail);
		//$scope.currentPostageDetail = detail;
		 $("#area-tree-dialog").modal("show");
	}

	$scope.freeSet = function(detail){
		if ($scope.postage.type=='number') {
			detail.firstNumber = 1;
			detail.firstWeight = 0;
			detail.firstVolume = 0;
			detail.nextNumber = 1;
			detail.nextWeight = 0;
			detail.nextVolumn = 0;
		}else if ($scope.postage.type=='weight') {
			detail.firstNumber = 0;
			detail.firstWeight = 1;
			detail.firstVolume = 0;
			detail.nextNumber = 0;
			detail.nextWeight = 1;
			detail.nextVolumn = 0;
		}else{
			detail.firstNumber = 0;
			detail.firstWeight = 0;
			detail.firstVolume = 1;
			detail.nextNumber = 0;
			detail.nextWeight = 0;
			detail.nextVolumn = 1;
		}
		detail.firstCost = 0;
		detail.nextCost = 0;
	}
});