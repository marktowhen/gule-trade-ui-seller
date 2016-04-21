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
      //wap goods
      .state('station-goods.wap-goods-add',{
        templateUrl: '/views/wap-goods/wap-goods-add.html',
        url:"/wap-goods/add?gid"
      })
      .state('station-goods.wap-goods-list',{
        templateUrl: '/views/wap-goods/wap-goods-list.html',
        url:"/wap-goods/list"
      })
  });
