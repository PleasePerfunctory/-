<?php
	include 'conn.php';
	$phonenum=$_POST['username'];
	$password=sha1($_POST['password']);
	$result=mysql_query("select * from user where username='$phonenum' and password='$password'");
	if($result){
		echo true;
	}else{
		echo false;
	}
?>