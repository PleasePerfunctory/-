define(['config'],function(){
	require(['jquery'],function(){
		//轮播图
		
		(function(){
			var $oli=$('.banner-button-list li');
			var $obanner=$('.banner-content');
			var $autoplay;
			var $num=null;
			var $time=null;
			$autoplay=setInterval(function(){
				$num++;
				if($num>$oli.size()-1){
					$num=0;
				playbanner($num);
				}
				playbanner($num);
			},5000);
			$('.banner .container').on('mouseover',function(){
				clearInterval($autoplay);
			});
			$('.banner .container').on('mouseout',function(){
				clearInterval($autoplay);
				$autoplay=setInterval(function(){
					$num++;
					if($num>$oli.size()-1){
						$num=0;
					playbanner($num);
					}
					playbanner($num);
				},5000);
			});
			$oli.on('mouseover',function(){
				var $_this=$(this);
				$time=setInterval(function(){
					$num=$oli.index($_this);
					playbanner($num);
					clearInterval($time);
				},200);
			});
			$oli.on('mouseout',function(){
				clearInterval($time);
			});
			function playbanner($num){
				$oli.eq($num).addClass('focus').siblings('li').removeClass('focus');
				$obanner.eq($num).show().css('opacity','1').siblings('.banner-content').css('opacity','0').hide();
			}
		})();
		
		
		//tab切换
		(function(){
			var $oli=$('.classify-nav2-list li');
			var $time=null;
			$oli.on('mouseover',function(){
				var $_this=$(this);
				$time=setTimeout(function(){
					$_this.addClass('active-nav2').children('div').show().css('opacity','1').parent().siblings('li').removeClass('active-nav2').children('div').css('opacity','0').hide();
				},50);
			});
			
			$oli.on('mouseout',function(){
				$oli.removeClass('active-nav2').children('div').hide();
				clearTimeout($time);
			});
		})();
		
		//顶部悬浮
		(function(){
			$top_t=true;
			$(window).scroll(function(){
				if($('html,body').scrollTop()>=800){
					if($top_t){
						$('.suspensionbox').stop(true).show().animate({
							top:0
						},500);
						$top_t=false;
					}
				}else{
					if(!$top_t){
						var $_this=$('.suspensionbox');
						$_this.stop(true).animate({
							top:"-50px"
						},500,function(){
							$_this.hide();
						});
						$top_t=true;
					}
				}
			})
		})();
		
		
		//楼梯效果
		(function(){
			//显示楼梯
			$(window).scroll(function(){
				var $topvalue=$("html,body").scrollTop()
				var $stairs_list=$(".stairs-list li");
				if($topvalue>=600){
					$(".stairs-nav").slideDown(500);
				}else{
					$(".stairs-nav").slideUp(500);
				}
				//根据楼层给li加类
				$(".stairs-box").each(function(index,element){
					$topdistance=$(element).offset().top+300;
					if($topdistance>$topvalue){
						$stairs_list.removeClass('active');
						$stairs_list.eq(index).addClass('active');
						return false;
					}
				})
			});
			
			//点击导航到对应楼层
			$('.stairs-list li').on('click',function(){
				var $t_val=$('.stairs-box').eq($('.stairs-list li').index($(this))).offset().top-60;
				$('html,body').stop(true).animate({
					scrollTop:$t_val
				});
			});
			//回到顶部
			$(".gotop-nav").on('click',function(){
				$('html,body').stop(true).animate({
					scrollTop:0
				})
			});
		})();
		
		//天猫超市小轮播图
		(function(){
			var $oli=$('.recommend-pro .item-pro li');
			var $obanner=$('.item-box .item-content');
			var $autoplay;
			var $num=null;
			var $time=null;
			$autoplay=setInterval(function(){
				$num++;
				if($num>$oli.size()-1){
					$num=0;
				playbanner($num);
				}
				playbanner($num);
			},5000);
			$('.recommend-pro').on('mouseover',function(){
				clearInterval($autoplay);
			});
			$('.recommend-pro').on('mouseout',function(){
				clearInterval($autoplay);
				$autoplay=setInterval(function(){
					$num++;
					if($num>$oli.size()-1){
						$num=0;
					playbanner($num);
					}
					playbanner($num);
				},5000);
			});
			$oli.on('mouseover',function(){
				var $_this=$(this);
				$time=setInterval(function(){
					$num=$oli.index($_this);
					playbanner($num);
					clearInterval($time);
				},50);
			});
			$oli.on('mouseout',function(){
				clearInterval($time);
			});
			function playbanner($num){
				$oli.eq($num).addClass('active').siblings('li').removeClass('active');
				$obanner.eq($num).show().css('opacity','1').siblings('.item-content').css('opacity','0').hide();
			}
		})();
	});
});