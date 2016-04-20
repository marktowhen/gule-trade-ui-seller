'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('ProvinceService', function ($http, $location, ApiService) {

	//list
	this.listWithCity = function(){
		return $http.get(ApiService.api.area.province.listWithCity);
	}

	
});