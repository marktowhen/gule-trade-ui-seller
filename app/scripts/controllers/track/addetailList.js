'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('AddetailListController', function ($scope,$state,$routeParams,$route,$location,AddetailListService) {
	$scope.name = '';
	//默认查询
	AddetailListService.queryAddetailList('',0,100)
				.success(function(data){
					$scope.addetaillist = data.body;
				});
    //搜索查询
    $scope.serch = function(){
    	 AddetailListService.queryAddetailList($scope.name,0,100)
				.success(function(data){
					$scope.addetaillist = data.body;
				});
    };
    $scope.removeAddetail =function(id){ 
    AddetailListService.removeAddetail(id).success(function(data){
    	 alert('删除成功！');
         AddetailListService.queryAddetailList('',0,100)
				.success(function(data){
					$state.go('seller-center.addetail-list');
					$scope.addetaillist = data.body;
				});
         });
  };
      
});