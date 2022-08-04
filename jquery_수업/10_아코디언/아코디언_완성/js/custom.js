$(document).ready(function(){

    /*
    addClass() : 클래스 추가
    removeClass() : 클래스 제거
    toggleClass() : 클래스가 있으면 제거, 없으면 추가
    hasClass() : 클래스 유무를 판단해서 boolean값을 리턴

    .hide(),  .fadeOut(), .slideUp()
    .show(), .fadeIn(), .slideDown();
    */

    //미션 1 - 토글 메뉴 클릭시 기존에 열려 있는게 있으면 무조건 닫아주고 
    //클릭한 메뉴와 해당 dd패널만 활성화

    var $wrap = $("#wrap");
    var $btns = $wrap.find("dt");
    var $boxs = $wrap.find("dd");

    $btns.on("click", function(){       
        var isOn = $(this).hasClass("on");

        $btns.removeClass("on")
        $boxs.slideUp();

        if(isOn){
            $(this).removeClass("on");
            $(this).next("dd").slideUp();
            return;
        }

       $(this).addClass("on");
       $(this).next("dd").slideDown();
    })
  
});
