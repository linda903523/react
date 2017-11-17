<?php
    include 'connect.php';

    $collection = isset($_REQUEST['collection']) ? $_REQUEST['collection'] : '';
    
    $keyword = isset($_REQUEST['keyword']) ? $_REQUEST['keyword'] : '';
    
    if($collection=='商品'){
        $collection='goods';
    }else if($collection=='毒文'){
        $collection='article';
    }
    if( $collection=='goods'){
        $sql = 'select * from ' . $collection . ' where concat(name,price,decorations) like "%' . $keyword . '%"';
    }else{
        $sql = 'select * from ' . $collection . ' where concat(title,content,readqty,zan) like "%' . $keyword . '%"';
    }
    
    $result = $conn->query($sql);
    
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    $result->free();

    $conn->close();   
?>
