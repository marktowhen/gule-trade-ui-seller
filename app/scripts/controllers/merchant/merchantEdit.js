'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('MerchantEditController', function ($scope,$state,$route,$location,MerchantEditService) {
	var mid = $state.params.mid;//获取商家ID
	$scope.m = { merchantName: "",
				 merchantEname:"",
				 merchantCode:"",
				 merchantAddress:"",
				 merchantScale:"",
				 employeeNum:"",
				 tel:"",
				 zipcode:"",
				 qq:"",
				 adminSortNum:"",
				 invoiceFlag:"0",
				 level:"",
				 merchantDesc:""
	};
	if(mid){
		MerchantEditService.getMerchantInfo(mid)
				.success(function(data){
					var r = data.body;
					$scope.m.merchantName = r.merchantName;
					$scope.m.merchantEname = r.merchantEname;
					$scope.m.merchantCode = r.merchantCode;
					$scope.m.merchantAddress = r.merchantAddress;
					$scope.m.merchantScale = r.merchantScale;
					$scope.m.employeeNum = r.employeeNum;
					$scope.m.tel = r.tel;
					$scope.m.zipcode = r.zipcode;
					$scope.m.qq = r.qq;
					$scope.m.adminSortNum = r.adminSortNum;
					$scope.m.invoiceFlag = r.invoiceFlag;
					$scope.m.level = r.level;
					$scope.m.merchantDesc = r.merchantDesc;
				});
	}
});