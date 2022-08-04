$(function(){

  $("input[type=submit]").click(function(e){

    if(!idCheck()){
      e.preventDefault()
      return false

    }if(!pwdCheck()){
      return false
    }

    if(!gndrCheck()){
      return false
    }

    if(!eduCheck()){
      return false
    }

    if(!intCheck()){
      return false
    }

  })

  // ----------함수모음----------

  function idCheck(){

    if($("#id").val()==""){
      alert($("#id").attr("placeholder"))
      $("#id").addClass("error")
      return false
    } 
    else if($("#id").val().length<5){
      alert("ID는 5자 이상 입력하세요.")
      $("#id").addClass("error")
      return false
    } 
    else{
      $("#id").removeClass("error")
      return true
    }

  }


  function pwdCheck(){
    
    if($("#pwd1").val()==""){
       alert($("#pwd1").attr("placeholder"))
       $("#pwd1").addClass("error")
       return false
     }
     else if($("#pwd1").val()!=$("#pwd2").val()){
       alert("비밀번호 동일하게 재 입력해 주세요.")
       $("#pwd2").addClass("error")
       return false
     }

     else{
      $("#pwd1, #pwd2").removeClass("error")
       return true
     }
  }


  function gndrCheck(){

    if($("input[name=gender]").is(":checked") === false){
      alert("성별을 선택하세요.")
      $("#gender").addClass("error")
      return false
    }
    else{
      $("#gender").removeClass("error")
       return true
    }

  }
  

  function eduCheck(){

    if($("select[name=education]").children("option:selected").val()===""){
      alert("학력을 선택하세요.")
      $("select[name=education]").addClass("error")
      return false
    } 
    else{
      $("select[name=education]").removeClass("error")
      return true
    }

  }


  function intCheck(){

    if($("input[name=interests]").is(":checked") === false){
      alert("관심 분야를 한가지 이상 선택하세요.")
      $("#interests").addClass("error")
      return false
    }
    else{
      $("#interests").removeClass("error")
       return true
    }

  }

})