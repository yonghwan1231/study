$(document).ready(function(){
    
    //flickr api에 키값을 넣어서 데이타 요청
    //baseUrl&api_key=키값&per_page=5&format=json&nojsoncallback=1
    $.ajax({
        url: 'https://www.flickr.com/services/rest/?method=flickr.interestingness.getList',
        dataType: "json",
        data : {
            api_key : "6cedd75a1b14ba56595a24b0a7718a35", //키값
            per_page : 5, //페이지당 보일 이미지 요청 갯수
            format : "json",
            nojsoncallback : 1
        }
    })
    .success(function(data){
        console.log(data.photos.photo);
        var item = data.photos.photo;

        $(item).each(function(index, data){
            var tit = data.title;
            console.log(tit);

            $("body").append(
                $("<article>").append(
                    $("<h1>").text(tit)
                )
            )
        })
    })
    .error(function(err){
        console.log(err);
    })
});