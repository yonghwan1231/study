/*
    cookie 
    : 클라이언트 컴퓨터에 물리적인 파일을 만들어 특정 정보값을 저장
    : 로그인, 장바구니, 회원정보 표시

    session 
    : 서버쪽에 특정 정보를 저장
    : 보안에 중요한 정보값을 처리할때 활용

    쿠키모양
    name = valule; path=/; expires="해당쿠키가 삭제될 시간"

    쿠키확인
    document.cookie; (문자열 형태로 저장되어 있음)

    특정 쿠키의 존재여부 확인
    document.cookie.indexOf("찾을 쿠키 문자");

    쿠키 만들어서 등록하는 방법
    document.cookie = {쿠키이름}={쿠키값}; path=/; expires={쿠키삭제};

    등록되어 있는 쿠키를 삭제하는 방법
    document.cookie = {삭제할쿠키이름}={쿠키값}; path=/; expires={현재시간};
*/

$("#create").on("click", function(){
    var today = new Date();
    var sec = today.getSeconds();
    today.setSeconds(sec+5);
    var expire = today.toGMTString();
    document.cookie = "today=done; path=/; expires="+expire;

});

$("#check").on("click", function(){
    console.log(document.cookie);
})

$("#delete").on("click", function(){
    var today = new Date();
    var sec = today.getSeconds();
    today.setSeconds(sec);
    var expire = today.toGMTString();
    document.cookie = "today=done; path=/; expires="+expire;
})