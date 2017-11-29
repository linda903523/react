<?php
    include 'connect.php';
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