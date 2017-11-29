<?php
    include 'connect.php';
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