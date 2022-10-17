
function Input(설정값) {
  this.설정값 = 설정값
  this.인풋타입 = 설정값.인풋타입.toUpperCase()
  this.렌더링()
  this.이벤트()
}

Input.prototype.이벤트 = function () {

  var 소속객체 = this
  var 버튼들 = this.설정값.렌더링위치.querySelectorAll('button[data-number]')
  var 입력란 = this.설정값.렌더링위치.querySelector('.input-value').querySelector('strong')
  var 힌트문자 = this.설정값.렌더링위치.querySelector('.input-value').querySelector('.placeholder')
  var 초기화아이콘 = this.설정값.렌더링위치.querySelector('.input-value').querySelector('[data-number="reset"]')

  버튼들.forEach(function (el) {
    el.addEventListener('click', function (e) {

      if (e.target.getAttribute('data-number') === 'reset') {
        입력란.innerText = ''
        힌트문자.classList.remove('hide')
        초기화아이콘.classList.add('hide')
      }
      else if (e.target.getAttribute('data-number') === 'delete') {
        입력란.innerText = 입력란.innerText.slice(0, 입력란.innerText.length - 1)
        if (입력란.innerText.length === 0) {
          힌트문자.classList.remove('hide')
          초기화아이콘.classList.add('hide')
        }
      }
      else if (입력란.innerText.length < 소속객체.설정값.최대글자수) {
        힌트문자.classList.add('hide')
        초기화아이콘.classList.remove('hide')
        입력란.innerText += e.target.getAttribute('data-number')
      }
    })
  })
}

Input.prototype.렌더링 = function () {

  this.설정값.렌더링위치.innerHTML =
    `
    <div class="input-box">
      <input type="hidden">
      <div class="input-value">
        <strong></strong>
        <span class='placeholder'>${this.인풋타입} 입력</span>
        <button class="hide" data-number="reset">X</button>
      </div>
    </div>

    <ul class="input-btn">
      <li>
        <button data-number="1">1</button>
      </li>
      <li>
        <button data-number="2">2</button>
      </li>
      <li>
        <button data-number="3">3</button>
      </li>
      <li>
        <button data-number="4">4</button>
      </li>
      <li>
        <button data-number="5">5</button>
      </li>
      <li>
        <button data-number="6">6</button>
      </li>
      <li>
        <button data-number="7">7</button>
      </li>
      <li>
        <button data-number="8">8</button>
      </li>
      <li>
        <button data-number="9">9</button>
      </li>
      <li>
        <button data-number="reset">초기화</button>
      </li>
      <li>
        <button data-number="0">0</button>
      </li>
      <li>
        <button data-number="delete">지움</button>
      </li>
    </ul>
    `
}