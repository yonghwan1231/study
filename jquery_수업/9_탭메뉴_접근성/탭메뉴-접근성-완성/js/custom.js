$(document).ready(function(){

    /*
        focus event
        focus : 상효작용이 가능한 콘텐트 요소만 포커스 이벤트 발생 가능
        (input, a, button)
        focusin : 포커스가 들어갔을 떄
        fousout : 포커스가 떠났을 때
    */

    var $tab = $("#tab");
    var $btns = $tab.find("dt a");
    var $boxs = $tab.find("dd");

    $btns.on("click  focusin", function(e){
        e.preventDefault();
        var isOn = $(this).hasClass("on");

        if(isOn) return;
        activation(this);        
    });

    function activation(self){
        var target = $(self).attr("href");

        $btns.removeClass("on");
        $(self).addClass("on");

        $boxs.hide();
        $(target).show();
    }
});