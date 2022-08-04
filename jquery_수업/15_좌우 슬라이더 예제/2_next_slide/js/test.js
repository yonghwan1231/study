$(function(){

  $(".slide").children("li:last").prependTo(".slide")

  $(".next").click(function(e){
    e.preventDefault();

    $(".slide").animate({"margin-left":"-200%"},1000,function(){
      $(this).children("li:first").appendTo(".slide");
      $(this).css("margin-left","-100%")
    })

  })

  $(".pre").click(function(e){
    e.preventDefault();

    $(".slide").animate({"margin-left":"0%"},1000,function(){
      $(this).children("li:last").prependTo(".slide");
      $(this).css("margin-left","-100%")
    })

  })

})