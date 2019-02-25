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
			$('.banner').on('mouseover',function(){
				clearInterval($autoplay);
			});
			$('.banner').on('mouseout',function(){
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
					console.log(11);
					$_this.addClass('active-nav2').children('div').show().css('opacity','1').parent().siblings('li').removeClass('active-nav2').children('div').css('opacity','0').hide();
				},50);
			});
			
			$oli.on('mouseout',function(){
				$oli.removeClass('active-nav2').children('div').hide();
				clearTimeout($time);
			});
		})();
	});
});