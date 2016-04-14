'use strict';

/**
 * @ngdoc overview
 * @name jingyunetradebackApp
 * @description
 * # jingyunetradebackApp
 *
 * Main module of the application.
 */
shopbackApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
    	.state('postage',{
	        url:"/postage",
	        views: { 
                  '': {
                      templateUrl: '/views/postage/postage.html'
                      },
                  'postage-left@postage': {
                      templateUrl: 'views/postage/postage-left.html'
                    }
                }
      })
      .state('postage.list', {
        templateUrl: '/views/postage/postage/postageList.html',
        url:"/list"
      })
      .state('postage.add', {
        templateUrl: '/views/postage/postage/postageAdd.html',
        url:"/add"
      });
  });
