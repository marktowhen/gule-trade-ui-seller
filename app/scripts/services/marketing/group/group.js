'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('GroupService', function ($http, $location , ApiService) {
    
   

    this.save = function(groupGoods){
        return $http.post(ApiService.api.marketing.group.save ,groupGoods);
    };

   
})