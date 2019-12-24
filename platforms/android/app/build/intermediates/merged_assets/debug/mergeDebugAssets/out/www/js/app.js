// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['starter.controllers','ionic','starter.siswa','starter.matapelajaran','starter.rapor'])

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
  })
  .state('masuk', {
    url: '/masuk',
    cache: false,
    templateUrl: 'templates/masuk.html',
    controller: 'LoginCtrl'
  })

  //  FUNGSI UNTUK ADMIN
  .state('admin', {
    url: '/admin',
    abstract: true,
    cache: false,
    templateUrl: function() {
      if(sessionStorage.getItem('login_status') == "admin") {
        return 'templates/admin/menu.html'
      }
      else {
        return 'templates/front.html'
      }
    }
  })
  // DASHBOARD
  .state('admin.home', {
    url: '/home',
    cache: false,
    views: {
      'menuContentAdmin' : {
        templateUrl: 'templates/admin/home.html',
        controller: 'AdminCtrl'
      }
    }
  })
  // CRUD SISWA
  .state('admin.r_siswa', {
    url: '/r_siswa',
    cache: false,
    views: {
      'menuContentAdmin' : {
        templateUrl: 'templates/admin/r_siswa.html',
        controller: 'DataSiswaCtrl'
      }
    }
  })
  .state('admin.c_siswa', {
    url: '/c_siswa',
    cache: false,
    views: {
      'menuContentAdmin' : {
        templateUrl: 'templates/admin/c_siswa.html',
        controller: 'siswaCtrl'
      }
    }
  })
  .state('admin.u_siswa', {
    url: '/u_siswa/:nis',
    cache: false,
    views: {
      'menuContentAdmin' : {
        templateUrl: 'templates/admin/u_siswa.html',
        controller: 'siswaCtrl'
      }
    }
  })
  // CRUD MATA PELAJARAN
  .state('admin.r_mapel', {
    url: '/r_mapel',
    cache: false,
    views: {
      'menuContentAdmin' : {
        templateUrl: 'templates/admin/r_mapel.html',
        controller: 'DataMapelCtrl'
      }
    }
  })
  .state('admin.c_mapel', {
    url: '/c_mapel',
    cache: false,
    views: {
      'menuContentAdmin' : {
        templateUrl: 'templates/admin/c_mapel.html',
        controller: 'mapelCtrl'
      }
    }
  })
  .state('admin.u_mapel', {
    url: '/u_mapel/:kdmapel',
    cache: false,
    views: {
      'menuContentAdmin' : {
        templateUrl: 'templates/admin/u_mapel.html',
        controller: 'mapelCtrl'
      }
    }
  })
  // CRUD RAPOR
  .state('admin.r_rapor', {
    url: '/r_rapor',
    cache: false,
    views: {
      'menuContentAdmin' : {
        templateUrl: 'templates/admin/r_rapor.html',
        controller: 'DataRaporCtrl'
      }
    }
  })
  .state('admin.c_rapor', {
    url: '/c_rapor',
    cache: false,
    views: {
      'menuContentAdmin' : {
        templateUrl: 'templates/admin/c_rapor.html',
        controller: 'raporCtrl'
      }
    }
  })
  .state('admin.u_rapor', {
    url: '/u_rapor/:id',
    cache: false,
    views: {
      'menuContentAdmin' : {
        templateUrl: 'templates/admin/u_rapor.html',
        controller: 'raporCtrl'
      }
    }
  })

  // FUNGSI UNTUK SISWA
  .state('siswa', {
    url: '/siswa',
    abstract: true,
    cache: false,
    templateUrl: function() {
      if(sessionStorage.getItem('login_status') == "siswa") {
        return 'templates/siswa/menu.html'
      }
      else {
        return 'templates/front.html'
      }
    }
  })
  // DASHBOARD
  .state('siswa.home', {
    url: '/home',
    cache: false,
    views: {
      'menuContentSiswa' : {
        templateUrl: 'templates/siswa/home.html',
        controller: 'SiswaCtrl'
      }
    }
  })
  // UBAH KATA SANDI
  .state('siswa.u_passSiswa', {
    url: '/u_passSiswa',
    cache: false,
    views: {
      'menuContentSiswa' : {
        templateUrl: 'templates/siswa/u_passSiswa.html',
        controller: 'ubahPassCtrl'
      }
    }
  })
  // VIEW RAPOR
  .state('siswa.raporSiswa', {
    url: '/raporSiswa',
    cache: false,
    views: {
      'menuContentSiswa' : {
        templateUrl: 'templates/siswa/raporSiswa.html',
        controller: 'raporSiswaCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/front');
})