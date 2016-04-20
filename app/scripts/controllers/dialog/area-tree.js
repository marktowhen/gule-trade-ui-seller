'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('AreaTreeController', function ($scope, $http, $location,ProvinceService,CityService) {

   
    
    $scope.$on("transportDetail",
      function (event, msg) {
           $scope.currentPostageDetail = msg;
           //默认选中的city
           ProvinceService.listWithCity().success(function(data){
                $scope.provinceList = data.body;
                $scope.cityList = [];
                var fitArea  = $scope.currentPostageDetail.fitArea;
                if (fitArea!=undefined && fitArea.indexOf("{") >-1) {
                    for (var i = 0; i < $scope.provinceList.length; i++) {
                       var province = $scope.provinceList[i];
                       $scope.province = province;
                       for (var j = 0; j < province.cityList.length; j++) {
                           var city =  province.cityList[j];
                           var cityID = "{"+city.cityID+"}";
                           if (fitArea.indexOf(cityID)>-1) {
                                city.checked = true;
                                $scope.selectItem(city);
                           }
                       }

                   }
                }
            })
           
           
        
      });
    
    $scope.checkAll = function(province){
        for (var i = province.cityList.length - 1; i >= 0; i--) {
            province.cityList[i].checked = province.checkedAll;
        }
    }

    $scope.changeProvince = function(province){
        $scope.cityList = province.cityList;
        $scope.province = province;
    }

    var selectedIDS = [];

    $scope.selectItem = function(city){
        var province = $scope.province;
        
        var checkedAll = true;
        for (var i = province.cityList.length - 1; i >= 0; i--) {
            
            if(!province.cityList[i].checked){
               checkedAll = false;
               break;
            }
        }
        if (checkedAll) {
            $scope.province.checkedAll = true;
        }else{
            $scope.province.checkedAll = false;
        }
    };

    $scope.finish = function(){
        var fitArea = "";
        var fitAreaName = "";
        for (var i = 0; i < $scope.provinceList.length; i++) {
            var province = $scope.provinceList[i];
            
            var hasChecked = false;
            var fitCityName = "";
            for (var j = 0; j < province.cityList.length; j++) {
                var city = province.cityList[j];
                if(city.checked ){
                    hasChecked = true;
                    fitArea+="{"+city.cityID+"},"
                    if(!province.checkedAll){
                        fitCityName+=city.cityName +=",";
                    }
                }
            }
            fitCityName = fitCityName.substring(0,fitCityName.length-1);
            if(hasChecked){
                if (province.checkedAll) {
                    fitAreaName = fitAreaName+province.provinceName+",";
                }else{
                    fitAreaName = fitAreaName+province.provinceName+"("+fitCityName+")"+",";
                }
            }

        }

        $scope.currentPostageDetail.fitArea = fitArea.substring(0,fitArea.length-1);
        $scope.currentPostageDetail.fitAreaName = fitAreaName.substring(0,fitAreaName.length-1);
    }

    
    
  });
