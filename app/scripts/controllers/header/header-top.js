'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('HeaderTopController', function ($scope,$cookies,UserService,HeaderTopService,ManagerService,SellerService) {

	//卖家
	if($cookies.get('LOGIN_FOR_SELLER')=='true'){
		SellerService.current().success(function(data){
			if(data.code==200){
				$scope.topUsername = data.body.sname;
			}
			
		})
    }
    //管理员
    else{
    	ManagerService.current().success(function(data){
			if(data.code==200){
				$scope.topUsername = data.body.mname;
			}
			
		})
    }
	

	$scope.logout = function(){
		HeaderTopService.logout().success(function(data){
			$state.go("login",{w:'logout'});
		})
	}

});