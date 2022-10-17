
function Popup(설정값) {
  this.설정값 = 설정값
  this.팝업태그 = document.querySelector('.popup')
  this.렌더링()
}

Popup.prototype.렌더링 = function () {
  if (this.팝업태그 == undefined) {
    return
  }
  else {
    if (this.설정값.팝업타입 === '에러') {
      this.팝업태그.classList.add('error')
    }
    this.팝업태그.innerHTML =
      '<header>' +
      this.설정값.팝업제목 +
      '</header>' +
      '<section>' +
      this.설정값.팝업내용 +
      '</section>' +
      '<footer>' +
      '</footer>'
  }
  this.버튼생성()
  this.이벤트()
}

Popup.prototype.버튼생성 = function () {
  var 소속객체 = this

  this.설정값.팝업버튼.forEach(function (el) {
    var 버튼추가 = document.createElement('button')
    버튼추가.innerHTML = el.버튼명
    버튼추가.onclick = el.이벤트
    소속객체.팝업태그.querySelector('footer').append(버튼추가)
  })
}

Popup.prototype.이벤트 = function () {
  var 소속객체 = this

  this.팝업태그.querySelectorAll('button').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault()
      소속객체.팝업태그.style.display = 'none';
    })
  })
}
