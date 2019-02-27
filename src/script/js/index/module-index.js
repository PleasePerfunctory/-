define(['config'],function(){
//	<ul class="hot-sale-rand">
//		<li class="hot-li">
//			<a href="javascript:;">
//				<img src="https://img.alicdn.com/bao/uploaded/bao/upload/TB1f8DDtkUmBKNjSZFOwu1b2XXa.png_400x400q60.jpg"/>
//				<p>【极速发货】DJI 大疆 御Mavic 2 新一代便携可折叠4K无人机 航拍旗舰</p>
//				<span class="price">￥7888.0</span>
//			</a>
//		</li>
//	<ul>



	require(['jquery'],function(){
		//懒加载
		require(['jqlazy'],function(){
			$('img').lazyload();
		});
		
		
		(function(){
			$.ajax({
				type:"get",
				url:"http://10.31.162.18/2JD/projectname/php/tmdata.php",
				async:true,
				dataType:'json'
			}).done(function(data){
				var $ullist='<ul class="hot-sale-rand">';
				$.each(data, function(index,value){
					$ullist+=`
						<li class="hot-li">
							<a href="http://10.31.162.18/2JD/projectname/src/details.html?sid=${value.sid}">
							<img data-original="${value.url}"/>
							<p>${value.title}</p>
							<span class="price">￥${value.price}</span>
							</a>
						</li>
					`;
					if((index+1)%5===0){
						if(data.length!=index+1){
							$ullist+='</ul><ul class="hot-sale-rand">';
						}
					}
				});
				$ullist+='</ul>';
				$('.hot-sale-content').html($ullist+$ullist+$ullist+$ullist);
			});
		})();
	});
});