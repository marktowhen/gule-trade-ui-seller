'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */

shopbackApp.filter('booleanFilter', function (){
	return function(attr){
		if(attr){
			return '是';
		}
		return '否';
	};
	
});

shopbackApp.filter('transportFilter', function (){
	return function(attr){
		if(attr=='POST'){
			return '平邮';
		}else if(attr=='EXPRESS'){
			return '快递';
		}else if(attr=='EMS'){
			return 'EMS';
		}
		return attr;
	};
	
});

