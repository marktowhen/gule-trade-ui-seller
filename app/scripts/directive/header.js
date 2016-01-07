'use strict';

shopbackApp.directive('header', ['$http' ,function ($http){
        return {
            restrict: 'E',
            replace: true,
            templateUrl:'/views/header/header.html'
        };
    }
]);