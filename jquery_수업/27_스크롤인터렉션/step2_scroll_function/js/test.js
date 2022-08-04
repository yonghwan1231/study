$(function () {

  $("a").click(function (e) {
    e.preventDefault();
    $("a").removeClass("on")
    $(this).addClass("on")
  })

})