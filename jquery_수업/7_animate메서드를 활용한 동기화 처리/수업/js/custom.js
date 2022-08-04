$(document).ready(function(){

    /*
    $(선택자).css({속성명 : 속성값});
    $(선택자).animate({속성명 : 속성값},속도,콜백함수);

    비동기 방식에서는 구문을 순서대로 입력해서 호출하더라도 거의 동시에 호출
    --순서를 강제로 지정해서 이전 구문이 끝날때 까지는 다음 기능을 홀딩 시킴
    --> 동기화처리
    --> es5 : 콜백함수를 통한 동기화
    --> es6 : promise를 통한 동기화

    콜백함수 : 함수의 인수값으로 함수가 들어가는 형태 (콜백함수)

    .hide()  display:none처리해서 숨김
    .show() display:block처리해서 보임
    .fadeIn(속도);
    .fadeOut(속도);

    $(선택자).addClass("on"); 클래스 추가
    $(선택자).removeClass("on"); 클래스 제거
    $(선택자).hasClass("on"); 해당 선택자에 인수로 넣은 클래스가 있는 지 확인
    */

    //Caching
    var $intro = $("#intro");

    var $wrap = $("#wrap");
    var $top = $wrap.find(".top");
    var $right = $wrap.find(".right");
    var $bottom = $wrap.find(".bottom");
    var $left = $wrap.find(".left");

    var $content = $wrap.find(".content");
    var $close1 = $content.find(".close");

    var $wrap2 = $("#wrap2");
    var $close2 = $wrap2.find(".close");

    var $btn1 = $(".btn1");
    var $btn2 = $(".btn2");
    
    var speed = 500;
    var isDone = true; // 1-처음 로딩시 true
    var class_name = "on"; 

    var wrap1 = {
        open : {
            top : {width: "100%"},
            right : {height: "100%"},
            bottom : {width: "100%"},
            left : {height: "100%"},
            close : {right: 30, opacity: 1}
        },
        close : {
            top : {width: "0%"},
            right : {height: "0%"},
            bottom : {width: "0%"},
            left : {height: "0%"},
            close : {right: 0,  opacity: 0}
        }
    }

    var wrap2 = {
        open : {
            self : {height: 400,  marginTop: -200},
            close : {right: 30, opacity: 1}
        },
        close : {
            self : {height: 0, marginTop: 0},
            close : {right:0, opacity:0}
        }
    }

    //첫 번째 버튼 클릭 시
    $btn1.on("click", function(e){
        e.preventDefault();

        var isOn = $(this).hasClass(class_name);
        //활성화 버튼 재 이벤트 방지
        if(isOn) return;

        if(isDone){
            //2-조건문을 통과하자마자 isDone을 false로 변경해서 이벤트 막음
            isDone = false;
            $btn2.removeClass(class_name);
            $btn1.addClass(class_name);        

            closeWrap2();
            openWrap1();
        }                
    });

    //첫 번째 박스의 닫기 버튼 클릭 시
    $close1.on("click",function(e){
        e.preventDefault();

        $btn1.removeClass("on");
        $btn2.removeClass("on");
        closeWrap1();        
    });

    //두 번째 버튼 클릭 시
    $btn2.on("click",function(e){
        e.preventDefault();

        var isOn = $(this).hasClass(class_name);
        if(isOn) return;

        if(isDone){
            isDone = false;
            $btn1.removeClass(class_name);
            $btn2.addClass(class_name);

            closeWrap1();
            openWrap2();
        }        
    });    

    //두 번째 박스의 닫기 버튼 클릭 시
    $close2.on("click",function(e){
        e.preventDefault();

        $btn1.removeClass(class_name);
        $btn2.removeClass(class_name);
        closeWrap2();
    });


    //첫 번째 박스 오픈 함수 정의
    function openWrap1(){
        $intro.removeClass(class_name);
        $top.animate( wrap1.open.top ,speed, function(){
            $right.animate( wrap1.open.right, speed,function(){
                $bottom.animate( wrap1.open.bottom ,speed,function(){
                    $left.animate( wrap1.open.left ,speed,function(){
                        $content.fadeIn(speed,function(){
                            $close1.animate(wrap1.open.close ,speed,function(){                           
                                isDone = true;
                            });
                        });
                    });
                });
            });
        });
    }

    //첫 번째 박스 닫는 함수 정의
    function closeWrap1(){
        $intro.addClass(class_name);
        $content.fadeOut(speed/2, function(){
            $top.animate( wrap1.close.top ,speed/2);
            $bottom.animate( wrap1.close.bottom ,speed/2);
            $left.animate( wrap1.close.left ,speed/2);
            $right.animate( wrap1.close.right ,speed/2);
        });

        $close1.animate( wrap1.close.close ,speed/2);
    }

    //두 번째 박스 오픈 함수 정의
    function openWrap2(){
        $intro.removeClass(class_name);
        $wrap2.animate( wrap2.open.self , speed,function(){
            $close2.animate( wrap2.open.close ,speed,function(){
                isDone = true;
            });
        });
    }

    //두 번째 박스 닫는 함수 정의
    function closeWrap2(){
        $intro.addClass("on");
        $wrap2.animate( wrap2.close.self ,speed/2,function(){
            $(this).children(".close").css( wrap2.close.close );
        });
    }



 
});