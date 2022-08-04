$(document).ready(function(){     
    var url =  "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList";
    var key = "6cedd75a1b14ba56595a24b0a7718a35";
    var target = "#gallery>ul";
    var num = 5;

    //브라우저 로딩시 갤러리 생성 함수 호출
    getFlickr(url, key, num, target);
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