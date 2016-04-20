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
      .state('marketing.auction-mngt', {
        templateUrl: '/views/marketing/auction/auctionmngt.html',
        url:"/marketing/auction"
      })
      .state('marketing.auction-add', {
        templateUrl: '/views/marketing/auction/auctionadd.html',
        url:"/marketing/auction/addition"
      })
  });
