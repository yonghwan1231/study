$(function () {

  setInterval(countDown, 1000);

  function countDown() {

    var month = new Date().getMonth() + 1
    var date = new Date().getDate()


    $(".month").text(12 - month)
    $(".date").text(31 - date)


  }

})