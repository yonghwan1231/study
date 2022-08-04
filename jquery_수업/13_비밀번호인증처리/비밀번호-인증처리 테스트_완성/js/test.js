$(function(){

  $("input[type=submit]").click(function(e){

    if($("#pwd1").val()===$("#pwd2").val()){
      if(
        ($("#pwd1").val().length <5) || 
        ($("#pwd1").val().length >10) || 
        !(/[0-9]/.test($("#pwd1").val())) || 
        !(/[a-zA-z]/.test($("#pwd1").val())) || 
        !(/[~!@#$%^&*()+-]/.test($("#pwd1").val()))
      ){
        alert("비밀번호는 숫자와 영문, 특수문자를 포함하여 5자 이상, 10자 이하로 입력해 주세요.")
        e.preventDefault();
        $("#pwd1,#pwd2").css({"background-color":"#ffeafe","border":"1px solid #ff24ff"})
      }
    } else{
      alert("비밀번호를 동일하게 입력해 주세요.")
      e.preventDefault();
      $("#pwd1,#pwd2").css({"background-color":"#ffeafe","border":"1px solid #ff24ff"})
    }

  })

})