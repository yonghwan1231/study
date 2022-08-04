$(function(){	

	var isDone = true;
	
	$(".navi li a").on("click",function(e){
		e.preventDefault();		
		var $this = $(this);
		var tg = $(this).attr("href");		

		var isOn = $(this).hasClass("on");
		if(isOn) return;
		
		if(isDone){
			isDone = false;
			showTab(tg);	
			activeBtn($this);
		}	
					
	});
	
	function showTab(tg){		
		$(".box").stop().fadeOut(900);
		$(".box").removeClass("on");
		
		$(tg).stop().fadeIn(900,function(){
			isDone = true;
		});
		$(tg).addClass("on");
		
		
		
	}
	
	function activeBtn($this){
		$(".navi li a").removeClass("on");
		$this.addClass("on");
	}
	
	
});










