$(function(){

  var objTest = [

    {
      link : "https://www.google.com/",
      img : "./img/s1.jpg",
      tgt : "_blank",
      li : "list-style: none"
    },
    {
      link : "https://www.naver.com/",
      img : "./img/s2.jpg",
      li : "list-style: none"
    },
    {
      link : "https://www.daum.net/",
      img : "./img/s3.jpg",
      tgt : "_blank"
    }

  ]

  $("div").append($("<ul class='list'>"))

  $(objTest).each(function(){
    $(".list").append($("<li>").attr({
      style : this.li
    }).append($("<a>").attr(
      {
        href : this.link,
        target : this.tgt
      }
    ).append($("<img>").attr({
      src : this.img
    }))))
  })

})