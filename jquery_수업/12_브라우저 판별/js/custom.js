$(document).ready(function(){

    /*
        모든 브라우저는 navigator객체 안에 userAgent값으로
        해당 브라우저의 정보값을 담고 있음

        var navigator = {
            userAgent : ~
        }

        브라우저 마다 고유의 문자를 포함

        크롬 = Chrome
        IE = Trident
        엣지 = Edg
        파이어폭스 = Firefox        
    */

    var ver = navigator.userAgent; 
    
    // if(ver.search(/chrome/i) != -1 && ver.search(/edg/i) == -1){
    //     console.log("크롬 브라우저 입니다.");
    //     $("body").addClass("chrome");
    //     console.log(navigator.userAgent)
    // }

    // if(ver.search(/trident/i) != -1){
    //     console.log("IE 브라우저 입니다.");
    //     $("body").addClass("ie");
    // }

    // if(ver.search(/edg/i) != -1 ){
    //     console.log("엣지 브라우저 입니다.");
    //     $("body").addClass("edge");
    // }

    // if(ver.search(/firefox/i) != -1){
    //     console.log("파이어폭스 브라우저 입니다.");
    //     $("body").addClass("ff");
    // }

    if(navigator.userAgent.search(/chrome/i) != -1 && ver.search(/edge/i) == -1){
        $('body').addClass("chrome")
    }
    
    if(navigator.userAgent.search(/trident/i) != -1){
        $('body').addClass("ie")
    }

    if(navigator.userAgent.search(/edge/i) != -1){
        $('body').addClass("edge")
    }

    if(navigator.userAgent.search(/firefox/i) != -1){
        $('body').addClass("ff")
    }

});