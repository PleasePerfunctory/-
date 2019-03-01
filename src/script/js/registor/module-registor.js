define(['config'],function(){
	require(['jquery'],function(){
		(function(){
			var $phoneregexp=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
			var $passwordregexp=/^[\w\_\!\@\#\$\%\^\&\*\(\)\_\+\/\*\-\<\>\?\,\.\/\;\'\:\"\']{6,20}$/;
			var $submit=false;
			
			//手机号框
			$('#username').on('blur',function(){
				if($(this).val()==''){
					$(this).siblings('.msg').show();
					$(this).siblings('.msg').find('em').html('<i class="msg-font error">󰅕</i>')
					$(this).siblings('.msg').find('.mas-s').addClass('error').html('手机号不能为空');
					$submit=false;
				}else if(!$phoneregexp.test($('#username').val())){
					$(this).siblings('.msg').show();
					$(this).siblings('.msg').find('em').html('<i class="msg-font error">󰅕</i>')
					$(this).siblings('.msg').find('.mas-s').addClass('error').html('号码格式有误');
					$submit=false;
				}
			});
			$('#username').on('input',function(){
				if($phoneregexp.test($(this).val())){
						$.ajax({
							type:"post",
							url:"http://10.31.162.18/2JD/projectname/php/phone.php",
							data:{
								username:$("#username").val()
							},
							async:true
						}).done(function(data){
							if(data){
								$("#username").siblings('.msg').show();
								$("#username").siblings('.msg').find('em').html('<i class="msg-font error">󰅕</i>')
								$("#username").siblings('.msg').find('.mas-s').addClass('error').html('此号码已被注册');
							}else{
								$("#username").siblings('.msg').show();
								$("#username").siblings('.msg').find('em').html('<i class="msg-font pass">󰅖</i>')
								$("#username").siblings('.msg').find('.mas-s').removeClass('error').html('');
								$submit=true;
							}
						});
				}else{
					$("#username").siblings('.msg').hide();
				}
			});
			
			
			//密码框
			$('#password-a').on('blur',function(){
				if($(this).val()==''){
					$(this).siblings('.msg').show();
					$(this).siblings('.msg').find('em').html('<i class="msg-font error">󰅕</i>')
					$(this).siblings('.msg').find('.mas-s').addClass('error').html('密码设置不符合要求');
					$submit=false;
				}
			});
			
			
			$('#password-a').on('input',function(){
				var $num=0;
				if($passwordregexp.test($(this).val())){
					if($(this).val().search(/\d/)!=-1){
						$num++;
					}
					if($(this).val().search(/[a-z]/)!=-1){
						$num++;
					}
					if($(this).val().search(/[A-Z]/)!=-1){
						$num++;
					}
					if($(this).val().search(/[\_\!\@\#\$\%\^\&\*\(\)\_\+\/\*\-\<\>\?\,\.\/\;\'\:\"\']/)!=-1){
						$num++;
					}
					switch($num){
						case 1: $("#password-a").siblings('.msg').find('.strength').html('<i style="color:#f00; font-size:12px">很弱</i>').show();break;
						case 2: $("#password-a").siblings('.msg').find('.strength').html('<i style="color:#ff0036; font-size:12px">弱</i>').show();break;
						case 3: $("#password-a").siblings('.msg').find('.strength').html('<i style="color:#ff7d1b;font-size:12px">中</i>').show();break;
						case 4: $("#password-a").siblings('.msg').find('.strength').html('<i style="color:#22a43a;font-size:12px">强</i>').show();break;
					}
					$("#password-a").siblings('.msg').show();
					$("#password-a").siblings('.msg').find('em').html('<i class="msg-font pass">󰅖</i>')
					$("#password-a").siblings('.msg').find('.mas-s').removeClass('error').html('强度：');
					$submit=true;
				}else{
					$(this).siblings('.msg').show();
					$(this).siblings('.msg').find('em').html('<i class="msg-font error">󰅕</i>')
					$(this).siblings('.msg').find('.mas-s').addClass('error').html('密码设置不符合要求');
					$("#password-a").siblings('.msg').find('.strength').hide();
					$submit=false;
				}
			});
			
			
			$('#password').on('blur',function(){
				if($(this).val()===$("#password-a").val()){
					$(this).siblings('.msg').show();
					$(this).siblings('.msg').find('em').html('<i class="msg-font pass">󰅖</i>')
					$(this).siblings('.msg').find('.mas-s').removeClass('error').html('');
					$submit=true;
				}else{
					$(this).siblings('.msg').show();
					$(this).siblings('.msg').find('em').html('<i class="msg-font error">󰅕</i>')
					$(this).siblings('.msg').find('.mas-s').addClass('error').html('两次密码不一致');
					$submit=false;
				}
			});
			
			$('#nickname').on('blur',function(){
				if($(this).val()==''){
					$(this).siblings('.msg').show();
					$(this).siblings('.msg').find('em').html('<i class="msg-font error">󰅕</i>')
					$(this).siblings('.msg').find('.mas-s').addClass('error').html('*会员名必须填写');
					$submit=false;
				}
			});
			
			
			//提交按钮
			$('#submit').on('click',function(ev){
				if($('#username').val()==''){
					$('#username').siblings('.msg').show();
					$('#username').siblings('.msg').find('em').html('<i class="msg-font error">󰅕</i>')
					$('#username').siblings('.msg').find('.mas-s').addClass('error').html('手机号不能为空');
					$submit=false;
				};
				
				if($('#password-a').val()==''){
					$('#password-a').siblings('.msg').show();
					$('#password-a').siblings('.msg').find('em').html('<i class="msg-font error">󰅕</i>')
					$('#password-a').siblings('.msg').find('.mas-s').addClass('error').html('密码设置不符合要求');
					$submit=false;
				}
				
				if($('#password').val()==''){
					$('#password').siblings('.msg').show();
					$('#password').siblings('.msg').find('em').html('<i class="msg-font error">󰅕</i>')
					$('#password').siblings('.msg').find('.mas-s').addClass('error').html('两次密码不一致');
					$submit=false;
				}
				
				if($('#nickname').val()==''){
					$('#nickname').siblings('.msg').show();
					$('#nickname').siblings('.msg').find('em').html('<i class="msg-font error">󰅕</i>')
					$('#nickname').siblings('.msg').find('.mas-s').addClass('error').html('*会员名必须填写');
					$submit=false;
				}
				if(!$submit){
					ev.preventDefault();
				}
			});
		})();
	});
});