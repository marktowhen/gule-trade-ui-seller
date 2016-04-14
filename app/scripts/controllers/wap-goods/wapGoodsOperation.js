'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('WapGoodsOperationController', function ($scope,$location,$cookies,ConstantService,
	WapGoodsOperationService) {
	
	//模拟邮费模板
	  $scope.postages = [
	               {id:'postage-1',title:'1号模板'},
	               {id:'postage-2',title:'2号模板'},
	               {id:'postage-3',title:'3号模板'}
	        ];

	//获取当前登录用户的ID
	var sellerId = $cookies.get(ConstantService.LOGIN_ID_KEY);
	//获取当前用户的商家信息
	WapGoodsOperationService.thisMerchant(sellerId)
	.success(function(data){
					$scope.thisMerchant = data.body;
					//console.log($scope.thisMerchant);
	});
	//获取商品类型
	WapGoodsOperationService.types().success(
		function(data){
					$scope.types = data.body;
					//console.log($scope.types);
	});


	//上传主展示图片
	$scope.submitPathUpload =function(num){
		if(num==100){
			var form = document.getElementById("pathFile");  
			var formData = new FormData(form); 
		 	var file=document.getElementById("path_file").files[0];
		 	if(file!=null){
				 $.ajax({  
						url: ApiService.api.resource.single,
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
						 $scope.goods.path = "path----------";
						 $scope.pathSuccess ="上传成功";
					},
					error: function (data) {
						alert("上传失败,请重新上传·····");
					}  
					}); 
			}else{
				alert("上传对象为空!");
			}
		}
	};


//保存商品
	$scope.saveGoods = function(goods){
		//编辑器文本和时间文本赋值-> goods
		goods.content =$scope.content;
		goods.uptime=$("#uptime").val();
		goods.downtime=$("#downtime").val();
		goods.mid = $scope.thisMerchant.id;

		console.log(goods);
		
		WapGoodsOperationService.save(goods);
	};

});