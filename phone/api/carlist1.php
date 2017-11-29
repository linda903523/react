<?php
    include 'connect.php';

    $username = isset($_GET['username']) ? $_GET['username'] : '';

    $sql="select * from carlist where username='$username'";
    
    $result=$conn->query($sql);
    
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    $b=array();
    for ($x=0; $x<count($row); $x++){
        $obj=new StdClass;
        $goodsid = $row[$x]["goodsid"];
        $sql="select*from goods where id = $goodsid";
        $result = $conn->query($sql);
        $row1 = $result->fetch_all(MYSQLI_ASSOC);
        $img = $row1[0]["img"];
        $id = $row1[0]["id"];
        $price = $row1[0]["price"];
        $name = $row1[0]["name"];
        $number = $row[$x]["number"];
        $color = $row[$x]["color"];
        $size = $row[$x]["size"];
        $obj->number="$number";
        $obj->img="$img";
        $obj->name="$name";
        $obj->price="$price";
        $obj->id="$id";
        $obj->color = "$color";
        $obj->size = "$size";
        array_push($b,$obj);
    }

    echo json_encode($b,JSON_UNESCAPED_UNICODE);
?>