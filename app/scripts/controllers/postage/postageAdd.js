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
	$scope.submint = function(postage){
		if(ID!=null&&ID!=''&&ID!=undefined){
			//refresh

		}else{
			//save

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

	$scope.setPostageType = function(type){
		$scope.type = type;
	}
	$scope.changeTransport = function(transport){

		//点击前是选中状态
		if(transport.selected){
			transport.details = [];
		}
		//点击前是非选中状态
		else{
			transport.details = [{"fitArea":"default","fitAreaName":"全国默认"}];
		}


		transport.selected = !transport.selected;
	}	

	$scope.addItem = function(details){
		var newItem = {};
		details.push(newItem);
	}

	$scope.removeDetail = function(details, index){
		details.splice(index,1);
	}
	

	$scope.areaTree = function(){
		 $("#area-tree-dialog").modal("show");
	}
});