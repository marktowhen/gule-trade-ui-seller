'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('MerchantEditController', function ($scope,$state,$route,$location,MerchantEditService, ApiService) {
	var mid = $state.params.mid;//获取商家ID
	
	$scope.m = { id: "",
				 name: "",
				 ename:"",
				 code:"",
				 address:"",
				 scale:"",
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
					$scope.m=data.body;
				});
	};

	/*上传图片*/
	$scope.doUpload = function(){
		var form = document.getElementById("fileinfo");  
		var formData = new FormData(form); 
		 var file=document.getElementById("file").files[0];
			if(file!=null){
				 $.ajax({  
						url:ApiService.api.resource.single,
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

	/*保存或者修改*/
	$scope.saveorupdate =function(m){
		if(m.id){
			MerchantEditService.updateMerchant(m);
		}else{
			MerchantEditService.saveMerchant(m);
		}
	};
	

	//---------------------------------------------------------------复选功能 START
    var ios = [];  //发票类型
    var dos = [];  //邮递类型
	$scope.selectInvoice = function(io){
	if(io.selected){
	    ios.push(io.code);
	}else{
	    ios.splice(ios.indexOf(io.code), 1);
	}			
	};
	$scope.selectDelivery = function(doj){
	if(doj.selected){
	    dos.push(doj.code);
	}else{
	    dos.splice(dos.indexOf(doj.code), 1);
	}		
	};

	//---------------------------------------------------------------复选功能 E N D

});