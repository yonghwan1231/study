$(document).ready(function(){

    var $tab = $("#tab");
    var $btns = $tab.find("dt a");
    var $boxs = $tab.find("dd");

    $btns.on("click", function(e){
        e.preventDefault();

        var target = $(this).attr("href");

        $btns.removeClass("on");
        $(this).addClass("on");

        $boxs.hide();
        $(target).show();

    })
});