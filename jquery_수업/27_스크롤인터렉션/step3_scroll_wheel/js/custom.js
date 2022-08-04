//전역 변수
var boxs = $("section");
var btns = $("#navi li");
var speed = 1000;
var activeName = "on";
var base = -200;

//브라우저 로딩시 섹션의 세로 위치값 배열에 저장함수 호출
setPos();

//브라우저 리사이즈시 섹션의 세로 위치값 갱신
$(window).on("resize", setPos);

//브라우저 스크롤시 스크롤값에 따른 버튼 활성화함수 호출
$(window).on("scroll", function(){
    var scroll = $(window).scrollTop();
    activation(scroll);        
});

//버튼 클릭시 매칭되는 섹션의 위치값으로 자동이동함수 호출
btns.on("click", function(e){
    e.preventDefault();
    moveScroll(this);
});

//마우스 휠 이벤트 발생시
//휠을 내리면 아래 섹션으로 이동, 올리면 위 섹션으로 이동함수호출
boxs.on("mousewheel", function(e){
    e.preventDefault();  
    console.log(e.originalEvent.deltaY);

    if( e.originalEvent.deltaY <0 ){   
        if( $(this).index() != 0 ){
            console.log("wheel up");
            var targetPos = $(this).prev().offset().top;
            $("html, body").stop().animate({ scrollTop : targetPos }, speed);
        }
    }else{       
        if( $(this).index()  != boxs.length-1 ){
            console.log("wheel down");
            var targetPos = $(this).next().offset().top;
            $("html, body").stop().animate({ scrollTop : targetPos }, speed);
        }
    }
});

//섹션의 세로 위치값을 배열에 저장하는 함수
function setPos(){
    posArr = [];
    boxs.each(function(index){
        posArr.push( boxs.eq(index).offset().top );
    });
    //console.log(posArr);
}

//인수로 스크롤값을 받아 스크롤위치에 따른 버튼활성화 함수
function activation(scroll){
    boxs.each(function(index){
        if(scroll >= posArr[index]+base) {
            btns.children("a").removeClass(activeName);
            btns.eq(index).children("a").addClass(activeName);

            boxs.removeClass(activeName);
            boxs.eq(index).addClass(activeName);
        }
    })  
}

//인수로 이벤트 발생객첵를 받아 해당 섹션의 위치로 자동 이동함수 호출
function moveScroll(el){
    var target = $(el).children("a").attr("href");
    var targetPos = $(target).offset().top;
   $("html, body").stop().animate({ scrollTop : targetPos}, speed);
}