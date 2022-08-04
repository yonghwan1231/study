$(document).ready(function(){
    new MyScroll();
});

function MyScroll(){
    this.init();
    this.bindingEvent();
}
MyScroll.prototype.init = function(){
    this.boxs = $("section");
    this.btns = $("#navi li");
    this.speed = 1000;
    this.activeName = "on";
    this.base = -200;
    this.posArr;
}

MyScroll.prototype.bindingEvent = function(){
    var self = this;
    self.setPos();

    $(window).on("resize", self.setPos);

    $(window).on("scroll", function(){
        var scroll = $(window).scrollTop();
        self.activation(scroll);        
    });

    self.btns.on("click", function(e){
        e.preventDefault();
        var i = $(this).index();
        self.moveScroll(i);
    });

    self.boxs.on("mousewheel", function(e){
        e.preventDefault();  
        console.log(e.originalEvent.deltaY);

        if( e.originalEvent.deltaY <0 ){   
            if( $(this).index() != 0 ){
                console.log("wheel up");
                var i = $(this).index();
                self.moveScroll(i-1);
            }
        }else{       
            if( $(this).index()  != self.boxs.length-1 ){
                console.log("wheel down");
                var i = $(this).index();
                self.moveScroll(i+1);
            }
        }
    });
}

MyScroll.prototype.setPos = function(){
    this.posArr = [];
    var self = this;
    this.boxs.each(function(index){
        self.posArr.push( self.boxs.eq(index).offset().top );
    });
}

MyScroll.prototype.activation = function(scroll){  
    var self = this;
    this.boxs.each(function(index){
        if(scroll >= self.posArr[index]+self.base) {
            self.btns.children("a").removeClass(self.activeName);
            self.btns.eq(index).children("a").addClass(self.activeName);

            self.boxs.removeClass(self.activeName);
            self.boxs.eq(index).addClass(self.activeName);
        }
    })  
}

MyScroll.prototype.moveScroll = function(index){
    $("html, body").stop().animate({ scrollTop : this.posArr[index] }, this.speed);
}

