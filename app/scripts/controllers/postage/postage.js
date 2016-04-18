'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('PostageController', function ($scope,$cookies, ConstantService ,PostageService) {

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


	
});