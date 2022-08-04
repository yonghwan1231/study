
var boxs = $("section");
var btns = $("#navi li");
var speed = 1000;
var activeName = "on";
var base = -200;
var posArr;

setPos();

$(window).on("resize", setPos);

$(window).on("scroll", function(){
    var scroll = $(window).scrollTop();
    activation(scroll);        
});

btns.on("click", function(e){
    e.preventDefault();
    var i = $(this).index();
    moveScroll(i);
});

boxs.on("mousewheel", function(e){
    e.preventDefault();  
    console.log(e.originalEvent.deltaY);

    if( e.originalEvent.deltaY <0 ){   
        if( $(this).index() != 0 ){
            console.log("wheel up");
            var i = $(this).index();
            moveScroll(i-1);
        }
    }else{       
        if( $(this).index()  != boxs.length-1 ){
            console.log("wheel down");
            var i = $(this).index();
            moveScroll(i+1);
        }
    }
});


function setPos(){
    posArr = [];
    boxs.each(function(index){
        posArr.push( boxs.eq(index).offset().top );
    });
    //console.log(posArr);
}

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

function moveScroll(index){
    $("html, body").stop().animate({ scrollTop : posArr[index] }, speed);
}