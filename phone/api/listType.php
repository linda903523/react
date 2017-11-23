<?php
    include 'connect.php';

    $decorations = isset($_REQUEST['decorations']) ? $_REQUEST['decorations'] : '';

    $sql = "select * from goods where decorations='$decorations'";

    $result=$conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);

    $result->close();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    $conn->close();
?>