/*
    기존 객체지향 코드를 플러그인으로 변환순서
    1. 즉시실행함수로 생성자와 메서드를 모두 패키징
    2. 인스턴스 생성 구문을. $.fn.플러그인이름 = function(){} 등록하고 return this;
    3. 등록한 플러그인 이름으로 호출되는 페이지 위치에서 선택자로 호출
    4. 플러그인 안쪽에서 선택자를 this로 받아서 생성자함수로 전달
*/

(function($){

    $.defaults = {
        btns : '#navi li',
        speed : 500,
        active_class : "on",
        base : 0
    }

    $.fn.myScroll = function(option){
        option = $.extend({}, $.defaults, option);      
        new MyScroll(this, option);
        return this;
    }

    function MyScroll(selector, option){
        this.init(selector, option);
        this.setPos();
        this.bindingEvent();
    }
    MyScroll.prototype.init = function(selector, option){
        this.boxs = selector;
        this.btns = $(option.btns);
        this.speed = option.speed;
        this.activeName = option.active_class;
        this.base = option.base;
        this.posArr;
    }
    
    MyScroll.prototype.bindingEvent = function(){
        var self = this;  
    
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
})(jQuery);


