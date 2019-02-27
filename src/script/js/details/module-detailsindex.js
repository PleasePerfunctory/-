define(['config'],function(){
	require(['jquery'],function(){
		//拿到sid渲染
		(function(){
			var $sid=location.search.substring(1).split("=");
			$.ajax({
				type:"get",
				url:"http://10.31.162.18/2JD/projectname/php/details.php",
				async:true,
				data:{
					sid:$sid[1]
				},
				dataType:'json'
			}).done(function(data){
				$pics=data.picsurl.split(',');
				$("title").html(data.title);
				$('.title-h1').html(data.title);
				$('.title-p').html(data.title);
				$(".smallimg,.bigimg").attr('src',$pics[0]);
				$('.litimg-list li').each(function(index,element){
					$(element).children('img').attr('src',$pics[index]);
				});
				$('.price').html(data.price);
				$('.eva-count').html(data.sailnumber);
				classify();
				
				
				
				
				//产品颜色分类
				function classify(){
					$oli="";
					$.each($pics, function(index,value){
						$oli+=`
							<li>
								<a href="javascript:;" style="background:url('${value}');background-size:40px 40px";></a>
							</li>
						`;
					});
					$('.classify-list').html($oli);
				}
				
			});
		})();
		
	});
});