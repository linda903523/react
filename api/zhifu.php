<?php
 $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'react';
    // 1）连接数据库
    $conn = new mysqli($servername,$username,$password,$database);
    // 检测连接
    if($conn->connect_errno){
        die('连接失败：'.$conn->connect_error);
    }
    $conn->set_charset('utf8');
    header("Access-Control-Allow-Origin: *");
    $shipments = isset($_REQUEST['shipments']) ? $_REQUEST['shipments'] : 1;
     // echo($shipments);
    $shipments = json_decode($shipments);
    $username = $shipments->username;
    $id = $shipments->id;
    $id=implode(",",$id);
    // echo($id);
    $sql="update list set status = 3 where goodsid in (".($id).") and username = '$username' ";
    $result=$conn->query($sql);
    $row='ok';
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>