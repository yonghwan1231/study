$(function(){


  $('body').css("background-color","blue")

  $(window).on("resize",function(){
    var wid = $(this).width();

    if(wid < 540){
      $('body').css("background-color","black")
    }

    if(wid >= 540 && wid < 1180){
      $('body').css("background-color","yellow")
    }

    
    if(wid >= 1180){
      $('body').css("background-color","blue")
    }
  })

})