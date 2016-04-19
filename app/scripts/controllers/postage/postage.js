'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('PostageController', function ($scope,$cookies, ConstantService ,PostageService,$state) {

	$scope.$watch('$viewContentLoaded', function() {  
       
        $scope.list();
    });  

	$scope.list = function(){
	 	PostageService.list().success(function(data){
	 		if(data.ok){
	 			$scope.posageList = data.body;
	 		}
	 	});
	 }

	 $scope.remove = function(postage){
	 	if (confirm('确定删除标题为:'+postage.title+' 的运费模板吗')) {
	 		PostageService.remove(postage.id).success(function(data){
	 			if(data.ok){
	 				alert('删除成功');
	 				$scope.list();
	 			}else{
	 				alert(data.message);
	 			}
	 		})
	 	}
	 }

	 $scope.goRefresh = function(id){
	 	$state.go('postage.refresh',{ID:id});
	 }


	
});