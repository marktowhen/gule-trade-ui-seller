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
      //品牌列表查询
      .state('seller-center.refunding-list',{
        templateUrl: '/views/seller-center/refund-management/refunding.html',
        url:"/refunding"
      })//品牌维护
      .state('seller-center.returning-list',{
        templateUrl:'/views/seller-center/refund-management/returning.html',
        url:"/returning"
      })//品牌新建
      .state('seller-center.refunded-list',{
        templateUrl:'/views/seller-center/refund-management/refunded.html',
        url:"/refunded"
      })
      .state('seller-center.refunding-accept', {
        templateUrl:'/views/seller-center/refund-management/refunding_receiver.html',
        url:"/refunding/accept/:rid"
      })
      .state('seller-center.refunding-deny', {
        templateUrl:'/views/seller-center/refund-management/refunding_deny.html',
        url:"/refunding/deny/:rid"
      });
  });
