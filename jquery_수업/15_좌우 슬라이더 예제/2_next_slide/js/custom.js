$(document).ready(function(){
	/*
	DOM의 위치 변경
	$(이동할요소).appendTo(이동할 부모 타겟위치);
	-- 이동할 요소를 타겟위치 안쪽에서 제일 뒤로 이동시킴

	$(이동할요소).prependTo(이동할 부모 타겟위치);
	-- 이동할 요소를 타겟위치 안쪽에서 제일 앞으로 이동시킴
	*/

	var $slider = $("#slider");
	var $list = $slider.find(".list");
	var $list_li = $list.find("li");
	var $prev = $slider.find(".prev");
	var $next = $slider.find(".next");
	var speed = 1000;

	$next.on("click", function(e){
		e.preventDefault();

		$list.animate({marginLeft : '-200%'},speed,function(){
			$(this).find("li").first().appendTo($list);
			$(this).css({marginLeft: '-100%'});
		});
	})
})