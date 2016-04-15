'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('PostageService', function ($http, $location, ApiService) {

	//list
	this.list = function(MID){
		return $http.get(ApiService.api.postage.list.replace(':MID', MID));
	}

	this.save = function(postage){
		return $http.post(ApiService.api.postage.save, postage);
	}

	this.refresh = function(postage){
		return $http.put(ApiService.api.postage.refresh.replace(':ID', postage.ID), postage);
	}

	this.remove = function(postageID){
		return $http.delete(ApiService.api.postage.remove.replace(':MID', MID));
	}

	
});