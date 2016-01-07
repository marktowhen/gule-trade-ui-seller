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
        views: {
                  '': {
                      templateUrl: '/views/trading-center/trading-center.html'
                      },
                  'trading-center-left@index': {
                      templateUrl: 'views/trading-center/trading-center-left.html'
                    }
                }
      })
      .state('about', {
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        url:"/about"
      })
      .state('login', {
        templateUrl: '/views/login/login.html',
        url:"/login",
        controller: ''
      })
      .state('station-goods.release-commodity',{
        templateUrl:'/views/station-goods/commodity-management/release-commodity.html',
        url:"/release-commodity"
      })
      .state('station-goods.update-goods',{
        templateUrl:'/views/station-goods/commodity-management/update-goods.html',
        url:"/update/goods?gid"
      }).state('trading-center',{
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
      .state('trading-center.order-detail', {
        templateUrl: '/views/trading-center/transaction-management/order-detail.html',
        url:"/order/detail?oid"
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


      .state('station-info.add-school',{
        templateUrl:'/views/information-management/add-school.html',
        url:"/add-school"
      })
       .state('station-info.add-culture',{
        templateUrl:'/views/information-management/add-culture.html',
        url:"/add-culture"
      })
        .state('station-info.add-news',{
        templateUrl:'/views/information-management/add-news.html',
        url:"/add-news"
      })
        .state('station-info.getAll-information',{
        templateUrl:'/views/information-management/getAll-information.html',
        url:"/getAll-information"
      })
        .state('station-info.update-information',{
        templateUrl:'/views/information-management/update-information.html',
        url:"/update-information/:id"
      })
      .state('station-goods.goods-list', {
        templateUrl: '/views/station-goods/goods-management/goodslist.html',
        url:"/goods/list"
      })
      ;
  });
