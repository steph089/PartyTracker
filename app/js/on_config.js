'use strict';

/**
 * @ngInject
 */
module.exports = function($stateProvider, $urlRouterProvider, $httpProvider) {
//	$urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('home',
    {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'HomeCtrl',
      title: 'Home'
    })
    .state('login',
    {
      url: '/login',
      templateUrl: 'login.html',
      controller: 'LoginCtrl',
      isPublic: true
    })
  	.state('home.Main',
    {
      url: '/Main',
      templateUrl: 'Main.html',
      controller: 'MainCtrl',
      title: 'Main',
    })
    .state('home.Battle',
    {
      url: '/Battle',
      templateUrl: 'Battle.html',
      controller: 'BattleCtrl',
      title: 'Battle',
    })
    .state('home.Documents',
    {
      url: '/Ducuments',
      templateUrl: 'Documents.html',
      controller: 'DocumentsCtrl',
      title: 'Document',
    })
        .state('home.Items',
    {
      url: '/Items',
      templateUrl: 'Items.html',
      controller: 'ItemsCtrl',
      title: 'Items',
    });

 // $httpProvider.interceptors.push('AuthInterceptor');
};
