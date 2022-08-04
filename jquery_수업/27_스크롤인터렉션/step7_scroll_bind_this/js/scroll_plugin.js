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

    //1. 플러그인 호출시 사용자 옵션 객체를 내부로 전달
    $.fn.myScroll = function(option){ 
        //2. 기존의 디폴트 옵션 객체값을 사용자 객체값으로 덮어쓰기
        option = $.extend({}, $.defaults, option);     
        //3. 덮어쓰기한 객체값을 생성자함수로 전달해서 인스턴스 생성
        new MyScroll(this, option);
        return this;
    }

    function MyScroll(selector, option){
        //4. 생성자 함수로 받은 옵션객체를 init메서드에 전달해서 호출
        this.init(selector, option);
        this.setPos();
        this.bindingEvent();
    }
    MyScroll.prototype.init = function(selector, option){
        //5. 전달받은 옵션 객체값을 각각 필요한 인스턴스 키값에 전달
        this.boxs = selector;
        this.btns = $(option.btns);
        this.speed = option.speed;
        this.activeName = option.active_class;
        this.base = option.base;
        this.posArr;
    }
    
    MyScroll.prototype.bindingEvent = function(){       
    
        $(window).on("resize", this.setPos);
    
        $(window).on("scroll", function(){
            var scroll = $(window).scrollTop();
            this.activation(scroll);        
        }.bind(this));
    
        this.btns.on("click", function(e){
            e.preventDefault();          
            var i = $(e.currentTarget).index();
            this.moveScroll(i);
        }.bind(this));
    
        this.boxs.on("mousewheel", function(e){
            e.preventDefault();  
            console.log(e.originalEvent.deltaY);
    
            if( e.originalEvent.deltaY <0 ){   
                if( $(e.currentTarget).index() != 0 ){
                    console.log("wheel up");
                    var i = $(e.currentTarget).index();
                    this.moveScroll(i-1);
                }
            }else{       
                if( $(e.currentTarget).index()  != this.boxs.length-1 ){
                    console.log("wheel down");
                    var i = $(e.currentTarget).index();
                    this.moveScroll(i+1);
                }
            }
        }.bind(this));
    }
    
    MyScroll.prototype.setPos = function(){
        this.posArr = [];       
        this.boxs.each(function(index){
            this.posArr.push( this.boxs.eq(index).offset().top );
        }.bind(this));
    }
    
    MyScroll.prototype.activation = function(scroll){       
        this.boxs.each(function(index){
            if(scroll >= this.posArr[index]+this.base) {
                this.btns.children("a").removeClass(this.activeName);
                this.btns.eq(index).children("a").addClass(this.activeName);
    
                this.boxs.removeClass(this.activeName);
                this.boxs.eq(index).addClass(this.activeName);
            }
        }.bind(this))  
    }
    
    MyScroll.prototype.moveScroll = function(index){
        $("html, body").stop().animate({ scrollTop : this.posArr[index] }, this.speed);
    }    
})(jQuery);


