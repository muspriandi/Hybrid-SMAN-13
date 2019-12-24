<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Allow-Credentieals: true');

    if(isset($_GET['kdmapel']) && isset($_GET['nama_mapel']) && isset($_GET['kkm'])) {
        if(!empty($_GET['kdmapel']) && !empty($_GET['nama_mapel']) && !empty($_GET['kkm']) ) {
            
            include "../conn.inc.php";

            $kdmapel    = $_GET['kdmapel'];
            $nama_mapel = $_GET['nama_mapel'];
            $kkm        = $_GET['kkm'];

            $query  = "UPDATE matapelajaran SET nama_mapel='$nama_mapel', kkm='$kkm' WHERE kdmapel='$kdmapel'";

            $result = mysqli_query($conn, $query);
            if($result) {
                echo true;
            } else {
                echo false;
            }
            $conn->close();
        }
    }
?>