<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Allow-Credentieals: true');

    if(isset($_GET['nis']) && isset($_GET['userPassBaru'])) {
        if(!empty($_GET['nis']) && !empty($_GET['userPassBaru'])) {
            
            include "../conn.inc.php";

            $nis            = $_GET['nis'];
            $userPassBaru   = $_GET['userPassBaru'];

            $query  = "UPDATE siswa SET userpass='$userPassBaru' WHERE nis='$nis'";

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