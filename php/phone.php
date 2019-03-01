<?php
	include 'conn.php';
	$phonenum=$_POST['username'];
	$result=mysql_query("select * from user where username=$phonenum");
	$wrong=mysql_fetch_array($result,MYSQL_ASSOC);
	if($wrong){
		echo true;
	}else{
		echo false;
	}
?>