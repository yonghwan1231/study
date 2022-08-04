$(document).ready(function(){

    var $wrap = $("#wrap");
    var $btns = $wrap.find(".left li");
    var $boxs = $wrap.find(".right>div");
    var $p = $boxs.find("p");
    var speed = 500;
    var isDone = true;

    $btns.on("click",function(e){
        e.preventDefault();
        var i = $(this).index();

        if(isDone){
            isDone = false;
            activation(i);
        }
        
    });

    function activation(index){
        console.log("activated!!!");
        //나머지 모든 비활성화 한뒤, 클릭한 버튼만 활성화
        $btns.children("a").removeClass("on");
        $btns.eq(index).children("a").addClass("on");

        //모든 패널 숨기고 비활성화
        $boxs.fadeOut(speed);
        $boxs.removeClass("on");

        //클릭한 순번에 해당하는 패널만 활성화
        $boxs.eq(index).fadeIn(speed, function(){
            $(this).addClass("on");

            setTimeout(function(){
                isDone = true;
            },convertSpeed($p));            
        });  
    }
  

    /*
    문자열.split("구분점") -- 구분점을 기점으로 문자를 잘라서 배열로 반환

    parseInt() -- 문자를 정수 숫자로 변환
    parseFloat() -- 문자를 실수 숫자로 변환
    */

    function convertSpeed(el){
        var ds = el.css("transition-duration"); //1.5s
        ds = ds.split("s")[0];
        ds = parseFloat(ds) * 1000;
        console.log(ds);
        return ds;
    }
});