'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('UpdateInfoController', function ($scope,ApiService, UpdateInfoService,$stateParams){
		var id=$stateParams.id;

		UpdateInfoService.getInfobyId(id).success(function(data){
			$scope.infoschool=data.body;
			$scope.thisContent=$scope.infoschool.content;
		});

		$scope.saveuserinfo = function(infoschool){
			infoschool.content=$scope.content;
			UpdateInfoService.updateInfo(infoschool).success(function(data){
				if(data.code==200){
					alert("修改成功");
				};
			});
		};
		
});