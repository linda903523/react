<?php
    include 'connect.php';

    $goodsid = isset($_GET['goodsid']) ? $_GET['goodsid'] : '';
    
    $username = isset($_GET['username']) ? $_GET['username'] : '';
  
    $number = isset($_GET['number']) ? $_GET['number'] : '';
    
    $color = isset($_GET['color']) ? $_GET['color'] : '';
    
    $size = isset($_GET['size']) ? $_GET['size'] : '';

    $sql = "select username from carlist where username=".$username;
    
    $result = $conn->query($sql);
    
    if($result->num_rows>0){
        
        $sql = "select username from carlist where goodsid=".$goodsid;

        $result = $conn->query($sql);

        if($result->num_rows>0){

            $sql = "update carlist set number=number+".$number;

            $result = $conn->query($sql);

            echo json_encode($result,JSON_UNESCAPED_UNICODE);

        }else{
            
            $sql = "insert into carlist (goodsid,username,number,color,size) values('$goodsid','$username','$number','$color','$size')";

            $result = $conn->query($sql);

            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }
    }

    $conn->close();
?>