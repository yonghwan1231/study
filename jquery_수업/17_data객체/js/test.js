$(function () {

  setInterval(clock, 1000);


  function clock() {
    var hour = new Date().getHours()
    var min = new Date().getMinutes()
    var sec = new Date().getSeconds()

    $(".hour").text(zeroPlus(hour))
    $(".min").text(zeroPlus(min))
    $(".sec").text(zeroPlus(sec))

    if (hour < 12) {
      $(".day").text("am")
    }
    else {
      $(".day").text("pm")
    }

  }

  function zeroPlus(time) {

    (time < 10) ? time = "0" + time : time;
    return time

  }


})