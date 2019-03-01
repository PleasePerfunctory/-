<?php
	include "conn.php";
	if(isset($_POST['submit'])){
		$user=$_POST['username'];
		$pass=sha1($_POST['password-a']);
		$nickname=$_POST['nickname'];
		$query="insert user values('$user','$pass','$nickname',NOW())";
		mysql_query($query);
		header('location:http://10.31.162.18/2JD/projectname/src/login.html');
	}
?>