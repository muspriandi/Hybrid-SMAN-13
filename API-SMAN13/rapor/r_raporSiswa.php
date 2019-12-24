<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Allow-Credentieals: true');

    include "../conn.inc.php";
    
    $query  = " SELECT
                    matapelajaran.nama_mapel, matapelajaran.kkm,
                    siswa.nama,
                    rapor.*
                FROM
                    matapelajaran
                    INNER JOIN rapor ON rapor.kdmapel = matapelajaran.kdmapel
                    INNER JOIN siswa ON siswa.nis = rapor.nis
                WHERE
                    rapor.nis='".$_GET['id']."'
                ORDER BY
                    matapelajaran.kdmapel ASC";

    $result = $conn->query($query);

    $nomor = 1;
    $out = "";
    while($rec = $result->fetch_array(MYSQLI_ASSOC)) {
        if($rec['sikap'] > 80) {
            $sikap = "A";
        }
        else {
            if($rec['sikap'] > 60 || $rec['sikap'] <= 80) {
                $sikap = "B";
            }
            else {
                if($rec['sikap'] > 40 || $rec['sikap'] <= 60) {
                    $sikap = "C";
                }
                else {
                    $sikap = "D";
                }
            }
        }

        if($out != "") { $out .= ","; }
        $out .= '{"nomor":"'.$nomor++.'",';
        $out .= '"kdmapel":"'.$rec['kdmapel'].'",';
        $out .= '"nama_mapel":"'.$rec['nama_mapel'].'",';
        $out .= '"kkm":"'.$rec['kkm'].'",';
        $out .= '"pengetahuan":"'.$rec['pengetahuan'].'",';
        $out .= '"praktik":"'.$rec['praktik'].'",';
        $out .= '"sikap":"'.$sikap.'"}';
    }
    $out = (!empty($out)) ? '{"records":['.$out.']}' : '';
    echo $out;

    $conn->close();
?>