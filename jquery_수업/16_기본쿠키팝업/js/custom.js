$(document).ready(function(){

    //로딩시 쿠키 리스트에서 popup=done 쿠키가 있는지 확인
    var isCookie = document.cookie.indexOf("popup=done");

    //쿠키가 없으면 popup을 보여주고 있으면 숨김
    if(isCookie == -1){
        console.log("쿠키없음");
        $("#popup").show();
      }else{
        console.log("쿠키있음")
        $("#popup").hide();
    }

    //쿠키 팝업 닫기 버튼 클릭시
    $("#popup .close").on("click", function(e){
        e.preventDefault();

        var isChecked = $(this).prev().find("input[type=checkbox]").is(":checked");
        var id_name = $(this).parent().attr("id");

        if(isChecked) setCookie(id_name, "done", 1);

        $(this).parent().fadeOut(500);    
    });

    //쿠키 삭제 버튼 클릭시
    $(".del").on("click",function(){
        setCookie("popup","done",0);
        alert("쿠키삭제 완료!!");
    });

    //쿠키 보기 버튼 클릭시
    $(".view").on("click",function(){
        console.log(document.cookie);
    });   

    

    //쿠키 생성 함수 정의
    function setCookie(cookieName, cookieVal, time){     
        var today = new Date();
        var date = today.getDate();
        today.setDate(date+time);     
        var duedate = today.toGMTString();
        document.cookie = cookieName+"="+cookieVal+"; path=/; expires="+duedate;
    }

});