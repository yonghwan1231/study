$(document).ready(function(){

    var $wrap = $("#wrap");
    var $btns = $wrap.find(".left li");
    var $boxs = $wrap.find(".right>div");
    var speed = 500;

    $btns.on("click",function(e){
        e.preventDefault();

        var i = $(this).index();
        activation(i);
    });

    function activation(index){
        //나머지 모든 비활성화 한뒤, 클릭한 버튼만 활성화
        $btns.children("a").removeClass("on");
        $btns.eq(index).children("a").addClass("on");

        //모든 패널 숨기고 비활성화
        $boxs.fadeOut(speed);
        $boxs.removeClass("on");

        //클릭한 순번에 해당하는 패널만 활성화
        $boxs.eq(index).fadeIn(speed, function(){
            $(this).addClass("on");
        });  
    }
});