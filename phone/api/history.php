<?php
    include 'connect.php';
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $sql = "select * from history where username = '$username'";

    $result = $conn->query($sql);
    
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    $conn->close();
?>