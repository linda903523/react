<?php
    include 'connect.php';

    $goodsid = isset($_GET['goodsid']) ? $_GET['goodsid'] : '';
    
    $username = isset($_GET['username']) ? $_GET['username'] : '';
  
    $number = isset($_GET['number']) ? $_GET['number'] : '';
    
    $color = isset($_GET['color']) ? $_GET['color'] : '';
    
    $size = isset($_GET['size']) ? $_GET['size'] : '';

    $sql = "select * from carlist where username='$username'";
    
    $result = $conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    if(count($row)>0){
        
        $sql = "select number from carlist where goodsid=$goodsid and color='$color' and size=$size";
       
        $result = $conn->query($sql);
        
        $row = $result->fetch_all(MYSQLI_ASSOC);

        if(count($row)>0){        

            $carlistNum = $row[0]['number'];

            $totalNum = $carlistNum + $number;

            $sql = "update carlist set number=$totalNum where goodsid=$goodsid and color='$color' and size=$size";

            $result = $conn->query($sql);

            echo json_encode('ok',JSON_UNESCAPED_UNICODE);
            
        }else{
            
            $sql = "insert into carlist (goodsid,username,number,color,size) values($goodsid,'$username',$number,'$color',$size)";

            $result = $conn->query($sql);

            $result->close();

            echo json_encode($result,JSON_UNESCAPED_UNICODE);
        }
    }else{
        $sql = "insert into carlist (goodsid,username,number,color,size) values($goodsid,'$username',$number,'$color',$size)";

        $result = $conn->query($sql);

        $result->close();

        echo json_encode($result,JSON_UNESCAPED_UNICODE);
    }

    $conn->close();
?>