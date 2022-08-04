$(document).ready(function(){  
   
   $(".btnCall").on("click",function(){
      $("#mobile_panel").toggleClass("on");
   });   

   $(window).on("resize",function(){
      var wid = $(window).width();
      if(wid>=960){
         $("#mobile_panel").removeClass("on");
      }
   })

});


/*
   //브라우저 리사이즈 시 특정 컨텐츠에 클래스 붙이기
   $(window).on("resize",function(){
      wid = $(this).width();  
      if(wid<540){
         $(".c2").addClass("mobile");
      }else{
         $(".c2").removeClass("mobile");
      }
   });
  
   //동적으로 생성된 요소에 이벤트 걸기
   $("body").on("click",".mobile",function(){
      alert("test");
   });
*/