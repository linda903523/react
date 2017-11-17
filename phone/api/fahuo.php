<?php
 $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'react';
    // 1）连接数据库
    $conn = new mysqli($servername,$username,$password,$database);
    // 检测连接
    if($conn->connect_errno){
        die('连接失败：'.$conn->connect_error);
    }
    $conn->set_charset('utf8');
    header("Access-Control-Allow-Origin: *");
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : 1;
    $sql="select * from list where username= '$username' and status=3";
    $result=$conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($row);
    $a=array();
    $c=array();
    for ($x=0; $x<count($row); $x++) {
        $g=$row[$x]["goodsid"];
        $cc=$row[$x]["number"];
        array_push($a,$g);
        array_push($c,$cc);
    } 
    $b=implode(",",$a);
    $sql1="select*from goods where id in(".($b).")";
    $result1=$conn->query($sql1);
    $row1 = $result1->fetch_all(MYSQLI_ASSOC);
    $b=array();
    for ($x=0; $x<count($row1); $x++) {
         $obj=new StdClass;
         $number=$c[$x];
         $img=$row1[$x]["img"];
         $id=$row1[$x]["id"];
         $name=$row1[$x]["name"];
         $price=$row1[$x]["price"];
         $obj->number="$number";
         $obj->img="$img";
         $obj->name="$name";
         $obj->price="$price";
         $obj->id="$id";
         array_push($b,$obj);
    } 
    echo json_encode($b,JSON_UNESCAPED_UNICODE);
?>