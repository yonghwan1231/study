$(function(){

  $("p:nth-of-type(1)").show()

  $("div").click(function(e){
    e.preventDefault();
    $("p").hide();
    $(this).next("p").show();
    $("div").children("a").removeClass("select");
    $(this).children("a").addClass("select");
  })

})