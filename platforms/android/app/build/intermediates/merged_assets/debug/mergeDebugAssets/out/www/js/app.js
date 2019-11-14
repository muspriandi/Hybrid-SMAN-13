// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['starter.controllers','ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.navBar.alignTitle('center');
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
  .state('front', {
    url: '/front',
    templateUrl: 'templates/front.html'
  })
  .state('struktur', {
    url: '/struktur',
    templateUrl: 'templates/struktur.html',
    controller: 'GeneralCtrl'
  })
  .state('profil', {
    url: '/profil',
    templateUrl: 'templates/profil.html',
    controller: 'GeneralCtrl'
  })
  .state('berita', {
    url: '/berita',
    templateUrl: 'templates/berita.html',
    controller: 'NewsCtrl'
  })
  .state('detailnews', {
    url: '/news/detailnews/:id',
    templateUrl: 'templates/detailnews.html',
    controller: 'DetailNewsCtrl'
  })
  .state('visi&misi', {
    url: '/visi&misi',
    templateUrl: 'templates/visi&misi.html',
    controller: 'GeneralCtrl'
  })
  .state('fasilitas', {
    url: '/fasilitas',
    templateUrl: 'templates/fasilitas.html',
    controller: 'GeneralCtrl'
  })
  .state('location', {
    url: '/location',
    templateUrl: 'templates/location.html',
    controller: 'MapCtrl'
  });

  $urlRouterProvider.otherwise('/front');
})
