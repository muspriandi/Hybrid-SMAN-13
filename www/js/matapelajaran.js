angular.module('starter.matapelajaran', [])
.controller('DataMapelCtrl', function($scope, $http, $state) {
    var url = "http://localhost/API-SMAN13/";

    $http.get(url+"mapel/r_mapel.php").success(function(response) {
        $scope.listMapel = response.records;
    });
    
    $scope.d_mapel = function(id) {
        if(id) {
            $str = url+"mapel/d_mapel.php?id="+id;

            $http.get($str)
            .success(function(response) {
                if(response==true) {
                    swal ( "Berhasil" ,  "Data berhasil dihapus."  ,  "success");
                }
                else {
                    swal ( "Oops..." ,  "Data gagal dihapus." ,  "error" );
                }

                $state.go('admin.r_mapel',[],{location: "replace", reload: true});

            }).error(function(){
                swal ( "Oops..." ,  "Terjadi kesalahan." ,  "error" ); 
            })
        }
        else {
            swal ( "Oops..." ,  "Terjadi kesalahan." ,  "error" );
        }
    }
})

.controller('mapelCtrl', function($scope, $stateParams, $http, $state) {
    var url = "http://localhost/API-SMAN13/";

    $scope.dataMapel    = {};

    $scope.createMapel = function() {
        var kdmapel     = $scope.dataMapel.kdmapel;
        var nama_mapel  = $scope.dataMapel.nama_mapel;
        var kkm         = $scope.dataMapel.kkm;

        if(kdmapel != undefined && nama_mapel != undefined && kkm != undefined) {
            $str = url + "mapel/c_mapel.php?kdmapel="+kdmapel+"&nama_mapel="+nama_mapel+"&kkm="+kkm;

            $http.get($str)
            .success(function(response) {
                if(response==true) {
                    swal ( "Berhasil" ,  "Data berhasil disimpan."  ,  "success");

                    $state.go('admin.r_mapel',[],{location: "replace", reload: true});
                }
                else {
                    swal ( "Oops..." ,  "Data gagal disimpan." ,  "error" );

                    $state.go('admin.c_mapel',[],{location: "replace", reload: true});
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

    $http.get(url+"mapel/getData_mapel.php?id="+$stateParams.kdmapel).success(function(response) {
        $scope.data = response.records[0];
    });

    $scope.updateMapel = function() {
        var kdmapel     = $scope.data.kdmapel;
        var nama_mapel  = $scope.data.nama_mapel;
        var kkm         = $scope.data.kkmubah;
        if(kkm == undefined) {
            kkm =$scope.data.kkm;
        }

        if(kdmapel != undefined && nama_mapel != undefined && kkm != undefined) {
            $str = url + "mapel/u_mapel.php?kdmapel="+kdmapel+"&nama_mapel="+nama_mapel+"&kkm="+kkm;
			
            $http.get($str)
            .success(function(response) {
                if(response==true) {
                    swal ( "Berhasil" ,  "Data berhasil diubah."  ,  "success");

                    $state.go('admin.r_mapel',[],{location: "replace", reload: true});
                }
                else {
                    swal ( "Oops..." ,  "Data gagal diubah." ,  "error" );

                    $state.go('admin.u_mapel',[],{location: "replace", reload: true});
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