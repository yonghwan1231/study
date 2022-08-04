$.ajax({
    url : "data/item.json",
    dataType : "json",
    beforeSend : function(){
        //로딩바 출력
    },
    success : function(data){
        console.log(data.item);

        $("#wrap").append('<ul class="list">');

        $(data.item).each(function(){
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
    },
    error : function(err){
        console.error(err);
    }
});


