angular.module('starter.siswa', [])
.controller('DataSiswaCtrl', function($scope, $http, $state) {
    var url = "http://localhost/API-SMAN13/";

    $http.get(url+"siswa/r_siswa.php").success(function(response) {
        $scope.listUser = response.records;
    });
    
    $scope.d_siswa = function(id) {
        if(id) {
            $str = url+"siswa/d_siswa.php?id="+id;
            $http.get($str)
            .success(function(response) {
                if(response==true) {
                    swal ( "Berhasil" ,  "Data berhasil dihapus."  ,  "success");
                }
                else {
                    swal ( "Oops..." ,  "Data gagal dihapus." ,  "error" );
                }

                $state.go('admin.r_siswa',[],{location: "replace", reload: true});

            }).error(function(){
                swal ( "Oops..." ,  "Terjadi kesalahan." ,  "error" ); 
            })
        }
        else {
            swal ( "Oops..." ,  "Terjadi kesalahan." ,  "error" );
        }
    }
})

.controller('siswaCtrl', function($scope, $stateParams, $http, $state) {
    var url = "http://localhost/API-SMAN13/";

    $scope.dataSiswa    = {};

    $scope.createSiswa = function() {
        var nis         = $scope.dataSiswa.nis;
        var nama        = $scope.dataSiswa.nama;
        var jen_kel     = $scope.dataSiswa.jen_kel;
        var alamat      = $scope.dataSiswa.alamat;
        var userid      = $scope.dataSiswa.userid;
        var userpass    = $scope.dataSiswa.userpass;
        var status      = $scope.dataSiswa.status;

        if(nis != undefined && nama != undefined && jen_kel != undefined && alamat != undefined && userid != undefined && userpass != undefined && status != undefined) {
            $str = url + "siswa/c_siswa.php?nis="+nis+"&nama="+nama+"&jen_kel="+jen_kel+"&alamat="+alamat+"&userid="+userid+"&userpass="+userpass+"&status="+status;

            $http.get($str)
            .success(function(response) {
                if(response==true) {
                    swal ( "Berhasil" ,  "Data berhasil disimpan."  ,  "success");

                    $state.go('admin.r_siswa',[],{location: "replace", reload: true});
                }
                else {
                    swal ( "Oops..." ,  "Data gagal disimpan." ,  "error" );

                    $state.go('admin.c_siswa',[],{location: "replace", reload: true});
                }
            }).error(function(){
                swal ( "Oops..." ,  "Terjadi kesalahan." ,  "error" );    
            })
        }
        else {
            swal ( "Oops..." ,  "Mohon lengkapi data Anda terlebih dahulu." ,  "warning" );
        }
    }

    $scope.data         = {};

    $http.get(url+"siswa/getData_siswa.php?id="+$stateParams.nis).success(function(response) {
        $scope.data = response.records[0];
    });

    $scope.updateSiswa = function() {
        var nis         = $scope.data.nis;
        var nama        = $scope.data.nama;
        var jen_kel     = $scope.data.jen_kel;
        var alamat      = $scope.data.alamat;
        var userid      = $scope.data.userid;
        var userpass    = $scope.data.userpass;
        var status      = $scope.data.status;

        if(nis != undefined && nama != undefined && jen_kel != undefined && alamat != undefined && userid != undefined && userpass != undefined && status != undefined) {
            $str = url + "siswa/u_siswa.php?nis="+nis+"&nama="+nama+"&jen_kel="+jen_kel+"&alamat="+alamat+"&userid="+userid+"&userpass="+userpass+"&status="+status;
            $http.get($str)
            .success(function(response) {
                if(response==true) {
                    swal ( "Berhasil" ,  "Data berhasil diubah."  ,  "success");

                    $state.go('admin.r_siswa',[],{location: "replace", reload: true});
                }
                else {
                    swal ( "Oops..." ,  "Data gagal diubah." ,  "error" );

                    $state.go('admin.u_siswa',[],{location: "replace", reload: true});
                }
            }).error(function(){
                swal ( "Oops..." ,  "Terjadi kesalahan." ,  "error" );    
            })
        }
        else {
            swal ( "Oops..." ,  "Mohon lengkapi data Anda terlebih dahulu." ,  "warning" );
        }
    }
})

.controller('ubahPassCtrl', function($scope, $http, $state) {
    var url = "http://localhost/API-SMAN13/";

    $scope.nis      = sessionStorage.getItem('login_nis');

    $scope.data         = {};
    
    $scope.updatePass = function() {
        var nis             = $scope.nis 
        var userPassLama    = $scope.data.userPassLama;
        var userPassBaru    = $scope.data.userPassBaru;
        var cUserPassBaru   = $scope.data.cUserPassBaru;

        if(nis != undefined && userPassLama != undefined && userPassBaru != undefined && cUserPassBaru != undefined) {
            if(userPassBaru == cUserPassBaru) {
                
                $http.get(url+"siswa/getData_siswa.php?id="+nis).success(function(response) {
                    $scope.data = response.records[0];

                    if(userPassLama == $scope.data.userpass) {
                        $str = url + "siswa/u_passSiswa.php?nis="+nis+"&userPassBaru="+userPassBaru;
                        $http.get($str)
                        .success(function(response) {
                            if(response==true) {
                                swal ( "Berhasil" ,  "Kata Sandi berhasil diubah."  ,  "success");
            
                                $state.go('siswa.home',[],{location: "replace", reload: true});
                            }
                            else {
                                swal ( "Oops..." ,  "Kata Sandi gagal diubah." ,  "error" );
            
                                $state.go('siswa.u_passSiswa',[],{location: "replace", reload: true});
                            }
                        }).error(function(){
                            swal ( "Oops..." ,  "Terjadi kesalahan." ,  "error" );    
                        })
                    }
                    else {
                        swal ( "Oops..." ,  "Kata Sandi Lama Anda salah." ,  "warning" );

                    }
                });
            }
            else {
                swal ( "Oops..." ,  "Konfirmasi Kata Sandi tidak sesuai." ,  "warning" );  
            }
        }
        else {
            swal ( "Oops..." ,  "Mohon lengkapi data Anda terlebih dahulu." ,  "warning" );
        }
    }
})