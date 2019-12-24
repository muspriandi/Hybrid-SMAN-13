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

            $query  = "INSERT INTO siswa(nis, nama, alamat, jen_kel, userid, userpass, status) VALUE ('$nis','$nama','$alamat','$jen_kel','$userid','$userpass','$status')";

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