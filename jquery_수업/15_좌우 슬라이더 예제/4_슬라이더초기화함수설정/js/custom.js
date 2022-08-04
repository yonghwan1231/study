$(document).ready(function(){
	var $slider = $("#slider");
	var $prev = $slider.find(".prev");
	var $next = $slider.find(".next");
	var speed = 1000;
	var isDone = true;

	init($slider);

	$next.on("click", function(e){
		e.preventDefault();
		if(isDone){
			next($slider);	
			isDone=false;
		}		
	});

	$prev.on("click", function(e){
		e.preventDefault();
		if(isDone){
			prev($slider);	
			isDone=false;
		}
			
	});

	function init(el){
		var len = el.children("ul").find("li").length;
		console.log(len);
		el.children("ul").css({
			width: 100 * len +"%"
		});
		el.children("ul").find("li").css({
			width: 100 / len + "%"
		});
		el.children("ul").find("li").last().prependTo($slider.children("ul"));
	}

	function next(el){
		el.children("ul").stop().animate({marginLeft : '-200%'},speed,function(){
			$(this).find("li").first().appendTo(el.children("ul"));
			$(this).css({marginLeft: '-100%'});
			isDone = true;
		});	
	}

	function prev(el){
		el.children("ul").stop().animate({marginLeft: '0%'},speed, function(){
			$(this).find("li").last().prependTo(el.children("ul"));
			$(this).css({marginLeft: '-100%'});
			isDone = true;
		});
	}
})