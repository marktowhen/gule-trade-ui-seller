'use strict';

/**
 * @ngdoc overview
 * @name jingyunetradebackApp
 * @description
 * # jingyunetradebackApp
 *
 * Main module of the application.
 */
var shopbackApp= angular
  .module('jingyunetradebackApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('index', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        url:"/"
      })
      .state('about', {
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        url:"/about"
      })
      .state('release-commodity',{
        templateUrl:'/views/seller-center/commodity-management/release-commodity.html',
        url:"/release-commodity"
      })
      .state('update-goods',{
        templateUrl:'/views/seller-center/commodity-management/update-goods.html',
        url:"/update/goods/:gid",
        controller: function($stateParams){
              $stateParams.gid  
         },
      })
       .state('seller-center',{
        url:"/seller-center",
        views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                  '': {
                      templateUrl: '/views/seller-center/seller-center.html'
                      },
                  'seller-center-left@seller-center': {
                      templateUrl: 'views/seller-center/seller-center-left.html'
                    }
                }
         })
       .state('seller-center.sold-goods',{
        templateUrl:'/views/seller-center/transaction-management/sold-goods.html',
        url:"/sold-goods"
      })
      .state('seller-center.wait-to-accept', {
        templateUrl: '/views/seller-center/transaction-management/wait-to-accept.html',
        url:"/order/accept"
      })
      .state('seller-center.delivering', {
        templateUrl: '/views/seller-center/transaction-management/delivering.html',
        url:"/order/delivering"
      })
      .state('seller-center.delivered', {
        templateUrl: '/views/seller-center/transaction-management/delivered.html',
        url:"/order/delivered"
      })
      //商品列表查询
      .state('seller-center.goods-list', {
        templateUrl: '/views/seller-center/goods-management/goodslist.html',
        url:"/goods/list"
      })
      ;
     /* .state('seller-center.release-commodity',{
        templateUrl:'/views/seller-center/commodity-management/release-commodity.html',
        url:"/release-commodity"
      })*/ 
  });
