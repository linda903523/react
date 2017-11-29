<?php
  include 'connect.php';
    
    $conn->set_charset('utf8');
    
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
    
    $ordernumber=isset($_REQUEST['ordernumber']) ? $_REQUEST['ordernumber'] : '';
    
    $status=isset($_REQUEST['status']) ? $_REQUEST['status'] : '';
    
    if($status==1){
        $sql="update list set status = 2 where ordernumber = $ordernumber and username = '$username' ";
        $result=$conn->query($sql);
        echo json_encode('ok',JSON_UNESCAPED_UNICODE);
        break;
    }else if($status==2){
        $sql="update list set status = 3 where ordernumber = $ordernumber and username = '$username' ";
        $result=$conn->query($sql);
        echo json_encode('ok',JSON_UNESCAPED_UNICODE);
    }
?>