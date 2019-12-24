<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Allow-Credentieals: true');

    include "../conn.inc.php";
    
    $query  = "DELETE FROM siswa WHERE nis='".$_GET['id']."'";
    $result = mysqli_query($conn, $query);

    if($result) {
        echo true;
    } else {
        echo false;
    }

    $conn->close();
?>