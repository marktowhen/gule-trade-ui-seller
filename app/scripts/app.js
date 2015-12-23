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
    'ng.ueditor',
    'ui.date',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('index', {
        /*templateUrl: '/views/main.html',*/
        controller: 'MainCtrl',
        controllerAs: 'main',
        url:"/",
        views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                  '': {
                      templateUrl: '/views/seller-center/seller-center.html'
                      },
                  'seller-center-left@index': {
                      templateUrl: 'views/seller-center/seller-center-left.html'
                    }
                }
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
        url:"/update/goods?gid"
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

       .state('trading-center',{
        url:"/trading-center",
        views: {
                  '': {
                      templateUrl: '/views/trading-center/trading-center.html'
                      },
                  'trading-center-left@trading-center': {
                      templateUrl: 'views/trading-center/trading-center-left.html'
                    }
                }
      }).state('trading-center.sold-goods',{
        templateUrl:'/views/trading-center/transaction-management/sold-goods.html',
        url:"/sold-goods"
      }).state('trading-center.comment',{
        templateUrl:'/views/trading-center/transaction-management/comment.html',
        url:"/comment"
      })
      .state('trading-center.wait-to-accept', {
        templateUrl: '/views/trading-center/transaction-management/wait-to-accept.html',
        url:"/order/accept"
      })
      .state('trading-center.delivering', {
        templateUrl: '/views/trading-center/transaction-management/delivering.html',
        url:"/order/delivering"
      })
      .state('trading-center.delivered', {
        templateUrl: '/views/trading-center/transaction-management/delivered.html',
        url:"/order/delivered"
      }).state('station-goods',{
        url:"/station-goods",
        views: { 
                  '': {
                      templateUrl: '/views/station-goods/station-goods.html'
                      },
                  'station-goods-left@station-goods': {
                      templateUrl: 'views/station-goods/station-goods-left.html'
                    }
                }
      }).state('station-info',{
        url:"/station-info",
        views: { 
                  '': {
                      templateUrl: '/views/station-info/station-info.html'
                      },
                  'station-info-left@station-info': {
                      templateUrl: 'views/station-info/station-info-left.html'
                    }
                }
      })


      .state('add-school',{
        templateUrl:'/views/information-management/add-school.html',
        url:"/add-school"
      })
       .state('add-culture',{
        templateUrl:'/views/information-management/add-culture.html',
        url:"/add-culture"
      })
        .state('add-news',{
        templateUrl:'/views/information-management/add-news.html',
        url:"/add-news"
      })
         .state('getAll-information',{
        templateUrl:'/views/information-management/getAll-information.html',
        url:"/getAll-information"
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
