<?php
    include 'connect.php';

    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';

    $sql = 'select * from goods where id='.$id;

    $result=$conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);

    $result->close();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    $conn->close();
?>