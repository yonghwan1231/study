//태그 이름으로 DOM 검색
// document.getElementsByTagName("li");
//아이디 이름으로 DOM 검색
// document.getElementById("list1");

/*
    변수: 특정값을 임의의 공간에 임시로 저장.
    1.성능의 이점
    2.코드의 재사용

    변수의 이름
    1. 영어로만 변수명 지정
    2. 숫자로 시작 불가
    3. 특수문자로 시작불가 ( 예외/ $,_);
    4. 중간에 - 입력불가
    5. camel case : orangeBox
    6. snake case : orange_box 
*/
//태그 이름으로 DOM 검색
// var $li = document.getElementsByTagName("li");
// console.log ($li[0]);
//아이디 이름으로 DOM 검색
// var $list1 = document.getElementById("list1");
// console.log ($list1);
//클래스 이름으로 DOM 검색
// var $list = document.getElementsByClassName("list");
// console.log ($list[0]);

/* 
    여러개의 그룹 요소를 하나씩 뽑아내는 공식

    일련의 반복되는 작업을 한번에 처리하는 공식 : 반복문
    for (var i=시작순서; 끝나는 순서; 증감방식){

    }
*/
// 여러개 요소를 탐색하는 방법
var $li = document.getElementsByTagName("li");

for (var i=0; i< $li.length; i++){
    // console.log($li[i]);
}

// 특정 요소에 이벤트를 연결하는 방법
// $li[0].onclick = function(){
//     alert("You click list1!")
// }
// $li[1].onclick = function(){
//     alert("You click list2!")
// }
// $li[2].onclick = function(){
//     alert("You click list3!")
// }
// $li[3].onclick = function(){
//     alert("You click list4!")
// }
// $li[4].onclick = function(){
//     alert("You click list5!")
// }


// for (var i=0;i<$li.length; i++){
//     $li[i].onclick = function(){
//         console.log(this);
//         // alert ("You click list"+ i + "!");
//     }
// }
// 특정 요소에 이벤트를 연결하는 방법2
// for (var i=0; i< $li.length; i++){
//     $li[i].addEventListener("click",function(){
//         console.log(i);
//     })
// }

//특정 요소 클릭시 클릭한 요소의 순서 구하는 방법

for (var i=0;i<$li.length; i++){
    (function(idx) {
        $li[idx].onclick = function(){
            console.log(idx);
            // alert ("You click list"+ i + "!");
        }
    })(i);
}
