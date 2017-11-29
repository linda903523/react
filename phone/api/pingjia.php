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
    $pingjia = isset($_REQUEST['pingjia']) ? $_REQUEST['pingjia'] : 1;
     // echo($shipments);
    $pingjia = json_decode($pingjia);
    $username = $pingjia->username;
    $id = $pingjia->id;
    $id=implode(",",$id);
    // echo($id);
    $sql="update list set status = 4 where goodsid in (".($id).") and username = '$username' ";
    $result=$conn->query($sql);
    $row='ok';
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>