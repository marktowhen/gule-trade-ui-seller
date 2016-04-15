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


/////////////////////////////////////////////////商品////////////////////////////////////////////////
///属性数组
$scope.attrs = [
/*			{'key':'颜色', 'values':[{'key':'','value':'红色'},{'key':'','value':'黄色'}] },
			{'key':'大小', 'values':[{'key':'','value':'XL'},{'key':'','value':'XXXL'}] }*/
];

//添加属性
$scope.addA = function(a){

	var index = Kflag($scope.attrs,a);
	if(index ==-1){
			if($scope.careate_values.length > 0){
			var attr = {};
			attr.key=a;
			attr.values = $scope.careate_values;
			$scope.attrs.push(attr);
			$scope.careate_values=[];
			$scope.a.name="";
			console.log($scope.attrs);
		}
	}else{
		alert("属性值重复!")
	}
	

};
//添加值
$scope.careate_values = [];
$scope.addV = function(a,v){
	var index = Vflag($scope.careate_values,v);
	if(index ==-1){
		var newV ={};
		newV.attrName=a;
		newV.value=v;
		$scope.careate_values.push(newV);
		$scope.v.name="";
	}else{
		alert("值重复!")
	}
};


///////删除属性///////

$scope.delA = function(k){
	var index = Kflag($scope.attrs,k);
	$scope.attrs.splice(index, 1);
};

//////删除值////////
$scope.delV = function(v){
	var index = Vflag($scope.careate_values,v);
	$scope.careate_values.splice(index, 1);
};

//////判断是否包含属性/////
var Kflag = function(arr,k){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].key == k){
			return i;
		}
	}
	return -1;
};
//////判断是否包含值/////
var Vflag = function(arr,v){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].value == v){
			return i;
		}
	}
	return -1;
};
////////商品json///////
$scope.goods = {
		'attrValueList':[]
	};
///////////////////
//保存商品
	$scope.saveGoods = function(goods){
		//编辑器文本和时间文本赋值-> goods
/*		goods.content =$scope.content;
		goods.uptime=$("#uptime").val();
		goods.downtime=$("#downtime").val();
		goods.mid = $scope.thisMerchant.id;
*/

		for (var i = 0; i <= $scope.attrs.length-1; i++) {
			var oneAttr =  $scope.attrs[i];
			for (var k = 0; k <= oneAttr.values.length-1; k++) {
					$scope.goods.attrValueList.push(oneAttr.values[k]);
			}
			
		};
		console.log($scope.goods);
		//WapGoodsOperationService.save(goods);
	};

});