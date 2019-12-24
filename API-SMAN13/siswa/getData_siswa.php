<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Allow-Credentieals: true');

    include "../conn.inc.php";
    
    $query  = "SELECT * FROM siswa WHERE nis='".$_GET['id']."'";
    $result = $conn->query($query);

    $out = "";

    if($rs = $result->fetch_array()) {
        if($out != "") { $out .= ","; }
        $out .= '{"nis":"'.$rs['nis'].'",';
        $out .= '"nama":"'.$rs['nama'].'",';
        $out .= '"jen_kel":"'.$rs['jen_kel'].'",';
        $out .= '"alamat":"'.$rs['alamat'].'",';
        $out .= '"userid":"'.$rs['userid'].'",';
        $out .= '"userpass":"'.$rs['userpass'].'",';
        $out .= '"status":"'.$rs['status'].'"}';

        $out = (!empty($out)) ? '{"records":['.$out.']}' : '';
        echo $out;
    }
    else {
        return false;
    }

    $conn->close();
?>