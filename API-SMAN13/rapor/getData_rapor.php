<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Allow-Credentieals: true');

    include "../conn.inc.php";
    
    $query  = "SELECT * FROM rapor WHERE id='".$_GET['id']."'";
    $result = $conn->query($query);

    $out = "";

    if($rs = $result->fetch_array()) {
        if($out != "") { $out .= ","; }
        $out .= '{"id":"'.$rs['id'].'",';
        $out .= '"kdmapel":"'.$rs['kdmapel'].'",';
        $out .= '"nis":"'.$rs['nis'].'",';
        $out .= '"pengetahuan":"'.$rs['pengetahuan'].'",';
        $out .= '"praktik":"'.$rs['praktik'].'",';
        $out .= '"sikap":"'.$rs['sikap'].'"}';

        $out = (!empty($out)) ? '{"records":['.$out.']}' : '';
        echo $out;
    }
    else {
        return false;
    }

    $conn->close();
?>