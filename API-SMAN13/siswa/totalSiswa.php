<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Allow-Credentieals: true');

    include "../conn.inc.php";
    
    $query  = "SELECT count(nis) FROM siswa";
    $result = $conn->query($query);

    $out = "";
    if($rs = $result->fetch_array()) {
        $out = $rs['count(nis)'];
        $out = (!empty($out)) ? '{"records":"'.$out.'"}' : '{"records":"0"}';
        echo $out;
    }
    else {
        return false;
    }

    $conn->close();
?>