'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('AdmoduleListController', function ($scope,$routeParams,$route,$location,AdmoduleListService) {
	$scope.name = '';
	//默认查询
	AdmoduleListService.queryAdmoduleList('',0,100)
				.success(function(data){
					$scope.admodulelist = data.body;
				});
    //搜索查询
    $scope.serch = function(){
    	 AdmoduleListService.queryAdmoduleList($scope.name,0,100)
				.success(function(data){
					$scope.admodulelist = data.body;
				});
    };
      
});