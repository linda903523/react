<?php
    include 'connect.php';
    $username = isset($_GET['username']) ? $_GET['username'] : '';

    $sql="select * from list where username = '$username' order by addTime desc";
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $c =1;
    $orderlist=array();
    for($i=0;$i<count($row);$i+=$c){ 
        if($i==count($row)){
            break;
        }
        $ordern = $row[$i]['ordernumber'];
        $arr = array();
        array_push($arr,$row[$i]);
        $c = 1;
        for($j=$i+1;$j<count($row);$j++){
            if($row[$j]['ordernumber']==$ordern){
                $c++;
                array_push($arr,$row[$j]);
            }
        }
        array_push($orderlist,$arr);
    }
    echo json_encode($orderlist,JSON_UNESCAPED_UNICODE);
?>