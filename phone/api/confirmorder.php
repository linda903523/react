<?php
    include 'connect.php';
    $order = isset($_GET['order']) ? $_GET['order'] : '';
    $order = json_decode($order);
    for($i=0;$i<count($order);$i++){
        $ordernumber = $order[$i]->ordernumber;
        $goodsid = $order[$i]->goodsid;
        $username = $order[$i]->username;
        $number = $order[$i]->number;
        $color = $order[$i]->color;
        $size = $order[$i]->size;
        $name = $order[$i]->name;
        $totalprice = $order[$i]->totalprice;
        $imgurl = $order[$i]->imgurl;

        $sql="insert into list(ordernumber,goodsid,username,number,status,color,size,name,totalprice,imgurl) values ('$ordernumber','$goodsid','$username','$number','1','$color',' $size','$name','$totalprice','$imgurl')";
        $sql1 = "delete from carlist where username='$username' and goodsid='$goodsid'";
        $result = $conn->query($sql);
        $result1 = $conn->query($sql1);
    }
    echo 'ok';
?>