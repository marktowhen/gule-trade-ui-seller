'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('AddetailEditController', function ($scope,$state,$route,$location,ApiService,AddetailEditService) {
	var id = $state.params.id;//获取广告ID
	$scope.obj = {
				 id: "",
				 adModuleId: "",
				 name:"",
				 imgpath:"",
				 linkpath:"",
				 description:"",
				 sortNum:"",
				 attr1:"",
				 attr2:"",
				 attr3:"",
				 attr4:""
	};
	if(id){
		AddetailEditService.getAddetailInfo(id)
				.success(function(data){
					var r = data.body;
					$scope.obj.id = r.id;
					$scope.obj.adModuleId = r.adModuleId;
					$scope.obj.name = r.name;
					$scope.obj.imgpath = r.imgpath;
					$scope.obj.linkpath = r.linkpath;
					$scope.obj.description = r.description;
					$scope.obj.sortNum = r.sortNum;
					$scope.obj.attr1 = r.attr1;
					$scope.obj.attr2 = r.attr2;
					$scope.obj.attr3 = r.attr3;
					$scope.obj.attr4 = r.attr4;
				});
	}else{
		 
	};
	
	/*保存或者修改*/
	$scope.saveorupdate =function(obj){ 
		if(obj.id){
			AddetailEditService.updateAddetail(obj);
		}else{
			AddetailEditService.saveAddetail(obj);
		}
	};
	/*获取当前的广告模块*/
	AddetailEditService.admodulelist().success(function(data){
		$scope.admodulelist =data.body;
	}); 
});