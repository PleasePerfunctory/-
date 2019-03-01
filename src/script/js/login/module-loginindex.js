define(['config'],function(){
	require(['jquery','jqcookie'],function(){
		//密码验证
		(function(){
			$('.login-button').on('click',function(){
				var $usernmae=$('#username').val();
				var $password=$('#password').val();
				if($usernmae!=''&&$password!=''){
					$.ajax({
						type:"post",
						url:"http://10.31.162.18/2JD/projectname/php/login.php",
						async:true,
						data:{
							username:$usernmae,
							password:$password
						}
					}).done(function(data){
						console.log(data)
						if(data){
							console.log(data)
							alert('登录成功');
							$.cookie('user',$('#username').val(),{expires:3});
							location.href="http://10.31.162.18/2JD/projectname/src/index.html";
						}else{
							alert('登录失败');
						}
					});
					console.log($password);
				}else{
					alert('请输入账户名和密码');
				}
			});
		})();
		
	});
});