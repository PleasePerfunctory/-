<?php
	include "conn.php";
	if(isset($_POST['user'])){
		$user=$_POST['user'];
		$result=mysql_query("select * from user where username=$user");
		$wronglist=mysql_fetch_array($result,MYSQL_ASSOC);
		echo json_encode($wronglist);
	}else{
		echo false;
	};
?>