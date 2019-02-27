<?php
	include "conn.php";
	if(isset($_GET['sid'])){
		$id=$_GET['sid'];
		$result=mysql_query("select * from datalist where sid=$id");
		$wronglist=mysql_fetch_array($result,MYSQL_ASSOC);
		echo json_encode($wronglist);
	}else{
		echo false;
	};
		
?>