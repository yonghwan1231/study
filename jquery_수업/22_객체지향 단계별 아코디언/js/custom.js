$(document).ready(function(){

/*
객체지향 작업 순서
1-생성자 함수를 생성 (이름은 대문자로 시작)
2-생성자 함수의 prototype에 기존 함수들을 등록
3-생성자함수 내부에서 자기 자신의 프로토타입에 등록된 함수 호출
4-각 함수 안쪾에 있는 모든 변수값을 this객체에 옮겨담음
*/
    var $wrap, $btns, $boxs;
    init("#wrap"); 
    bindingEvent();  

    function init(selector){
        $wrap = $(selector);
        $btns = $wrap.find("dt");
        $boxs = $wrap.find("dd");
    }

    function bindingEvent(){
        $btns.on("click", function(){       
            activation(this);
        });
    }

    function activation(el){
        var isOn = $(el).hasClass("on");    
            $btns.removeClass("on")
            $boxs.slideUp();
    
        if(isOn){
            $(el).removeClass("on");
            $(el).next("dd").slideUp();
            return;
        }    
        $(el).addClass("on");
        $(el).next("dd").slideDown();
    }  
});