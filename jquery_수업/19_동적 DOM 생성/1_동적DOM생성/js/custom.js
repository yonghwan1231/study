/*
    방법 1   append() 활용해서 태그, 속성을 직접 다 연결
    방법 2  html() 활용해서 모든 태그와 속성을 아예 전체 문자열로 만들어서 삽입
    방법 3  template literal 활용해서 문자열안에 직접 변수를 연결해 DOM생성코드 삽입
*/

$(document).ready(function(){

    $("#wrap")
        .append(
            $("<a>")
                .attr({
                    href : "https://www.naver.com",
                    target : "_blank"
                })    
                .append(
                    $("<img>")
                        .attr({
                            src : "img/s1.jpg",
                            alt : "네이버"
                        })
                )
        );

    var link = "https://www.nate.com";
    var imgSrc = "img/s2.jpg";
    var txt = "네이트";

    var result = '';
    result += '<a href='+link+' target="_blank">';
    result += '<img src='+imgSrc+' alt='+txt+'>';
    result += '</a>';

    $("#wrap").html(result);


    var result2 = `
        <a href=${link} target="_blank">
            <img src=${imgSrc} alt=${txt}>
        </a>
    `;

    $("#wrap").html(result2);

                        
        

});