angular.module('starter.rapor', [])
.controller('DataRaporCtrl', function($scope, $http, $state) {
    var url = "http://localhost/API-SMAN13/";

    $http.get(url+"rapor/r_rapor.php").success(function(response) {
        $scope.listRapor = response.records;
    });
    
    $scope.d_rapor = function(id) {
        if(id) {
            $str = url+"rapor/d_rapor.php?id="+id;
            $http.get($str)
            .success(function(response) {
                if(response==true) {
                    swal ( "Berhasil" ,  "Data berhasil dihapus."  ,  "success");
                }
                else {
                    swal ( "Oops..." ,  "Data gagal dihapus." ,  "error" );
                }

                $state.go('admin.r_rapor',[],{location: "replace", reload: true});

            }).error(function(){
                swal ( "Oops..." ,  "Terjadi kesalahan." ,  "error" ); 
            })
        }
        else {
            swal ( "Oops..." ,  "Terjadi kesalahan." ,  "error" );
        }
    }
})

.controller('raporCtrl', function($scope, $stateParams, $http, $state) {
    var url = "http://localhost/API-SMAN13/";

    $http.get(url+"siswa/r_siswa.php").success(function(response) {
        $scope.cmbSiswa = response.records;
    });

    $http.get(url+"mapel/r_mapel.php").success(function(response) {
        $scope.cmbMapel = response.records;
    });

    $scope.dataRapor    = {};

    $scope.createRapor = function() {
        var kdmapel     = $scope.dataRapor.kdmapel;
        var nis         = $scope.dataRapor.nis;
        var pengetahuan = $scope.dataRapor.pengetahuan;
        var praktik     = $scope.dataRapor.praktik;
        var sikap       = $scope.dataRapor.sikap;

        if(kdmapel != undefined && nis != undefined && pengetahuan != undefined && praktik != undefined && sikap != undefined) {
            $str = url + "rapor/c_rapor.php?kdmapel="+kdmapel+"&nis="+nis+"&pengetahuan="+pengetahuan+"&praktik="+praktik+"&sikap="+sikap;

            $http.get($str)
            .success(function(response) {
                if(response==true) {
                    swal ( "Berhasil" ,  "Data berhasil disimpan."  ,  "success");

                    $state.go('admin.r_rapor',[],{location: "replace", reload: true});
                }
                else {
                    swal ( "Oops..." ,  "Data gagal disimpan." ,  "error" );

                    $state.go('admin.c_rapor',[],{location: "replace", reload: true});
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

    $http.get(url+"rapor/getData_rapor.php?id="+$stateParams.id).success(function(response) {
        $scope.data = response.records[0];
    });

    $scope.updateRapor = function() {

        var id          = $scope.data.id;
        var kdmapel     = $scope.data.kdmapel;
        var nis         = $scope.data.nis;
        var pengetahuan = $scope.data.pengetahuanubah;
        var praktik     = $scope.data.praktikubah;
        var sikap       = $scope.data.sikapubah;
        
        if(pengetahuan == undefined) {
            pengetahuan = $scope.data.pengetahuan;
        }
        if(praktik == undefined) {
            praktik = $scope.data.praktik;
        }
        if(sikap == undefined) {
            sikap = $scope.data.sikap;
        }

        if(id != undefined && kdmapel != undefined && nis != undefined && pengetahuan != undefined && praktik != undefined && sikap != undefined) {
            $str = url + "rapor/u_rapor.php?id="+id+"&kdmapel="+kdmapel+"&nis="+nis+"&pengetahuan="+pengetahuan+"&praktik="+praktik+"&sikap="+sikap;
            
            $http.get($str)
            .success(function(response) {
                if(response==true) {
                    swal ( "Berhasil" ,  "Data berhasil diubah."  ,  "success");

                    $state.go('admin.r_rapor',[],{location: "replace", reload: true});
                }
                else {
                    swal ( "Oops..." ,  "Data gagal diubah." ,  "error" );

                    $state.go('admin.u_rapor',[],{location: "replace", reload: true});
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

.controller('raporSiswaCtrl', function($scope, $stateParams, $http, $state) {
    var url = "http://localhost/API-SMAN13/";
    
    $scope.nis  = sessionStorage.getItem('login_nis');
    $scope.nama = sessionStorage.getItem('login_name');

    $scope.dataRapor    = {};

    $http.get(url+"rapor/r_raporSiswa.php?id="+$scope.nis).success(function(response) {
        $scope.dataRapor = response.records;
    });
})