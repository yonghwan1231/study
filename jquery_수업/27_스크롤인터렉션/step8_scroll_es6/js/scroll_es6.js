$(document).ready(function(){
    new MyScroll();
});

/*
    기존 es5기반의 객체지향코드를 es6로 변경하면 좋은점
    1. 기존생성자와 프로토타입 메서드를 하나의 class패키지로 관리가능
    2. 일일이 메서드를 프로토타입에 등록할 필요가 없음
    3. 함수내부의 this값을 구분하면서 bind(this)를 호출할 필요가 없음
    4. 코드가 간결함
    5. 단점은 IE에서 동작이 안됨 (해결방법 babel로 컨버전)
*/

class MyScroll {

    constructor(){
        this.init();
        this.setPos();
        this.bindingEvent();
    }

    init(){
        this.boxs = $("section");
        this.btns = $("#navi li");
        this.speed = 1000;
        this.activeName = "on";
        this.base = -200;
        this.posArr;
    }

    bindingEvent(){    
        $(window).on("resize", this.setPos);

        $(window).on("scroll", ()=>{
            let scroll = $(window).scrollTop();
            this.activation(scroll);        
        });

        this.btns.on("click", (e)=>{
            e.preventDefault();
            let i = $(e.currentTarget).index();
            this.moveScroll(i);
        });

        this.boxs.on("mousewheel", (e)=>{
            e.preventDefault();  
            console.log(e.originalEvent.deltaY);

            if( e.originalEvent.deltaY <0 ){   
                if( $(e.currentTarget).index() != 0 ){
                    console.log("wheel up");
                    let i = $(e.currentTarget).index();
                    this.moveScroll(i-1);
                }
            }else{       
                if( $(e.currentTarget).index()  != this.boxs.length-1 ){
                    console.log("wheel down");
                    let i = $(e.currentTarget).index();
                    this.moveScroll(i+1);
                }
            }
        });
    }

    setPos(){
        this.posArr = [];     
        this.boxs.map((index)=>{
            this.posArr.push( this.boxs.eq(index).offset().top );
        });
    }

    activation(scroll){
        this.boxs.map((index)=>{
            if(scroll >= this.posArr[index]+this.base) {
                this.btns.children("a").removeClass(this.activeName);
                this.btns.eq(index).children("a").addClass(this.activeName);
    
                this.boxs.removeClass(this.activeName);
                this.boxs.eq(index).addClass(this.activeName);
            }
        })  
    }

    moveScroll(index){
        $("html, body").stop().animate({ scrollTop : this.posArr[index] }, this.speed);
    }
}
