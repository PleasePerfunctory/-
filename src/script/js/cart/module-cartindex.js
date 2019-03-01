define(['config'],function(){
	require(['jquery','jqcookie'],function(){
		//载入购物车
		(function(){
			var $sidarr=[];
			var $numarr=[];
			if($.cookie('sid')&&$.cookie('num')){
				$('.cart-null').hide();
				$('.cart').show();
				$sidarr=$.cookie('sid').split(",");
				$numarr=$.cookie('num').split(',');
				var $sli=null;
				$.each($sidarr, function(index,value){
					$.ajax({
						type:"get",
						url:"http://10.31.162.18/2JD/projectname/php/details.php",
						async:true,
						data:{
							sid:value
						},
						dataType:'json'
					}).done(function(data){
						var $cloneli=$('.li-container:hidden').clone(true,true);
						$cloneli.find('.inner-mass-img img').attr('src',data.url);
						$cloneli.find('.inner-mass-img img').attr('sid',data.sid);
						$cloneli.find('.a-title').html(data.title);
						$cloneli.find('.number-count').val($numarr[index]);
						$cloneli.find('.price-x').html('￥'+data.price);
						$cloneli.find('.count-price-num').html('￥'+parseInt(data.price*$numarr[index]));
						$cloneli.css('display','block');
						$('.container-list').append($cloneli);
					});
				});
				
			}else{
				$('.cart-null').show();
				$('.cart').hide();
			}
			
			//登录
			(function(){
				if($.cookie('user')){
					$.ajax({
						type:"post",
						url:"http://10.31.162.18/2JD/projectname/php/user.php",
						async:true,
						data:{
							user:$.cookie('user')
						},
						dataType:'json'
					}).done(function(data){
						console.log(data);
						$('.quit').show();
						$('.log-in,.sign-in').hide();
						$('.top-left em').html(data.nickname);
					});
				}else{
					$('.quit').hide();
					$('.log-in,.sign-in').show();
					$('.top-left em').html('喵，欢迎来天猫');
				}
				
				$('.quit').on('click',function(){
					$('.quit').hide();
					$('.log-in,.sign-in').show();
					$('.top-left em').html('喵，欢迎来天猫');
					$.cookie('user','',{expires:-99999})
				})
			})();
			
			count_num();
			
			//计数
			function count_num(){
				var $countnum=0;
				var $num_arr=[];
				if($.cookie('sid')&&$.cookie('num')){
					$num_arr=$.cookie('num').split(',');
					$.each($num_arr,function(index,value){
						$countnum+=parseInt(value);
					});
					$('.count-spi').html($countnum);
				}else{
					$('.count-spi').html('0');
				}
			}
			
			//商品数量加减按钮
			(function(){
				//减
				$('.no-minus').on('click',function(){
					var $priced=parseInt(($(this).parent().siblings('.price-i').find('.price-x').html()).substring(1));
					var $num=$(this).siblings('.number-count').val();
					$num--;
					if($num<1){
						$num=1;
					}
					$(this).siblings('.number-count').val($num);
					$(this).parent().siblings('.count-price').find('.count-price-num').html('￥'+$num*$priced);
					pricechange();
					changecookie($(this));
					count_num();
				});
				
				//加
				$('.add-puls').on('click',function(){
					var $priced=parseInt(($(this).parent().siblings('.price-i').find('.price-x').html()).substring(1));
					var $num=$(this).siblings('.number-count').val();
					$num++;
					if($num>300){
						$num=300;
					}
					$(this).siblings('.number-count').val($num);
					$(this).parent().siblings('.count-price').find('.count-price-num').html('￥'+$num*$priced);
					pricechange();
					changecookie($(this));
					count_num();
				});
				
				
				var $number=1
				$('.number-count').on('focus',function(){
					$number=$(this).val();
					$(this).val('');
					$(this).on('input',function(){
						if($(this).val()<1 &&  $(this).val()!=""){
							$number=1;
							$(this).val($number);
						};
						if($(this).val()>99){
							$number=99;
							$(this).val($number);
						}
					});
				});
				
				$('.number-count').on('blur',function(){
					if($(this).val()==""){
						$(this).val($number);
					}else{
						$number=$(this).val();
					}
					var $priced=parseInt(($(this).parent().siblings('.price-i').find('.price-x').html()).substring(1));
					$(this).parent().siblings('.count-price').find('.count-price-num').html('￥'+$number*$priced);
					pricechange();
					changecookie($(this));
					count_num();
				});
			})()
		})();
		
		
			//计算单价和总价
			function pricechange(){
				var $count=0;
				var $price=0;
				$('.li-container:visible').each(function(index,element){
					if($(element).find('input:checked').prop('checked')){
						$count+=parseInt($(element).find('.number-count').val());
						$price+=parseInt(($(element).find('.count-price-num').html()).substring(1));
					}
					
				});
				if(isNaN($count)){
					$count=0;
				}
				$('.account-span-1 em').html($count);
				$('.account-price-em').html($price.toFixed(2));
				$('.accounts-price').html($price.toFixed(2));
				if($price!=0){
					$('.accounts-title a,.account-a').css({
					    cursor: "pointer",
					    background:"#f40"
					})
				}else{
					$('.accounts-title a,.account-a').css({
					    cursor: "not-allowed",
					    background:"#B0B0B0"
					})
				}
			}
			
			
//			全选按钮
			$('#elect-all,.all-check-input').on('click',function(){
				$('#elect-all,.all-check-input,.times-chk').prop('checked',$(this).prop('checked'));
				pricechange();
			});
			
			$('.times-chk').on('click',function(){
				if($('.li-container:visible').size()===$('.li-container:visible').find('.times-chk:checked').size()){
					$('#elect-all,.all-check-input').prop('checked',true);
				}else{
					$('#elect-all,.all-check-input').prop('checked',false);
				}
				pricechange();
			});
			
			
			
			//将改变的值存入cookie
			var $arr_sid=[];
			var $arr_num=[];
			function getcookie(){
				if($.cookie('sid')&&$.cookie('num')){
					$arr_sid=$.cookie('sid').split(',');
					$arr_num=$.cookie('num').split(',');
				}
			}
			
			function changecookie(obj){
				getcookie();
				var $sid=$(obj).parent().siblings('.inner-mass').find('.inner-mass-img img').attr('sid');
				console.log($sid)
				var $index=$.inArray($sid,$arr_sid);
				$arr_num[$index]=$(obj).siblings('.number-count').val();
				console.log($arr_num)
				$.cookie('num',$arr_num.join(','));
			}
			
			
			
			//删除按钮
			$('.delete').on('click',function(){
				if(window.confirm('确认要删除该宝贝吗？')){
					var $esid=$(this).parent().siblings('.inner-mass').find('.inner-mass-img img').attr('sid');
					delcookie($esid);
					$(this).parents('.li-container').remove();
				}
				count_num();
			});
			
			$('.all-delete').on('click',function(){
				$('.li-container:visible').each(function(index,element){
					if($(element).find('.times-chk').prop("checked")){
						var $esid=$(element).find('.inner-mass-img img').attr('sid');
						delcookie($esid);
						$(element).remove();
						cartnull();
					}
				})
			})
			
			//删除cookie
			function delcookie($sid){
				getcookie();
				var $index=$.inArray($sid,$arr_sid);
				$arr_num.splice($index,1);
				$arr_sid.splice($index,1);
				$.cookie('sid',$arr_sid.join(','));
				$.cookie('num',$arr_num.join(','));
			}
			
			//购物车空空
			function cartnull(){
				if($.cookie('sid')&&$.cookie('num')){
					$('.cart-null').hide();
					$('.cart').show();
				}else{
					$('.cart-null').show();
					$('.cart').hide();
				}
			}
			
		
	});
});