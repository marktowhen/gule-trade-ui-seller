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
    	.state('marketing',{
	        url:"/marketing",
	        views: { 
                  '': {
                      templateUrl: '/views/marketing/marketing.html'
                      },
                  'marketing-left@marketing': {
                      templateUrl: 'views/marketing/marketing-left.html'
                    }
                }
      });
  });
