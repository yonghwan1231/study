$(function(){
  
  $("#btn1").click(function(e){
    e.preventDefault();
    if(eventTrigger){
      $("#btn1").addClass("click")
      $("#btn2").removeClass("click")
      $("#typo").addClass("hide")
      contents1Open()
    } else{
      return false
    }
    contents2Close()
  })

  // ----

  $("#btn2").click(function(e){
    e.preventDefault();
    if(eventTrigger){
      $("#btn2").addClass("click")
      $("#btn1").removeClass("click")
      $("#typo").addClass("hide")
      contents2Open()
    } else{
      return false
    }
    contents1Close()
  })

  // ----

  $(".close1").click(function(e){
    e.preventDefault();
    $("#typo").removeClass("hide")
    contents1Close()
  })
  
  // ----

  $(".close2").click(function(e){
    e.preventDefault();
    $("#typo").removeClass("hide")
    contents2Close()
  })


  // ----
  // ----
  // ----
  // ----
  // ----
  // ----
  // ----
  // ----
  // ----
  // ----


  var eventTrigger = true

  function contents1Open(){
    eventTrigger = false

    $(".contents1").css({"display":"block"})
    $(".top").animate({"width":"100%"},500,function(){
      $(".right").animate({"height":"100%"},500,function(){
        $(".bottom").animate({"width":"100%"},500,function(){
          $(".left").animate({"height":"100%"},500,function(){
            $(".contents1").css({"background-color":"black","transition":"2s"})
            $(".close1").animate({"right":"0px","opacity":"1"},500,function(){
              eventTrigger = true
            })
          })
        })
      })
    })
  }

  // ----

  function contents1Close(){
    $(".contents1").css({"background-color":"transparent","transition":"0.5s"})
    $(".close1").animate({"right":"-30px","opacity":"0"},500)
    $(".top").animate({"width":"0%"},500/2,function(){
      $(".right").animate({"height":"0%"},500/2,function(){
        $(".bottom").animate({"width":"0%"},500/2,function(){
          $(".left").animate({"height":"0%"},500/2)
        })
      })
    })
  }

  // ----

  function contents2Open(){
    eventTrigger = false

    $(".contents2").css({"display":"block","background-color":"blue"}).animate({"height":"300px","margin-top":"-150px"},500,function(){
      $(".close2").animate({"right":"0px","opacity":"1"},500,function(){
        eventTrigger = true
      })
    })
  }

  // ----

  function contents2Close(){
    $(".close2").animate({"right":"-30px","opacity":"0"},500/2)
    $(".contents2").animate({"height":"0px","margin-top":"0px"},500/2)
  }

})