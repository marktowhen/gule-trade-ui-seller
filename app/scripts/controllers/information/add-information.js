'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('SchoolSiteController', function ($scope, SchoolSiteService){
	SchoolSiteService.getSchoolSite('101').success(function(data){
		$scope.SchoolSite=data.body;
		getSchool($scope.names);

	});
	var getSchool=function(name){
		SchoolSiteService.getSchoolName(name).success(function(data){
		$scope.schoolName=data.body;
		
		var id=schoolName.id;
		alert(id);
	});
	}
	

});
