$(document).ready(function(){
	
	//DOM 변수에 저장
	var $btnSet = $('.btnSet');
	var $btnSet_li = $btnSet.children('li');
	var $btnClose = $('.btnClose');
	var $btnClose2 = $('.btnClose2');
	var $txt = $('.txt');
	var $woman = $('.woman');
	var $top = $('.top');
	var $right = $('.right');
	var $bottom = $('.bottom');
	var $left = $('.left');
	var $con11 = $('.con11');
	var $con2 = $('.con2');
	var isDone = true;

	//txt 상태변화 속성값 
	var _txt_show = {		
		delay : 600,
		speed : 500,		
		ani_props : {"top":"50%","opacity":"1"}		
	};
	var _txt_hide = {	
		delay : 0,	
		speed : 500,	
		ani_props : {"top":"20%","opacity":"0"}		
	};

	//btnSet 상태변화 속성값
	var _btnSet_show = {
		delay : 500,	
		speed : 700,	
		ani_props : {"bottom":"50%","opacity":"1"}	
	};
	var _btnSet_hide = {
		delay : 200,
		speed : 1000,		
		ani_props : {"bottom":"20%","opacity":"0"}	
	};

	//woman 상태변화 속성값
	var _woman_show = {
		delay : 400,
		speed : 800,		
		ani_props : {"margin-left":"-50px","opacity":"1"}		
	};
	var _woman_hide = {
		delay : 400,
		speed : 800,		
		ani_props : {"margin-left":"300px","opacity":"1"}
	};

	//line 상태변화 속성값
	var _line_show = {
		speed : 500,
		delay : 1000,
		con11_speed : 1000,
		top_props : {"width":"100%"},
		right_props : {"height":"100%"},
		bottom_props : {"width":"100%"},
		left_props : {"height":"100%"}
	}
	var _line_hide= {
		speed : 1200,	
		cons11_speed : 300,
		top_props : {"width":"0%"},
		right_props : {"height":"0%"},
		bottom_props : {"width":"0%"},
		left_props : {"height":"0%"}
	}

	//두번째 박스 상태변화 속성값
	var _con2_show = {
		delay : 1000,
		speed : 1000,
		ani_props : {"top":"50%","height":"400px"}
	}
	var _con2_hide = {
		delay : 0,
		speed : 1000,
		ani_props : {"top":"60%","height":"0px"}
	}
	
	
	//이벤트 핸들러함수 연결
	$btnSet_li.eq(0).on("click",function(e){
		e.preventDefault();
		hideMain();
		showLine();
	});
	$btnSet_li.eq(1).on("click",function(){
		hideMain();
		showCon2();
	});			
	$btnClose.on("click",function(){
		hideLine();
		showMain();
	});	
	$btnClose2.on("click",function(){
		hideCon2();
		showMain();
	});		
	
	
	//메인 컨텐츠 상태변화 함수정의
	function showMain(){
		$txt.stop().delay(_txt_show.delay).animate(_txt_show.ani_props, _txt_show.speed);
		$btnSet.stop().delay(_btnSet_show.delay).animate(_btnSet_show.ani_props, _btnSet_show.speed);
		$woman.stop().delay(_woman_show.delay).animate(_woman_show.ani_props, _woman_show.speed);
	}	
	function hideMain(){
		$txt.stop().delay(_txt_hide.delay).animate(_txt_hide.ani_props, _txt_hide.speed);
		$btnSet.stop().delay(_btnSet_hide.delay).animate(_btnSet_hide.ani_props, _btnSet_hide.speed);
		$woman.stop().delay(_woman_hide.delay).animate(_woman_hide.ani_props, _woman_hide.speed);
	}
	

	//라인 상태변화 함수정의
	function showLine(){
		var speed = _line_show.speed;
		$top.stop().delay(_line_show.delay).animate(_line_show.top_props, speed,function(){
			$right.stop().animate(_line_show.right_props, speed,function(){
				$bottom.stop().animate(_line_show.bottom_props, speed,function(){
					$left.stop().animate(_line_show.left_props, speed,function(){
						$con11.stop().fadeIn(_line_show.con11_speed);
					});
				});
			});
		});
	}
	function hideLine(){
		var speed = _line_hide.speed;
		$con11.stop().fadeOut(_line_hide.con11_speed, function(){
			$top.stop().animate(_line_hide.top_props, speed);
			$right.stop().animate(_line_hide.right_props, speed);
			$bottom.stop().animate(_line_hide.bottom_props, speed);
			$left.stop().animate(_line_hide.left_props, speed);
		});
	}
	
	
	//두번째 박스 상태변화 함수정의
	function showCon2(){
		$con2.stop().delay(_con2_show.delay).animate(_con2_show.ani_props, _con2_show.speed);
	}
	function hideCon2(){
		$con2.stop().delay(_con2_hide.delay).animate(_con2_hide.ani_props, _con2_hide.speed);
	}	
	
});










