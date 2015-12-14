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
	$scope.m = { id: "",
				 merchantName: "",
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
				 level:"1",
				 imgPath:"",
				 merchantDesc:""
	};
	if(mid){
		MerchantEditService.getMerchantInfo(mid)
				.success(function(data){
					var r = data.body;
					$scope.m.id = r.id;
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
	/*上传图片*/
	$scope.doUpload = function(){
		var form = document.getElementById("fileinfo");  
		var formData = new FormData(form); 
		 var file=document.getElementById("file").files[0];
			if(file!=null){
				 $.ajax({  
						url:'http://localhost:8080/api/resource/upload/single',
					    type: 'POST',  
						data: formData,
						dataType: 'JSON',
						async: false,  
						cache: false,  
						contentType: false,  
						processData: false,  
						success: function (data) {  
						var data = JSON.stringify(data);
						var body = JSON.parse(data).body;
						$scope.m.imgPath =  body;
						$scope.success ="上传成功";
					},
					error: function (data) {alert(JSON.stringify(data));}  
					}); 
			}else{
				alert("上传对象为空!");
			}
		};

	/*保存或者修改修改*/
	$scope.saveorupdate =function(m){
		if(m.id){
			MerchantEditService.updateMerchant(m);
		}else{
			MerchantEditService.saveMerchant(m);
		}
	};
});