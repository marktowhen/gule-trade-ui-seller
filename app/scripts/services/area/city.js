'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('CityService', function ($http, $location, ApiService) {

	//list
	this.list = function(provinceID){
		return $http.get(ApiService.api.area.city.list.replace(':provinceID', provinceID));
	}

	
});