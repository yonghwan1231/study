$(document).ready(function(){
    //동적 팝업 호출
    createPop({
        name : "#popup",
        data_url : "data/pop.html",
        isMask : true,
        isCk : true
    });

    var isCookie = document.cookie.indexOf("popup=done");

    if(isCookie == -1){
        $("#popup").show();
        $(".mask").show();
    }else{
        $("#popup").hide();
        $(".mask").hide();
    }

    $(".view").on("click", function(e){
        e.preventDefault();
        console.log(document.cookie);
    });

    $(".del").on("click", function(e){
        e.preventDefault();
        setCookie("popup","done",0);
        alert("쿠키 삭제 완료!!");
    })

    //팝업 닫기버튼 클릭시
    $("body").on("click", '#popup .close', function(e){
        e.preventDefault();
        removePop(this);
    })
});

//팝업 생성 함수
function createPop(opt){
    //디폴트 옵션
    var def_opt = {
        name : "#popup",
        data_url : "data/error.html",
        isMask : false,
        isCk : false
    }

    var opt = $.extend({}, def_opt, opt);

    //옵션값에 따라 마스크 생성
    if(opt.isMask){
        $("body").append(
            $("<div class='mask'>").css({
                position: "fixed", width: "100%", height: "100%", 
                background: 'rgba(0,0,0,.3)', top: 0, left: 0, zIndex: 11, display: "none"
            }).fadeIn()
        )
    }

    var id_name = opt.name.split("#")[1];

    //동적으로 팝업 생성후 화면 가운데 배치
    $("body").append(
        $("<aside>")
            .attr("id", id_name)
            .css({
                position: "absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)",
                zIndex:12, display: "none"
            }).append(
                $("<div class='content'>"),
                $("<div class='wrap'>").append(
                    $("<input type='checkbox'>"),
                    $("<label>").text("오늘 하루 그만보기.")
                ),
                $("<a>").attr("href","#").addClass("close").text("CLOSE")
            ).fadeIn()
    );

    //옵션값에 따라 체크박스 숨기기
    if(!opt.isCk) $(opt.name).find(".wrap").hide();

    //인수로 전달받은 외부 데이터 추가하기
    $.ajax({
        url : opt.data_url
    })
    .success(function(data){
        $(opt.name).find(".content").html(data);
    })
    .error(function(err){
        console.error(err);
    });
}

//팝업 제거 함수
function removePop(el){
    var isChecked = $(el).prev().find("input[type=checkbox]").is(":checked");
    var id_name = $(el).parent().attr("id");

    if(isChecked) setCookie(id_name, "done", 1);

    $(el).parent().fadeOut(500, function(){
        $(this).remove();
    });

    $(".mask").fadeOut(500, function(){
        $(this).remove();
    })
}

//쿠키생성 함수
function setCookie(name, val, time){
    var today = new Date();
    var date = today.getDate();
    today.setDate(date+time);
    var duedate = today.toGMTString();
    document.cookie = name+"="+val+"; path=/; expires="+duedate;
}