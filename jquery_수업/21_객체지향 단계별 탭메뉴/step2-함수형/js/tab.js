var $frame, $btns, $boxs;

init("#tab1");
bindingEvent();

function init(selector){
    $frame = $(selector);
    $btns = $frame.find("ul>li");
    $boxs = $frame.find("div>div");
}

function bindingEvent(){
    $btns.on("click", function(e){
        e.preventDefault();
    
        var i = $(this).index();
        activation(i);   
    });
}

function activation(index){
    $btns.removeClass("on");
    $btns.eq(index).addClass("on");

    $boxs.removeClass("on");
    $boxs.eq(index).addClass("on");
}