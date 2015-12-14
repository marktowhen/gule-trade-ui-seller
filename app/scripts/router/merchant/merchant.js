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
      //商家列表查询
      .state('seller-center.merchant-list',{
        templateUrl: '/views/merchant/merchantlist.html',
        url:"/merchant/list"
      })
  });
