<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Allow-Credentieals: true');

    if(isset($_GET['nis']) && isset($_GET['nama']) && isset($_GET['jen_kel']) && isset($_GET['alamat']) && isset($_GET['userid']) && isset($_GET['userpass']) && isset($_GET['status'])) {
        if(!empty($_GET['nis']) && !empty($_GET['nama']) && !empty($_GET['jen_kel']) && !empty($_GET['alamat']) && !empty($_GET['userid']) && !empty($_GET['userpass']) && !empty($_GET['status'])) {
            
            include "../conn.inc.php";

            $nis        = $_GET['nis'];
            $nama       = $_GET['nama'];
            $jen_kel    = $_GET['jen_kel'];
            $alamat     = $_GET['alamat'];
            $userid     = $_GET['userid'];
            $userpass   = $_GET['userpass'];
            $status     = $_GET['status'];

            $query  = "UPDATE siswa SET nama='$nama', alamat='$alamat', jen_kel='$jen_kel', userid='$userid', userpass='$userpass', status='$status' WHERE nis='$nis'";

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