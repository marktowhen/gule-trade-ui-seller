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
	this.list = function(){
		return $http.get(ApiService.api.postage.list);
	}

	this.save = function(postage){
		return $http.post(ApiService.api.postage.save, postage,{'Content-Type': 'application/json;charset=UTF-8'});
	}

	this.refresh = function(postage){
		return $http.put(ApiService.api.postage.refresh.replace(':ID', postage.id), postage,{'Content-Type': 'application/json;charset=UTF-8'});
	}

	this.remove = function(postageID){
		return $http.delete(ApiService.api.postage.remove.replace(':ID', postageID));
	}

	this.single = function(postageID){
		return $http.get(ApiService.api.postage.single.replace(':ID', postageID));
	}

	
});