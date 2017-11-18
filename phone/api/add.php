<?php
    include 'connect.php';

    $goodsid = isset($_REQUEST['goodsid']) ? $_REQUEST['goodsid'] : 1;
    
    $sqll="select*from carlist where goodsid in(".($goodsid).")";
    
    $result=$conn->query($sqll);
    
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    $g=$row[0]["number"]+1;
    
    $username=$row[0]["username"];
    
    $sql="update carlist set number = $g where  goodsid = $goodsid and username = '$username' ";
    
    $result1=$conn->query($sql);
       
    echo json_encode($result1,JSON_UNESCAPED_UNICODE);

    $conn->close();
?>