$(function(){

  $("section>p").hide()

  $("section>div>a").click(function(e){
    e.preventDefault();

    if($(this).hasClass("select")){
      $(this).removeClass("select").parent("div").next("p").slideUp()
    } else{
      $("section>div>a").removeClass("select").parent("div").next("p").slideUp()
      $(this).addClass("select").parent("div").next("p").slideDown()
    }

  })

})