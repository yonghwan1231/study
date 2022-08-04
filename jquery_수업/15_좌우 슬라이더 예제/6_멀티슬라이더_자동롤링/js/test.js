$(function () {

  $(".slide1>li:last").prependTo($(".slide1"))
  $(".slide2>li:last").prependTo($(".slide2"))

  var eventTrigger = true


  $(".next").click(function (e) {
    e.preventDefault()
    clearInterval(timer)
    if (eventTrigger) {
      eventTrigger = false
      slide()
    }

    timer = setInterval(slide, 2000);
  })


  $(".prev").click(function (e) {
    e.preventDefault()
    clearInterval(timer)
    if (eventTrigger) {
      eventTrigger = false
      slide_r()
    }

    timer = setInterval(slide, 2000);
  })

  function slide() {
    $(".slide1").animate({ "margin-left": "-200%" }, 1000, function () {
      $(this).children("li:first").appendTo(this)
      $(this).css("margin-left", "-100%")
      eventTrigger = true
    })
    $(".slide2").animate({ "margin-left": "-200%" }, 1000, function () {
      $(this).children("li:first").appendTo(this)
      $(this).css("margin-left", "-100%")
      eventTrigger = true
    })
  }

  function slide_r() {
    $(".slide1").animate({ "margin-left": "0%" }, 1000, function () {
      $(this).children("li:last").prependTo(this)
      $(this).css("margin-left", "-100%")
      eventTrigger = true
    })
    $(".slide2").animate({ "margin-left": "0%" }, 1000, function () {
      $(this).children("li:last").prependTo(this)
      $(this).css("margin-left", "-100%")
      eventTrigger = true
    })
  }


  var timer = setInterval(slide, 2000)

  $(".auto").click(function (e) {

    e.preventDefault();
    clearInterval(timer);
    timer = setInterval(slide, 2000);

  })

})
