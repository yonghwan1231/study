$(document).ready(function(){     
    var url =  "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList";
    var key = "6cedd75a1b14ba56595a24b0a7718a35";
    var target = "#gallery>ul";
    var num = 5;

    //브라우저 로딩시 갤러리 생성 함수 호출
    getFlickr(url, key, num, target);

    //리스트 클릭시 팝업함수 호출
    $("body").on("click", "#gallery ul li a", function(e){
        e.preventDefault();
        var imgSrc = $(this).attr("href");
        createPop(imgSrc);
    });

    //팝업 닫기버튼 클릭시 팝업 닫기
    $("body").on("click", ".pop span", function(){
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
    })
});

//Flickr api에 데이터 요청해서 배열값을 전달하는 함수
function getFlickr(url, key, num, target){
    $.ajax({
        url: url,
        dataType: "json",
        data : {
            api_key : key, 
            per_page : num,
            format : "json",
            nojsoncallback : 1
        }
    })
    .success(function(data){
        var item = data.photos.photo;
        createList(target, item);        
    })
    .error(function(err){
        console.log(err);
    });
}

//배열 데이터를 전달받아서 리스트형태로 DOM생성하는 함수
function createList(targetEl, data){
    $(data).each(function(index, data){
        var tit = data.title;        

        $(targetEl).append(
            $("<li>").append(
                $("<a>")
                    .attr({
                        href:  "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"
                    })
                    .append(
                        $("<img>").attr({
                            src : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_m.jpg"
                        })
                    ),
                $("<h1>").text(tit)
            )
        )
    })
}

//동적 팝업 생성함수
function createPop(imgSrc){
    $("body").append(
        $("<aside class='pop'>").append(
            $("<img>").attr("src", imgSrc),
            $("<span>").text("close")
        )
    );
    $(".pop").fadeIn(500);
}