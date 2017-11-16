<?php
    include 'connect.php';
    
    $token = isset($_GET['token']) ? $_GET['token'] : '';
    
    $sql = "select username from register where token='$token'";
    
    $result = $conn->query($sql);
    
    if($result->num_rows>0){
        $row = $result->fetch_all(MYSQLI_ASSOC);
        $row = $row[0]['username'];
        echo ($row);        
    } else {
        echo "赶快去去登录吧";
    } 
    
    $result->close();
    
    $conn->close();
?>