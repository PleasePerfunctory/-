define(['config'],function(){
	require(['jquery'],function(){
		//图片切换
		(function(){
			var $img_list=$('.litimg-list li');
			var $timer=null;
			
			var $small_box=$('.small-imgbox');
			var $small_img=$('.small-imgbox .smallimg');
			var $big_box=$('.big-imgbox');
			var $big_img=$('.big-imgbox .bigimg');
			var $loupe=$('.loupe');
			
			var $small_glass_width=$big_box.outerWidth()/$big_img.outerWidth()*$small_img.outerWidth();
			var $small_glass_height=$big_box.outerHeight()/$big_img.outerHeight()*$small_img.outerHeight();
			
			$img_list.on('mouseover',function(){
				var $_this=$(this);
				$timer=setTimeout(function(){
					clearTimeout($timer);
					$_this.addClass('active').siblings('li').removeClass('active');
					$('.bigimg,.smallimg').attr('src',$_this.children('img').attr('src'));
					$small_glass_width=$big_box.outerWidth()/$big_img.outerWidth()*$small_img.outerWidth();
					$small_glass_height=$big_box.outerHeight()/$big_img.outerHeight()*$small_img.outerHeight();
				},400);
			});
			$img_list.on('mouseout',function(){
				clearTimeout($timer);
			});
			
			
			//放大镜效果
			$small_box.on('mouseover',function(){
				var $left=null;
				var $top=null;
				$loupe.css({
					width:$small_glass_width,
					height:$small_glass_height,
				}).show();
				$big_box.show();
				$small_box.on('mousemove',function(ev){
					$left=ev.clientX-$small_box.offset().left-$small_glass_width/2;
					$top=ev.clientY-$small_box.offset().top-$small_glass_height/2;
					if($left<=0){
						$left=0;
					}else if($left>$small_box.outerWidth()-$small_glass_width){
						$left=$small_box.outerWidth()-$small_glass_width;
					}
					
					if($top<=0){
						$top=0;
					}else if($top>$small_box.outerHeight()-$small_glass_height){
						$top=$small_box.outerHeight()-$small_glass_height;
					}
					$loupe.css({
						left:$left,
						top:$top
					});
					var $ratio=$big_box.outerWidth()/$small_glass_width;
					$big_img.css({
						left:-$left*$ratio,
						top:-$top*$ratio
					});
				});
			});
			
			$small_box.on('mouseout',function(){
				$small_box.off('mousemove');
				$big_box.hide();
				$loupe.hide();
			});
		})();
	});
});