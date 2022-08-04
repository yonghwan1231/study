$(function(){

  // $("li a").on("click",function(e){
  //   e.preventDefault(); 
    
  // 실습1

  //   $('body').css("background-image","url(img/pic"+($(this).parent().index()+1)+".jpg)")

  //   $("h1>span:first-child").text($(this).parent().index()+1)

  //   $(".title").text($(this).text()).css("color","white")
  // })


  // 실습2

  // $("li a").on("click",function(e){
  //   e.preventDefault(); 

  //   var num=$(this).parent().index()+1
    
  //   $('body').css("background-image","url(img/pic"+num+".jpg)")

  //   $("h1>span:first-child").text(num)

  //   $(".title").text($(this).text()).css("color","white")
  // })

  // 실습3

  $("li a").on("click",function(e){

    var thisImg = $(this).attr("href")
    var num = $(this).parent().index()+1
    var title = $(this).text()

    e.preventDefault();

    $("body").css("background-image","url("+thisImg+")")

    $("h1>span:first-child").text(num)

    $(".title").text(title).css("color","white")

  })

})