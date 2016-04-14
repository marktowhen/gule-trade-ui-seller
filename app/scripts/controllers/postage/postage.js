'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('PostageController', function ($scope,$cookies, ConstantService ,PostageService) {

	var MID = $cookies.get(ConstantService.LOGIN_MERCHANT_ID);
	$scope.$watch('$viewContentLoaded', function() {  
       
        $scope.list();
    });  

	$scope.list = function(){
	 	PostageService.list(MID).success(function(data){
	 		if(data.ok){
	 			$scope.posageList = data.body;
	 		}
	 	});
	 }


	
});