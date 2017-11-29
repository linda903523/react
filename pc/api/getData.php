<?php 
	//允许跨域代码
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods”, “POST,OPTIONS,GET');
	
	//连接数据库
	include 'connect.php';

	$type = isset($_REQUEST['type']) ? $_REQUEST['type'] : '';

	//排序类型
	$orderType = isset($_REQUEST['orderType']) ? $_REQUEST['orderType'] : '';
	
	//筛选条件
	$condition = isset($_REQUEST['condition']) ? $_REQUEST['condition'] : '';

	//筛选内容
	$searchContent = isset($_REQUEST['searchContent']) ? $_REQUEST['searchContent'] : '';

	//商品id
	$id = isset($_REQUEST['id']) ? $_REQUEST['id'] : 0;

	//当前页
	$pageNo = isset($_REQUEST['pageNo']) ? $_REQUEST['pageNo'] : 1;

	//数据总数
	$pageSize = isset($_REQUEST['pageSize']) ? $_REQUEST['pageSize'] : 10;

	$table = "goods";

	//获取所有数据，并分页
	if($type == 'getTotal'){
		$pageNo = ($pageNo-1)*$pageSize;

		$sql1 = "select sql_calc_found_rows * from $table limit $pageNo, $pageSize;";
		$sql2 = "select found_rows() as pageTotal;";

		$result1 = $conn->query($sql1);
		$row1 = $result1->fetch_all(MYSQLI_ASSOC);

		$result2 = $conn->query($sql2);
		$row2 = $result2->fetch_all(MYSQLI_ASSOC);

		$res = array(
			"data" => $row1,
			"total" => $row2
		);
	}

	//将新的商品写入数据库
	if($type == 'issueGoods'){
		
		$data = json_decode($_REQUEST['data'], true);
		$res = array(
			"a" => "ok"
		);
	}

	//搜索
	if($type == 'search'){
		$pageNo = ($pageNo-1)*$pageSize;
		$sql1 = "select * from $table where $condition like '%$searchContent' limit $pageNo, $pageSize;";
		$sql2 = "select found_rows() as pageTotal;";

		$result1 = $conn->query($sql1);
		$row1 = $result1->fetch_all(MYSQLI_ASSOC);

		$result2 = $conn->query($sql2);
		$row2 = $result2->fetch_all(MYSQLI_ASSOC);

		$res = array(
			"data" => $row1,
			"total" => $row2
		);
	}

	//登录验证
	if($type == 'login'){

		//用户名
		$username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
		//密码
		$password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';

		$sql = "select * from register where `username` = '$username' and `password` = '$password';";

		$result = $conn -> query($sql);

		if($result->num_rows>0){
			$res = array(
				"status" => "ok"
			);
		} else {
			$res = array(
				"status" => "no"
			);
		}
	}

	//获取下拉选项
	if($type == 'getSelect'){

		$sql1 = "select distinct decorations from $table;";

		$result1 = $conn->query($sql1);
		$row1 = $result1->fetch_all(MYSQLI_ASSOC);

		$sql2 = "select distinct type from $table;";

		$result2 = $conn->query($sql2);
		$row2 = $result2->fetch_all(MYSQLI_ASSOC);

		$res = array(
			"cn" => $row1/*,
			"en" => $row2*/
		);
	}

	//删除某一项
	if($type == 'delItem'){
		$pageNo = ($pageNo-1)*$pageSize;

		$sql = "delete from $table where id = $id;";
		$result = $conn->query($sql);

		$sql1 = "select sql_calc_found_rows * from $table limit $pageNo, $pageSize;";
		$sql2 = "select found_rows() as pageTotal;";

		$result1 = $conn->query($sql1);
		$row1 = $result1->fetch_all(MYSQLI_ASSOC);

		$result2 = $conn->query($sql2);
		$row2 = $result2->fetch_all(MYSQLI_ASSOC);

		$res = array(
			"data" => $row1,
			"total" => $row2
		);
	}

	echo json_encode($res, JSON_UNESCAPED_UNICODE);

	// $result->close();
	$conn->close();
 ?>