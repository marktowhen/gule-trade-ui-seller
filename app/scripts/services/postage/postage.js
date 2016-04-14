'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('PostageService', function ($http, $location, ApiService) {

	//新增
	this.list = function(MID){
		return $http.get(ApiService.api.postage.list.replace(':MID', MID));
	}

	
});