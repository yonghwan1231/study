/*
호출 위치에 따른 this의 참조값
1. 일반함수 안쪽에서의 this --> window객체
2. 이벤트문 안쪽에서의 this --> 이벤트가 발생한 대상
3. 일반 객체안에서의 this --> 객체 자기 자신을 지칭
4. 생성자 함수안에서의 this --> 해당 생성자로 복사가될 인스턴스를 지칭
*/

/*
객체지향 작업 순서
1-생성자 함수를 생성 (이름은 대문자로 시작)
2-생성자 함수의 prototype에 기존 함수들을 등록
3-생성자함수 내부에서 자기 자신의 프로토타입에 등록된 함수 호출
4-각 함수 안쪾에 있는 모든 변수값을 this객체에 옮겨담음
*/

//생성자함수로부터 인스턴스가 new연산자로 복사가 되는 순간
function Tab(selector){       
    this.init(selector);
    this.bindingEvent();
}
Tab.prototype.init= function(selector){
    this.frame = $(selector);
    this.btns = this.frame.find("ul>li");
    this.boxs = this.frame.find("div>div");
}
Tab.prototype.bindingEvent = function(){
    //생성자함수안족의 this값은 인스턴스를 지칭하나
    //이벤트 발생하는 순간 this값이 인스턴스가 아닌 이벤트 발생 대상을 참조하므로
    //this값이 엉키는것을 방지하기 위해서 
    //이벤트문 안쪽에서만 인스턴스 this를 지역변수 self에 옮겨담아서 활용
    var self = this;
    
    self.btns.on("click", function(e){
        e.preventDefault();    
        var i = $(this).index();
        self.activation(i);   
    });
}
Tab.prototype.activation= function(index){
    this.btns.removeClass("on");
    this.btns.eq(index).addClass("on");

    this.boxs.removeClass("on");
    this.boxs.eq(index).addClass("on");
}






