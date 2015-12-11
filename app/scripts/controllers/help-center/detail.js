'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('HelpCenterDetailController', function ($scope,$cookies, ConstantService, HelpCenterCategoryService,HelpCenterDetailService) {

	 $scope.$watch('$viewContentLoaded', function() {  
       listCategory();
        
    });  

	 //展示分类
	var listCategory = function(){
		HelpCenterCategoryService.list().success(function(data){
			$scope.categoryList = data.body;
		})
	}
	//刷新分类的子菜单
	var refreshCategory = function(categoryID){
		if(!isEmpty($scope.categoryList)){
			for (var i = 0; i < $scope.categoryList.length; i++) {
				if($scope.categoryList[i].id == categoryID){
					$scope.listDetail($scope.categoryList[i]);
					return;
				}
			};
		}
	}
	//根据分类查询列表
	$scope.listDetail = function(category){
		HelpCenterDetailService.list(category.id).success(function(data){
				category.detailList = data.body;
			})

		$scope.detail = {'parentID':category.id};
		$scope.title = '新增';
	}

	$scope.title = '新增';

	$scope.getSingle = function(id){

		HelpCenterDetailService.single(id).success(function(data){
			$scope.detail = data.body;
			$scope.title = '修改';
		})
		
	}

	$scope.newDetail = function(){
		if(isEmpty($scope.detail) || isEmpty($scope.detail.parentID)){
			alert("请选择分类");
			return;
		}
		$scope.detail = {'parentID':$scope.detail.parentID};
		$scope.title = '新增';
	}

	

	$scope.submitItem = function(detail, ifValid){
		if(ifValid){
			if(!isEmpty(detail.parentID)){
				if(!isEmpty(detail.id)){
					HelpCenterDetailService.refresh(detail).success(function(data){
						if(data.code==200){
							alert('修改成功');
							$scope.newDetail();
							refreshCategory(detail.parentID);
						}else{
							alert(data.message);
						}
					})

				}else{
					HelpCenterDetailService.save(detail).success(function(data){
						if(data.code==200){
							alert('保存成功');
							$scope.newDetail();
							refreshCategory(detail.parentID);
						}else{
							alert(data.message);
						}
					})
				}
			}else{
				alert('请选择分类');
			}
			
		}
		
	}

	$scope.remove = function(id, category){
		if(confirm("确定删除吗")){
			HelpCenterDetailService.remove(id).success(function(data){
				if(data.code==200){
					alert("删除成功");
					refreshCategory(category.id);
				}
			})
		}
	}

	var isEmpty = function(str){
		if(str==undefined || str==null || str==''){
			return true;
		}
		return false;
	}

	$scope.showOrHideList = function(category){
		category.showDetail = !category.showDetail;
	}


})	