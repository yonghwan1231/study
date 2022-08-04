setInterval(showTime, 1000);

function showTime(){
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    changeBg(hour);
    getHr(hour);    

    $(".hr").text(plusZero(hour));
    $(".min").text(plusZero(min));
    $(".sec").text(plusZero(sec));    
} // 

function getHr(hour){
    if(hour<12){
        $(".day").text("am");
    }else{
        $(".day").text("pm");
    }
} // 시간 데이터가 12 이하면 class="day" 요소의 text를 am으로 변환, 아니면 pm으로 변환 

function plusZero(time){
    ( time < 10 ) ? time = "0"+time : time;
    return time; 
} // 숫자가 10 전까지는 데이터 앞에 0 을 붙여서 표시하고, 10이 넘어가면 데이터를 그대로 표시

function changeBg(hour){
    if(hour >=5 && hour<11){
        $("#wrap").removeClass().addClass("morning");
    }
    if(hour >=11 && hour<16){
        $("#wrap").removeClass().addClass("afternoon");
    }
    if(hour >=16 && hour<21){
        $("#wrap").removeClass().addClass("evening");
    }
    if(hour >=21 || hour<5){
        $("#wrap").removeClass().addClass("night");
    } // 시간 데이터 범위에 따라 배경색 전환
}