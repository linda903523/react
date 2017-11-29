<?php
	include 'connect.php';

    // $sql = 'select * from goods';

	$sql = 'select SQL_CALC_FOUND_ROWS * from goods limit 0,11';

	$result=$conn->query($sql);

	$row = $result->fetch_all(MYSQLI_ASSOC);

	$result->close();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    $conn->close();
?>