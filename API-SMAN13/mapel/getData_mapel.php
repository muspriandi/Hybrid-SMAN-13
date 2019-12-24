<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Allow-Credentieals: true');

    include "../conn.inc.php";
    
    $query  = "SELECT * FROM matapelajaran WHERE kdmapel='".$_GET['id']."'";
    $result = $conn->query($query);

    $out = "";

    if($rs = $result->fetch_array()) {
        if($out != "") { $out .= ","; }
        $out .= '{"kdmapel":"'.$rs['kdmapel'].'",';
        $out .= '"nama_mapel":"'.$rs['nama_mapel'].'",';
        $out .= '"kkm":"'.$rs['kkm'].'"}';

        $out = (!empty($out)) ? '{"records":['.$out.']}' : '';
        echo $out;
    }
    else {
        return false;
    }

    $conn->close();
?>