$(function(){

  var searchCookie = document.cookie.indexOf("popup=done");

  if(searchCookie == -1){
    $(".popup").show()
  }
  else{
    $(".popup").hide()
  }


  $(".close").click(function(e){
    e.preventDefault()

    if($("#checkbox").is(":checked")){
      makingCookie(1)
      $(".popup").fadeOut()
    } else{
      $(".popup").fadeOut()
    }
  })

  $(".del").click(function(e){
    e.preventDefault()
    makingCookie(0)
    alert("쿠키 삭제 완료")
  })


  function makingCookie(time){
    today=new Date()
    date=today.getDate()
    today.setDate(date+time)
    duedate=today.toGMTString()

    document.cookie = "popup=done; path=/; expires="+duedate  
  }

})