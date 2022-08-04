$(function () {

  $(".contents>div").hide()
  $(".contents>div:first-child").show()

  // 기본상태

  var eventTrigger = true

  $(".btn").click(function (e) {
    var i = $(this).index()

    e.preventDefault();

    if (eventTrigger) {
      eventTrigger = false
      $(".contents>div").not(":eq(" + i + ")").fadeOut(500).children("div").fadeOut(500).removeClass("action")
      $(".contents>div").eq(i).fadeIn(500).children("div").fadeIn(500).toggleClass("action")
      setTimeout(function () {
        eventTrigger = true
      }, 1000)
    }

  })

})