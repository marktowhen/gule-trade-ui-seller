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
      .state('seller-center.brand-list',{
        templateUrl: '/views/brand/brandlist.html',
        url:"/brand/list"
      })//品牌维护
      .state('seller-center.brand-edit',{
        templateUrl:'/views/brand/brandedit.html',
        url:"/brand/edit?bid"
      })//品牌新建
      .state('seller-center.brand-add',{
        templateUrl:'/views/brand/brandadd.html',
        url:"/brand/add"
      });
  });
