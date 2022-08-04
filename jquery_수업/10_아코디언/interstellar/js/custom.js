$(document).ready(function(){	
	

	
	var speed = 1000;

	$('.list>li').on('click',function(){

		var isActive = $(this).hasClass('on');

		if(isActive){
			//btn
			$(this).removeClass('on');
			$(this).children('div').stop().slideUp(speed);
			$("#wrap").stop().animate({"bottom":"80px"},speed);
		}else{
			//btn active
			$('.list>li').removeClass('on');
			$(this).addClass('on');

			//box active
			$(".list>li>div").stop().slideUp(speed);
			$(this).children("div").stop().slideDown(speed);
			$("#wrap").stop().animate({"bottom":"30px"},speed);
		}
		
	});
	
	
	


	$(".box2 p").mCustomScrollbar({
		theme:"dark-2",
		scrollButtons:{ enable: true },		
		setLeft : "0px"
	});
	
	
		
	
	
});
