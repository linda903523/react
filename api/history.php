<?php
    include 'connect.php';

    $sql = 'select * from history where username = "r11"';

    $result = $conn->query($sql);
    
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    $conn->close();
?>