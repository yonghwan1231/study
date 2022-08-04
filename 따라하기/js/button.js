$(function(){
  $("body").prepend("<button id='prev'>이전</button> <button id='next'>다음</button>")
  $("#prev").css({
    "position":"fixed",
    "left":"25px",
    "bottom": "50px",
    "width":"100px",
    "height":"50px",
    "font-size":"20px"
  })
  $("#next").css({
    "position":"fixed",
    "right":"25px",
    "bottom": "50px",
    "width":"100px",
    "height":"50px",
    "font-size":"20px"
  })
  var thisLocation = location.href.split("/")
  var splitLocation = thisLocation[thisLocation.length-1].split("(")
  var locationNum = splitLocation[1].split(")")
  var prevPage = parseInt(locationNum[0])-1
  var nextPage = parseInt(locationNum[0])+1
  $("#prev").on("click",function(){
    if(location.href != "http://127.0.0.1:5500/%EB%94%B0%EB%9D%BC%ED%95%98%EA%B8%B0/%EC%98%88%EC%A0%9C%20(1).html") {
      location.href = "예제 ("+prevPage+").html"
    }
  })
  $("#next").on("click",function(){
    location.href = "예제 ("+nextPage+").html"
  })
})