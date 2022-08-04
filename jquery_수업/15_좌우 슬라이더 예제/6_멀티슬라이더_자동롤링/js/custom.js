$(document).ready(function(){
	var $slider= $("#slider1");
	var $slider2 = $("#slider2");
	var $prev = $(".prev");
	var $next = $(".next");
	var $start = $(".start");
	var $stop = $(".stop");
	var speed = 500;
	var rolling_interval = 2000;
	var isDone = true;

	init($slider);
	init($slider2);	
	start(rolling_interval);

	$next.on("click", function(e){
		e.preventDefault();
		
		if(isDone){
			stop();	
			next($slider);	
			next($slider2);
			isDone=false;
		}		
	});

	$prev.on("click", function(e){
		e.preventDefault();
		
		if(isDone){
			stop();
			prev($slider);	
			prev($slider2);
			isDone=false;
		}			
	});

	$start.on("click", function(e){
		e.preventDefault();
		start(rolling_interval);		
	});

	$stop.on("click", function(e){
		e.preventDefault();
		stop();
	});

	function start(interval){
		$start.addClass("on");
		$stop.removeClass("on");
		timer = setInterval(function(){
			next($slider);
			next($slider2);
		},interval);
	}

	function stop(){
		$stop.addClass("on");
		$start.removeClass("on");
		clearInterval(timer);
	}

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