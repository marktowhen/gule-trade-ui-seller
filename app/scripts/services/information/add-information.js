'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('SchoolSiteService', function ($http, $location, ApiService) {
	this.getSchoolSite = function(siteid){
		return $http.get(ApiService.api.getinformation.getSchoolSite.replace(':siteid',siteid));
	};
	this.saveuserinfo = function(infoschool){
		
		return $http.put(ApiService.api.getinformation.saveSchool,infoschool);
	};
	this.alldetail = function(from,size){
		return $http.get(ApiService.api.getinformation.alldetail+'?from='+from+'&size='+size);
	};
	this.deletedetail = function(id){
		return $http.delete(ApiService.api.getinformation.deletedetail.replace(':id',id));
	};
});