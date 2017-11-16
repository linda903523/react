<?php
    include 'connect.php';

    $order = isset($_REQUEST['order']) ? $_REQUEST['order'] : 1;
    
    $order = json_decode($order);
    
    for ($x=0; $x<count($order); $x++) {
        $c=$order[$x]["ordernumber"];
        $cc=$order[$x]["username"];
        $ccc=$order[$x]["goodsid"];
        $cccc=$order[$x]["number"];
    } 
    
    $sql="insert into list(ordernumber, username, goodsid,number) values(1,1,1,1)";
    
    $result=$conn->query($sql);
        
    echo json_encode($order,JSON_UNESCAPED_UNICODE);

    $conn->close();
?>