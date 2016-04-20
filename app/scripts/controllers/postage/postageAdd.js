'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('PostageAddController', function ($scope,$cookies, ConstantService ,PostageService,$stateParams,$state) {

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
	

	$scope.submit = function(postage){
		if(!check($scope.transportList)){
			return;
		}
		var postageDetailList = [];
		for (var i = 0; i < $scope.transportList.length; i++) {
			for (var j = 0; j < $scope.transportList[i].details.length; j++) {
				postageDetailList.push($scope.transportList[i].details[j]);
			}
			
		}
		postage.postageDetailList = postageDetailList;
		
			//save
			PostageService.save(postage).success(function(data){
				if (data.ok) {
					alert("保存成功");
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

		//取消选中
		if(transport.selected){
			transport.details = [];
		}
		//选中运送方式
		else{
			transport.details = [{"fitArea":"default","fitAreaName":"全国默认","transportType":transport.transportType}];
		}


		transport.selected = !transport.selected;
	}	

	$scope.addItem = function(details,transportType){
		var newItem = {"transportType":transportType};
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