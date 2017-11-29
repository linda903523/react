<?php
    include 'connect.php';

    $pageNo = isset($_REQUEST['pageNo']) ? $_REQUEST['pageNo'] : 1;
   
    $qty = isset($_REQUEST['qty']) ? $_REQUEST['qty'] : 7; 

    $sql = 'select * from article';

    $result = $conn->query($sql);
    
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    $res = array(
        'data' => array_slice($row, ($pageNo-1)*$qty,$qty), 
        'total' => count($row),
        'pageNo' => $pageNo,
        'qty' => $qty
    );
    
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

    $conn->close();
?>