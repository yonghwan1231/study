$(function(){

  var i=0
  var setintvCtrl = true

  $(".create").click(function(){

    var today = new Date();
    var sec = today.getSeconds()
    today.setSeconds(sec+5)
    var deleteTime = today.toGMTString();

    document.cookie = "test=cookie; path=/; expires="+deleteTime

    if(setintvCtrl){

      setintvCtrl=false

      i=5

      $("p>span").text(i)

      var count = setInterval(function(){
        if(i>0){
          i--
          $("p>span").text(i)
        }
        else if(i==0){
          setintvCtrl=true
          clearInterval(count)
        }
      },1000)

    }
    
  })

  

  $(".view").click(function(){

    alert(document.cookie)

  })


  $(".delete").click(function(){

    var today = new Date();
    var deleteTime = today.toGMTString();

    document.cookie = "test=cookie; path=/; expires="+deleteTime

    i=0
    $("p>span").text(i)

  })

})