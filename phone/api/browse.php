<?php
    include 'connect.php';
    $goodsid = isset($_REQUEST['goodsid']) ? $_REQUEST['goodsid'] : '';
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
    $sql="insert into browse(goodsid, username) values($goodsid,'$username')";
    $result=$conn->query($sql);
    $sqll = "select * from browse where username='$username' ";
    $resultl=$conn->query($sqll);
    $row = $resultl->fetch_all(MYSQLI_ASSOC);
    $b=array();
    for($x=0;$x<count($row);$x++){
        $a = $row[$x]["goodsid"];
        array_push($b,$a);
    }
    $b = array_flip($b);
    $b = array_keys($b);
    $b=implode(",",$b);
    $sql1="select*from goods where id in(".($b).")";
    $result1=$conn->query($sql1);
    $row = $result1->fetch_all(MYSQLI_ASSOC);
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>