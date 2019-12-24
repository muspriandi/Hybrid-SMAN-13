angular.module('starter.controllers', [])

.controller('GeneralCtrl', function($scope, $window) {
    $scope.doBack = function() {
        $window.history.back();
    };
})

.controller('NewsCtrl', function($scope, $http, $state, $window) {
    $http.get("https://sman13jkt.sch.id/wp-json/wp/v2/posts")
        .then(function (response) {
            $scope.posts = response.data;
        });

    $scope.doBack = function() {
        $window.history.back();
    };
})

.controller('DetailNewsCtrl', function($scope, $http, $stateParams, $state, $window) {
    $http.get("https://sman13jkt.sch.id/wp-json/wp/v2/posts/"+$stateParams.id)
        .then(function (response) {
            $scope.posts = response.data;
        });

    $scope.doBack = function() {
        $window.history.back();
    };
})

.controller('MapCtrl', function($scope, $ionicLoading, $compile, $state, $window) {
    window.initMap = function ()  {
        var myLatlng = new google.maps.LatLng(-6.119204, 106.895176);
     
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById ("map"),
            mapOptions);

        var contentString  = "<div><a ng-click='clickTest()'>SMA Negeri 13 Jakarta <br/>021 – 430 3676</a></div>" ;
        var compiled = $compile(contentString )($scope);
        var infowindow = new google.maps.InfoWindow({
            content: compiled[0]
        });
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'SMA Negeri 13 Jakarta'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
         $scope.map = map;
    }

    google.maps.event.addDomListener (window, 'load', initMap);
    initMap();
            
    $scope.doBack = function() {
        $window.history.back();
    };
})

.controller('LoginCtrl', function($scope, $http, $state, $ionicHistory, $window) {
    var url = "http://localhost/API-SMAN13/";

    $scope.loginData = {};

    $scope.doLogin = function() {
        var adm_user    = $scope.loginData.userid;
        var adm_pass    = $scope.loginData.userpass;

        if(adm_user == undefined || adm_user== undefined) {
            swal ( "Oops..." ,  "User ID dan Kata Sandi harus diisi." ,  "error" );
        }
        else {
            if(adm_user && adm_pass) {
                str = url+"login.php?id="+adm_user+"&pass="+adm_pass;

                $http.get(str)
                .success(function(response) {
                    if(response!='') {
                        $scope.u = response.records;
                        
                        sessionStorage.setItem('login_status', $scope.u.status_user);
                        sessionStorage.setItem('login_nis', $scope.u.nis_user);
                        sessionStorage.setItem('login_name', $scope.u.nama_user);
                        sessionStorage.setItem('login_alamat', $scope.u.alamat_user);
                        sessionStorage.setItem('login_jen_kel', $scope.u.jen_kel_user);

                        $ionicHistory.nextViewOptions ({
                            disableAnime: true,
                            disableBack: true
                        })
                        
                        // JIKA USER == ADMIN SISTEM
                        if($scope.u.status_user == "admin") {
                            swal ( "Berhasil" ,  "Selamat datang Administrator." ,  "success" , {
                                buttons: false,
                                closeOnClickOutside: false,
                                timer: 2000,
                            })
                            $state.go('admin.home', {id: $scope.u.nis}, {location:'replace', reload:true});
                        }
                        // JIKA USER == SISWA BIASA
                        else {
                            swal ( "Berhasil" ,  "Selamat datang "+$scope.u.nama_user+" ["+$scope.u.nis_user+"]."  ,  "success" , {
                                buttons: false,
                                closeOnClickOutside: false,
                                timer: 2000,
                            })
                            $state.go('siswa.home', {id: $scope.u.nis}, {location:'replace', reload:true});
                        }
                    }
                    else {
                        swal ( "Oops..." ,  "User ID atau Kata Sandi salah." ,  "error" );
                    }
                })
            }
            else {
                swal ( "Oops..." ,  "User ID atau Kata Sandi salah." ,  "error" );
            }
        }
    }

    $scope.doLogout = function() {
        sessionStorage.removeItem('login_status');
        sessionStorage.removeItem('login_nis');
        sessionStorage.removeItem('login_id');
        sessionStorage.removeItem('login_name');
        sessionStorage.removeItem('login_alamat');
        sessionStorage.removeItem('login_jen_kel');

        $ionicHistory.nextViewOptions({
            disableAnime: true,
            disableBack: true
        })

        swal ( "Berhasil" ,  "Anda berhasil keluar dari Sistem." ,  "info", {
            buttons: false,
            closeOnClickOutside: false,
            timer: 2000,
        })

        $state.go('front', {}, {location:'replace', reload:true});
    }

    $scope.doBack = function() {
        $window.history.back();
    };
})

//ADMIN
.controller('AdminCtrl',function($scope, $http) {
    var url = "http://localhost/API-SMAN13/";

	$scope.nis      = sessionStorage.getItem('login_nis');
    $scope.nama     = sessionStorage.getItem('login_name');
    $scope.jen_kel  = sessionStorage.getItem('login_jen_kel');
    $scope.alamat   = sessionStorage.getItem('login_alamat');

    $http.get(url+"siswa/totalSiswa.php").success(function(response) {
        $scope.totalSiswa = response.records;
    });

    $http.get(url+"mapel/totalMapel.php").success(function(response) {
        $scope.totalMapel = response.records;
    });
})

//SISWA
.controller('SiswaCtrl',function($scope, $http) {
    var url = "http://localhost/API-SMAN13/";

    $scope.nis      = sessionStorage.getItem('login_nis');
    $scope.nama     = sessionStorage.getItem('login_name');
    $scope.jen_kel  = sessionStorage.getItem('login_jen_kel');
    $scope.alamat   = sessionStorage.getItem('login_alamat');
})