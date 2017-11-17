<?php
    include 'connect.php';

    $type = isset($_REQUEST['type']) ? $_REQUEST['type'] : '';

    $sql = 'select * from goods where type='.$type;

    $result=$conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);

    $result->close();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    $conn->close();
?>