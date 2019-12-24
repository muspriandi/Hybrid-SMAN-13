<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Allow-Credentieals: true');

    include "../conn.inc.php";
    
    $query  = "SELECT * FROM siswa";
    $result = $conn->query($query);

    $out = "";
    while($rec = $result->fetch_array(MYSQLI_ASSOC)) {
        if($out != "") { $out .= ","; }
        $out .= '{"nis":"'.$rec['nis'].'",';
        $out .= '"nama":"'.$rec['nama'].'"}';
    }
    $out = (!empty($out)) ? '{"records":['.$out.']}' : '';
    echo $out;

    $conn->close();
?>