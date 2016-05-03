'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('GroupGoodsManagerController', function ($scope, $cookies,$state ,GroupGoodsService,ConstantService) {

		var mid = $cookies.get(ConstantService.LOGIN_MERCHANT_ID);
		$scope.ggoods = [];
		$scope.condition = {'name':''};
		var size = 20;
		var hasMore = true;
		$scope.$watch('$viewContentLoaded', function() {  
       	   $scope.research();
	        
	    });  
		var list = function(mid, name, from, size){
			GroupGoodsService.list(mid, from, size,name)
			.success(function(data){
				if(data.ok){
					for (var i = 0; i < data.body.length; i++) {
						if (data.body[i].duration!=null) {
							var s = data.body[i].duration;
							data.body[i].durationShow = getDay(s)+'天'+getHour(s)+'小时'+getMinute(s)+'分钟';
						}
						$scope.ggoods .push( data.body[i]);
					}
					if (data.body.length<size) {
						hasMore = false;
					}
					
				}
			})
		}

		var count = function(mid, goodsName){
			GroupGoodsService.count(mid, goodsName)
				.success(function(data){
					$scope.amount = data.body;
				})
		}

		$scope.research = function(){
			$scope.ggoods = [];
			list(mid,$scope.condition.name,0 ,size);
			count(mid, $scope.condition.name);
		}

		$scope.refresh = function(id){
			$state.go('marketing.group-add',{id:id});
		}

		$scope.listMore = function(){
			list(mid,$scope.condition.name,$scope.ggoods.length ,size);
		}

		var getDay = function(second){
			return parseInt(second/(60*60*24));
		}
		var getHour = function(second){
			return parseInt((second-getDay(second)*60*60*24)/(60*60));
		}
		var getMinute = function(second){
			return parseInt((second-getDay(second)*60*60*24-getHour(second)*60*60)/60);
		}
	
	
});