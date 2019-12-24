<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Access-Control-Allow-Credentieals: true');

    if(isset($_GET['id']) && isset($_GET['pass'])) {
        if(!empty($_GET['id']) && !empty($_GET['pass'])) {
            
            include "conn.inc.php";

            $username   = $_GET['id'];
            $userpass   = $_GET['pass'];
            $query      = "SELECT * FROM siswa WHERE userid='$username' AND userpass='$userpass'";
            $result     = $conn->query($query);

            $out    = "";
            if($rs = $result->fetch_array()) {
                if($out != "") {
                    $out.=",";
                }
                $out .= '{"id_user":"'. $rs["userid"]. '",';
                $out .= '"nis_user":"'. $rs["nis"]. '",';
                $out .= '"alamat_user":"'. $rs["alamat"]. '",';
                $out .= '"jen_kel_user":"'. $rs["jen_kel"]. '",';
                $out .= '"status_user":"'. $rs["status"]. '",';
                $out .= '"nama_user":"'. $rs["nama"]. '"}';

                
                $out = (!empty($out)) ? '{"records":'.$out.'}' : '';

                echo ($out);
            }
            else {
				return false;
            }
			
            $conn->close();
        }
    }
?>