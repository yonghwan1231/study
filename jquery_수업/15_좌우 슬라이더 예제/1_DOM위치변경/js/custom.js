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

	$next.on("click", function(e){
		e.preventDefault();
		//$list_li.first().appendTo($list);
		//이미 전역에 로딩된 시점의 리스트순서가 고정
		$list.find("li").first().appendTo($list);
	})
})