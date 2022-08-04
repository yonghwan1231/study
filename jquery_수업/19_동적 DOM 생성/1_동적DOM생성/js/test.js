$(function(){

  $(".box").append($("<a>").attr({
    href : "https://www.naver.com",
    target : "_blank"
  }).append($("<img>").attr({
    src : "./img/s2.jpg",
    alt : "img2"
  }))
  )

  $(".box").html("<a href='https://www.naver.com'><img src='./img/s2.jpg'></a>")

})