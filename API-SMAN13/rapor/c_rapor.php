<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Allow-Credentieals: true');

    if(isset($_GET['kdmapel']) && isset($_GET['nis']) && isset($_GET['pengetahuan']) && isset($_GET['praktik']) && isset($_GET['sikap'])) {
        if(!empty($_GET['kdmapel']) && !empty($_GET['nis']) && !empty($_GET['pengetahuan']) && !empty($_GET['praktik']) && !empty($_GET['sikap'])) {
            
            include "../conn.inc.php";

            $kdmapel        = $_GET['kdmapel'];
            $nis            = $_GET['nis'];
            $pengetahuan    = $_GET['pengetahuan'];
            $praktik        = $_GET['praktik'];
            $sikap          = $_GET['sikap'];

            $query  = "INSERT INTO rapor(id, kdmapel, nis, pengetahuan, praktik, sikap) VALUE ('', '$kdmapel','$nis','$pengetahuan','$praktik','$sikap')";

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