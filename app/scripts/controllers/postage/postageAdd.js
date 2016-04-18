'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('PostageAddController', function ($scope,$cookies, ConstantService ,PostageService) {

	var MID = $cookies.get(ConstantService.LOGIN_MERCHANT_ID);
	var ID = "";
	$scope.submit = function(postage){
		var postageDetailList = [];
		for (var i = 0; i < $scope.transportList.length; i++) {
			for (var j = 0; j < $scope.transportList[i].details.length; j++) {
				postageDetailList.push($scope.transportList[i].details[j]);
			}
			
		}
		postage.postageDetailList = postageDetailList;
		if(ID!=null&&ID!=''&&ID!=undefined){

			//refresh
			PostageService.refresh(postage).success(function(data){
				if (data.ok) {
					alert("修改成功");
				}else{
					alert(data.message);
				}
			})

		}else{
			//save
			PostageService.save(postage).success(function(data){
				if (data.ok) {
					alert("保存成功");
				}else{
					alert(data.message);
				}
			})
		}
	}

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
	

	$scope.areaTree = function(){
		 $("#area-tree-dialog").modal("show");
	}
});