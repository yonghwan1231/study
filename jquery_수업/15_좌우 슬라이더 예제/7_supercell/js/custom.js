$(function(){

	
	
	//slider
	$(".btnPrev").click(function(e){
		e.preventDefault();
		var wid1 = $(".phoneSlider li").width();
		var wid2 = $(".txtSlider li").width();
		var speed = 400;	
		
		$(".slider").stop().animate({"left":"-200%"},speed,function(){
			$(".slider").css({"left":"-100%"});		
			$(".slider li:first").appendTo(".slider");
		});		
		
		$(".phoneSlider").stop().animate({"marginLeft":"-"+wid1*2},speed,function(){
			$(".phoneSlider").css({"marginLeft":-wid1});		
			$(".phoneSlider li:first").appendTo(".phoneSlider");
		});
		
		$(".txtSlider").stop().animate({"marginLeft":"-"+wid2*2},speed,function(){
			$(".txtSlider").css({"marginLeft":-wid2});		
			$(".txtSlider li:first").appendTo(".txtSlider");
		});
		
	});
	
	$(".btnNext").click(function(e){
		e.preventDefault();
	
		var wid1 = $(".phoneSlider li").width();
		var wid2 = $(".txtSlider li").width();
		var speed = 400;			
		$(".slider").stop().animate({"left":"0%"},speed,function(){
			$(".slider").css({"left":"-100%"});
			$(".slider li:last").prependTo(".slider");
		});	

		$(".phoneSlider").stop().animate({"marginLeft":"0%"},speed,function(){
			$(".phoneSlider").css({"marginLeft":-wid1});		
			$(".phoneSlider li:last").prependTo(".phoneSlider");
		});
		
		$(".txtSlider").stop().animate({"marginLeft":"0%"},speed,function(){
			$(".txtSlider").css({"marginLeft":-wid2});		
			$(".txtSlider li:last").prependTo(".txtSlider");
		});
		
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	

});
