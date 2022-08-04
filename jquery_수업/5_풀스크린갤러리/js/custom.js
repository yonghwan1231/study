$(document).ready(function(){
    /*
    선택자.attr() 선택한 DOM의 속성(Attribute)를 제어
    선택자.attr({"변경할속성명":"속성값"}) :해당 속성명에 해당하는 값을 변경
    선택자.attr("알아낼 속성명") : 해당 속성명의 값을 알아냄
    선택자.text() : 선택자에 텍스트값 가져오기
    선택자.text("바꿀 텍스트") : 선택자에 텍스트값 변경하기
    */

    /*
    $("#test").attr({
        href :"https://www.nate.com",
        target : "_self",
        title : "네이트로 이동"
    }).text("네이트");
    */

    /*
    미션2
    1. btns li a클릭 시 기본 링크 이동을 막음
    2. 해당 요소인 a태그의 href값을 구해서 변수에 저장
    3. showBox의 자식인 img태그를 찾아서
    4. 해당 img태그의 src값을 위헤서 찾은 변수로 변경


    이벤트연결 메서드 .on
    -- 하나의 DOM에 여러개의 이벤트 등록이 필요한데 실행할 함수가 같을떄
    선택자.on("이벤트명1, 이벤트명2", 함수);

    -- 하나의 DOM에 여러개의 이벤트 등록이 필요한데, 각 이벤트마다 실행할 함수가 다를때
    선택자.on({
        "이벤트명1" : 함수1,
        "이벤트명2" : 함수2
    })
    */    
    /*
    $("#test").on({
        "click": function(){
            console.log("클릭했습니다.")
        },
        "mouseenter": function(){
            console.log("마우스가 들어갔습니다.")
        }
    })
    */

    var len = $("#gallery .btns li").length;
    // id 갤러리 속 클래스.btns 속 자손 요소의 li 의 길이 = len

    $("#gallery .controls div span").text(len);
    //id 갤러리 속 자손 요소인 클래스 controls 속 자손 요소인 div 속 자손 요소인 span  의 text 를 len(#gallery .btns li의 길이) 로 대치한다.
    //

    $("#gallery .btns li a").on("click focusin",function(e){
        e.preventDefault();
        var imgSrc = $(this).attr("href");
        var i = $(this).parent().index()+1;
        var txt = $(this).text();

        $("#gallery h1").text(txt);
    
        $("#gallery .showBox").css({backgroundImage : "url("+imgSrc+")"});
        $("#gallery .controls div strong").text(i);

        $("#gallery .controls .btns li a").css({color : "#999"});
        $(this).css({color:"#fff"});
    });

    /*
    미션2
    1.controls안에 span에는 현재 이미지의 전체 갯수를 스크립트로 적용하고
    2.strong안에는 버튼을 클릭할 때마다 현재 이미지의 순번을 출력
    3.btns li의 a태그는 현재 클릭한 버튼만 글자색으로 흰색으로 활성화
    4.나머지버튼들은 원래 색상으로 비활성화 유지
    */
 
}); 