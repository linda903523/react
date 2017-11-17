<?php
    include 'connect.php';
    
    $user = isset($_GET['username']) ? $_GET['username'] : '';
    
    $sql = "select username from register where username='$user' ";
    
    $result = $conn->query($sql);
    
    if($result->num_rows>0){
        echo "用户名已存在";
    } else {
        echo "可以注册";
        mysqli_close($conn);
    }
    
    $result->close();
?>