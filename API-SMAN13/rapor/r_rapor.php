<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Allow-Credentieals: true');

    include "../conn.inc.php";
    
    $query  = " SELECT
                    matapelajaran.nama_mapel,
                    siswa.nama,
                    rapor.*
                FROM
                    matapelajaran
                    INNER JOIN rapor ON rapor.kdmapel = matapelajaran.kdmapel
                    INNER JOIN siswa ON siswa.nis = rapor.nis";

    $result = $conn->query($query);

    $out = "";
    while($rec = $result->fetch_array(MYSQLI_ASSOC)) {
        if($out != "") { $out .= ","; }
        $out .= '{"id":"'.$rec['id'].'",';
        $out .= '"nis":"'.$rec['nis'].'",';
        $out .= '"nama":"'.$rec['nama'].'",';
        $out .= '"kdmapel":"'.$rec['kdmapel'].'",';
        $out .= '"nama_mapel":"'.$rec['nama_mapel'].'"}';
    }
    $out = (!empty($out)) ? '{"records":['.$out.']}' : '';
    echo $out;

    $conn->close();
?>