<?php
    include 'connect.php';
    $user = isset($_GET['username']) ? $_GET['username'] : '';
    $pass = isset($_GET['password']) ? $_GET['password'] : '';

    if($user =='' || $pass ==''){
        echo "无法注册";
    } else{
        $sql = "select username from register where username='$user' ";
        
        $result = $conn->query($sql);
        if($result->num_rows>0){
            echo "用户名已存在";
        } else {
            
            $sql = "insert into register (username,password,token) values ('$user','$pass','')";

            mysqli_select_db( $conn, 'RUNOOB' );

            $retval = mysqli_query( $conn, $sql );
            if(! $retval )
            {
              die('注册失败: ' . mysqli_error($conn));
            }
            echo "注册成功";
            mysqli_close($conn);
        }
    }

    $result->close();
?>