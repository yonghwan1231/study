// each :  배열이나 반복되는 DOM을 자동으로 반복처리

var fruit = ["apple", "strawberry", "melon", "banana"];
/*
for(var i = 0;  i<fruit.length; i++){
    console.log(i);
    console.log(fruit[i]);
}
*/

var itemData = [
    {
        title : "네이버",
        link : "https://www.naver.com" ,
        imgSrc : "img/s1.jpg"
    },
    {
        title : "네이트",
        link : "https://www.nate.com" ,
        imgSrc : "img/s2.jpg"
    },
    {
        title : "구글",
        link : "https://www.google.com" ,
        imgSrc : "img/s3.jpg"
    }
];

$("#wrap").append('<ul class="list">');

$(itemData).each(function(index,el){
    $(".list").append(
        $("<li>")
            .append(
                $("<a>")
                    .attr({
                        href : this.link,
                        target : "_blank"
                    })
                    .append(
                        $("<img>")
                            .attr({
                                src : this.imgSrc,
                                alt : this.title
                            })
                    )
            )
    )
})

