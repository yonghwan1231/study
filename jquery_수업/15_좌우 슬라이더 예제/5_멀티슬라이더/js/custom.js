$(document).ready(function(){
	var $slider= $("#slider1");
	var $slider2 = $("#slider2");
	var $prev = $(".prev");
	var $next = $(".next");
	var speed = 1000;
	var isDone = true;

	init($slider);
	init($slider2);

	$next.on("click", function(e){
		e.preventDefault();
		if(isDone){
			next($slider);	
			next($slider2);
			isDone=false;
		}		
	});

	$prev.on("click", function(e){
		e.preventDefault();
		if(isDone){
			prev($slider);	
			prev($slider2);
			isDone=false;
		}			
	});

	function init(el){
		var len = el.children("ul").find("li").length;
		console.log(len);
		el.children("ul").css({
			width: 100 * len +"%",
			marginLeft: '-100%'
		});
		el.children("ul").find("li").css({
			width: 100 / len + "%"
		});
		el.children("ul").find("li").last().prependTo(el.children("ul"));
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