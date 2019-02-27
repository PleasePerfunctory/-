define(['config'],function(){
	require(['jquery','jqcookie'],function(){
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
				console.log(data.picsurl);
				$('.price').html(data.price);
				$('.eva-count').html(data.sailnumber);
				$('.tm-score').html(parseInt(data.price/10));
				classify();
				//产品颜色分类
				function classify(){
					var $oli="";
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
		
		
		
		//添加（减少）商品数量的实现
		(function(){
			var $addbtn=$('.count-add');
			var $decbtn=$('.count-decrease');
			var $number=1;
			var $numinput=$('#p-count');
			$numinput.val($number);
			$addbtn.on('click',function(){
				$number++;
				if($number>99){
					$number=99;
				}
				$numinput.val($number);
			});
			
			$decbtn.on('click',function(){
				$number--;
				if($number<1){
					$number=1;
				}
				$numinput.val($number);
			});
			
			$numinput.on('focus',function(){
				$numinput.val('');
				$numinput.on('input',function(){
					if($numinput.val()<1 &&  $numinput.val()!=""){
						$number=1;
						$numinput.val($number);
					};
					if($numinput.val()>99){
						$number=99;
						$numinput.val($number);
					}
				});
			});
			
			$numinput.on('blur',function(){
				if($numinput.val()==""){
					$numinput.val($number);
				}else{
					$number=$numinput.val();
				}
			});
			
		})();
		
		
		//点击加入购物车完成的操作
		(function(){
			var $sid=location.search.substring(1).split("=")[1];
			var $addshopping=$('.add-shopping-cart');
			var $sidarr=[];
			var $numarr=[];
			if($.cookie('sid') && $.cookie('num')){
					$sidarr=$.cookie('sid').split(",");
					$numarr=$.cookie('num').split(",");
			};
			$addshopping.on('click',function(){
				if($.cookie('sid') && $.cookie('num')){
					$sidarr=$.cookie('sid').split(",");
					$numarr=$.cookie('num').split(",");
				}else{
					var $sidarr=[];
					var $numarr=[];
				};
				if($.inArray($sid,$sidarr)==-1){
					$sidarr.push($sid);
					$numarr.push($('#p-count').val());
					$.cookie('sid',$sidarr.toString(),{expires:7});
					$.cookie('num',$numarr.toString(),{expires:7});
					console.log(1111)
				}else{
					var $sidindex=parseInt($.inArray($sid,$sidarr));
					var $count=parseInt($numarr[$sidindex])+parseInt($('#p-count').val());
					$numarr[$sidindex]=$count;
					$.cookie('num',$numarr.toString(),{expires:7});
					console.log($sidindex);
					
				}
				alert('添加成功');
			});
		})();
		
	});
});