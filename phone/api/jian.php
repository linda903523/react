<?php
    include 'connect.php';

    $goodsid = isset($_REQUEST['goodsid']) ? $_REQUEST['goodsid'] : '';
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
    $color = isset($_REQUEST['color']) ? $_REQUEST['color'] : '';
    $size = isset($_REQUEST['size']) ? $_REQUEST['size'] : '';
    $sqll = "select * from carlist where goodsid = $goodsid and username = '$username' and color = '$color' and size = '$size'";
    $result = $conn->query($sqll);
    
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    $g = $row[0]["number"]-1;
    
    
    $sql = "update carlist set number = $g where  goodsid = $goodsid and username = '$username' and color = '$color' and size = '$size' ";
    
    $result1 = $conn->query($sql);
       
    echo json_encode($result1,JSON_UNESCAPED_UNICODE);

    $conn->close();
?>