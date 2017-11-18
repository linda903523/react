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
    $list = isset($_REQUEST['list']) ? $_REQUEST['list'] : 1;
    $list = json_decode($list);
    $username = $list->username;
    $id = $list->id;
    $id=implode(",",$id);
    $sql="update list set status = 2 where goodsid in (".($id).") and username = '$username' ";
    $result=$conn->query($sql);
    $row='ok';
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>