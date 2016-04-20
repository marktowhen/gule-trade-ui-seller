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
      .state('marketing.group-mngt', {
        templateUrl: '/views/marketing/group/groupmngt.html',
        url:"/marketing/group"
      })
      .state('marketing.group-add', {
        templateUrl: '/views/marketing/group/groupadd.html',
        url:"/marketing/group/addition"
      })
  });
