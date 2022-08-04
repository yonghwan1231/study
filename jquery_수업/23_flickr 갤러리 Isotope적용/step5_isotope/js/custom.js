//https://isotope.metafizzy.co/
$(document).ready(function(){     
    var url =  "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList";
    var url_search = "https://www.flickr.com/services/rest/?method=flickr.photos.search";
    var key = "6cedd75a1b14ba56595a24b0a7718a35";
    var target = "#gallery>ul";
    var num = 50;

    getFlickr(url, key, num, target);
 
    $("#search button").on("click", function(){    
        $("#gallery").removeClass("on");    
        var tags = $("#search input").val();
        console.log(tags);
        if(tags == "")  alert("검색어를 입력하세요");
        getFlickr(url_search, key, num, target, tags);
        $("#search input").val("");
    });

    $("body").on("keypress", function(e){         
        if(e.keyCode == 13) {  
           $("#gallery").removeClass("on");  
            var tags = $("#search input").val();
            if(tags == "")  alert("검색어를 입력하세요");
            getFlickr(url_search, key, num, target, tags);
            $("#search input").val("");
        }
    });

    $("body").on("click", "#gallery ul li a", function(e){
        e.preventDefault();
        var imgSrc = $(this).attr("href");
        createPop(imgSrc);
    });

    $("body").on("click", ".pop span", function(){
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
    });
});

function getFlickr(url, key, num, target, tags){
    console.log(tags);
    $.ajax({
        url: url,
        dataType: "json",
        data : {
            api_key : key, 
            per_page : num,
            format : "json",
            nojsoncallback : 1,
            tags : tags,
            tagmode : "any",
            privacy_filter: 5
        }
    })
    .success(function(data){
        var item = data.photos.photo;
        createList(target, item);  
        //동적으로 리스트가 생성된 이후 isoLayout호출
        isoLayout();
    })
    .error(function(err){
        console.log(err);
    });
}
function createList(targetEl, data){
    $(targetEl).empty();

    $(data).each(function(index, data){
        var tit = data.title;        

        $(targetEl).append(
            $("<li>").append(
                $("<div>").append(
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
        )
    })
}
function createPop(imgSrc){
    $("body").append(
        $("<aside class='pop'>").append(
            $("<img>").attr("src", imgSrc),
            $("<span>").text("close")
        )
    );
    $(".pop").fadeIn(500);
}
//isotope 레이아웃 적용해주는 함수
function isoLayout(){
    setTimeout(function(){
        new Isotope("#gallery>ul", {
            itemSelector : "#gallery>ul>li",
            columnWidth: "#gallery>ul>li",
            transitionDuration: "0.8s",
            percentPosition: true
        });

        $("#gallery").addClass("on");
    },1500);    
}

