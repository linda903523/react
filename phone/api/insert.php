<?php
    include 'connect.php';
    $order = isset($_REQUEST['order']) ? $_REQUEST['order'] : 1;
    $order = json_decode($order);
    for ($x=0;$x<count($order);$x++){
        $c=$order[$x]->ordernumber;
        $cc=$order[$x]->username;
        $ccc=$order[$x]->goodsid;
        $cccc=$order[$x]->number;

        $sqls="select goodsid from list where goodsid='$ccc' ";
        $result = $conn->query($sqls);
        if($result->num_rows>0){
            $sqlsd = "update list set number='$cccc' where goodsid='$ccc' ";
            $result = $conn->query($sqlsd);
        } else {
            $sql="insert into list(ordernumber, username, goodsid,number) values($c,'$cc',$ccc,$cccc)";
            $result=$conn->query($sql);
        }
        
    }
    echo json_encode($order,JSON_UNESCAPED_UNICODE);

    $conn->close();
?>