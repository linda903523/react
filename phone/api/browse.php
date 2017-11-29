<?php
    include 'connect.php';
    $goodsid = isset($_REQUEST['goodsid']) ? $_REQUEST['goodsid'] : '';
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
    $namec = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
    $nameinter = isset($_REQUEST['nameinter']) ? $_REQUEST['nameinter'] : '';
    $delename = isset($_REQUEST['delename']) ? $_REQUEST['delename'] : '';
    $goodsidx = isset($_REQUEST['goodsidx']) ? $_REQUEST['goodsidx'] : '';
    if(isset($_REQUEST['delename'])){
        $sqlc="delete  from browse where username='$delename' and goodsid=$goodsidx";
         $resultc=$conn->query($sqlc);
        $sqll = "select * from browse where username='$delename' ";
        $resultl=$conn->query($sqll);
        $row = $resultl->fetch_all(MYSQLI_ASSOC);
        $b=array();
        $y=array();
        for($x=0;$x<count($row);$x++){
            $a = $row[$x]["goodsid"];
            $time = $row[$x]["addTime"];
            array_push($b,$a);
            array_push($y,$time);
        }
        $b=implode(",",$b);
        $sqlc="select*from goods where id in(".($b).")";
        $resultc=$conn->query($sqlc);
        $row = $resultc->fetch_all(MYSQLI_ASSOC);
        $m=array();
        for ($x=0; $x<count($row); $x++) {
            $obj=new StdClass;
            $addTime=$y[$x];
            $img=$row[$x]["img"];
            $id=$row[$x]["id"];
            $name=$row[$x]["name"];
            $obj->addTime="$addTime";
            $obj->img="$img";
            $obj->name="$name";
            $obj->id="$id";
            array_push($m,$obj);
        } 
        echo json_encode($m,JSON_UNESCAPED_UNICODE);
    }
    if(isset($_REQUEST['nameinter'])){
        $sqlx="select*from browse where goodsid=$goodsid and username='$nameinter'";
        $resultx=$conn->query($sqlx);
        $rowx = $resultx->fetch_all(MYSQLI_ASSOC);
        if(count($rowx)>0){
            $sqld="delete  from browse where username='$nameinter' and goodsid=$goodsid";
            $resultd=$conn->query($sqld);
        }
        $sql="insert into browse(goodsid, username) values($goodsid,'$nameinter')";
        $result=$conn->query($sql);
    }
    if(isset($_REQUEST['username'])){
        $sqll = "select * from browse where username='$username' ";
        $resultl=$conn->query($sqll);
        $row = $resultl->fetch_all(MYSQLI_ASSOC);
        $b=array();
        $y=array();
        for($x=0;$x<count($row);$x++){
            $a = $row[$x]["goodsid"];
            $time = $row[$x]["addTime"];
            array_push($b,$a);
            array_push($y,$time);
        }
        $b=implode(",",$b);
        $sqlc="select*from goods where id in(".($b).")";
        $resultc=$conn->query($sqlc);
        $row = $resultc->fetch_all(MYSQLI_ASSOC);
        $m=array();
        for ($x=0; $x<count($row); $x++) {
             $obj=new StdClass;
             $addTime=$y[$x];
             $img=$row[$x]["img"];
             $id=$row[$x]["id"];
             $name=$row[$x]["name"];
             $obj->addTime="$addTime";
             $obj->img="$img";
             $obj->name="$name";
             $obj->id="$id";
             array_push($m,$obj);
        } 
        echo json_encode($m,JSON_UNESCAPED_UNICODE);
    }
    if(isset($_REQUEST['name'])){
        $sqlc="delete  from browse where username='$namec'";
        $result=$conn->query($sqlc);
        echo json_encode('',JSON_UNESCAPED_UNICODE);
    }
?>