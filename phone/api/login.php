<?php
    include 'connect.php';
    $user = isset($_GET['username']) ? $_GET['username'] : '';
    
    $pass = isset($_GET['password']) ? $_GET['password'] : '';

    $api_token_server = md5($user . $pass );

    $sql_id = "select id from register where username='$user' ";
    
    $result = $conn->query($sql_id);
    
    $rows = $result->fetch_all(MYSQLI_ASSOC);
    
    if($result->num_rows>0){        
        $ID = $rows[0]['id'];        
        $sql = "select username from register where username='$user' and password='$pass'";
        $result = $conn->query($sql);       
        if($result->num_rows>0){
            $sql = "update register set token='$api_token_server' where id='$ID' ";
            $results = $conn->query($sql);
            $row = $result->fetch_all(MYSQLI_ASSOC);
            $name = $row[0]['username'];        
            echo json_encode($name, JSON_UNESCAPED_UNICODE);
        } else {
            echo "密码不匹配";
        }        
    } else {
        echo "用户名不存在";
    }
    $result->close();
    
    $conn->close();
?>