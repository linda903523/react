<?php
    include 'connect.php';

    $title = isset($_REQUEST['title']) ? $_REQUEST['title'] : '';

    $keyword = isset($_REQUEST['keyword']) ? $_REQUEST['keyword'] : '';

    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';

    if(isset($_REQUEST['clear']) ){
        
        $sql = "delete from history where username = '$username'";
        
        $result = $conn->query($sql);
        
        echo json_encode($result,JSON_UNESCAPED_UNICODE);
        
    }else if(isset($_REQUEST['add'])){
       
        $sql = "insert into history (username,title,keyword) values ('$username','$title','$keyword')";
        
        $result = $conn->query($sql);
        
        echo json_encode($result,JSON_UNESCAPED_UNICODE);
    }
    
    $conn->close();
?>