$(function(){

  $(".test").attr({
    href:"https://www.nate.com",
    target:"_self",
    title:"네이트",
  }).text("네이트")

  $(".test").on({
    "click":function(){
      alert("클릭했습니다.")
    },
    
    "mouseenter":function(){
      alert("마우스가 올라왔습니다.")
    }
  })

})