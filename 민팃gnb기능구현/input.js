class Input {
  constructor(설정값) {
    this.설정값 = 설정값
    // 기본 설정값
    switch (설정값.인풋타입) {
      default: case 'id':
        설정값.인풋힌트 = 'ID 입력'
        설정값.인풋클래스 = 'id'
        설정값.좌측버튼 = '초기화'
        설정값.좌측버튼기능 = 'reset'
        설정값.최대글자수 = 설정값.최대글자수 || 4;
        break;
      case 'price':
        설정값.인풋힌트 = '0'
        설정값.인풋클래스 = 'price'
        설정값.좌측버튼 = '전액'
        설정값.좌측버튼기능 = 'full'
        설정값.최소금액 = 설정값.최소금액 || 1000
        설정값.최대금액 = 설정값.최대금액 || 70000;
        break;
      case 'etc':
        설정값.인풋힌트 = '0'
        설정값.인풋클래스 = 'etc'
        설정값.좌측버튼 = '초기화'
        설정값.좌측버튼기능 = 'reset'
        break;
      case 'connect':
        설정값.인풋클래스 = 'connect'
        설정값.좌측버튼 = '초기화'
        설정값.좌측버튼기능 = 'reset'
        설정값.입력칸 = 설정값.입력칸 || 6
        설정값.문구 = 설정값.문구 || '문구를 입력해주세요'
        break;
      case 'password':
        설정값.인풋클래스 = 'password'
        설정값.좌측버튼 = '초기화'
        설정값.좌측버튼기능 = 'reset'
        설정값.입력칸 = 설정값.입력칸 || 4
        설정값.노출여부 = 설정값.노출여부 || false
        설정값.문구 = 설정값.문구 || '문구를 입력해주세요'
        break;
      case 'phone':
        설정값.인풋힌트 = '000-0000-0000'
        설정값.인풋클래스 = 'phone'
        설정값.좌측버튼 = '010'
        설정값.좌측버튼기능 = '010'
        설정값.지원번호 = ['010', '011', '016', '017', '018', '019']
        break;
    }
    this.렌더링()
    this.이벤트()
  }
}

Input.prototype.이벤트 = function () {
  // 기본 변수
  var 소속객체 = this
  var 버튼들 = this.설정값.렌더링위치.querySelectorAll('button[data-number]')
  var 입력란 = this.설정값.렌더링위치.querySelector('.input-value').querySelector('strong')
  var 힌트문자 = this.설정값.렌더링위치.querySelector('.input-value').querySelector('.placeholder')
  var 초기화아이콘 = this.설정값.렌더링위치.querySelector('.input-value').querySelector('[data-number="reset"]')
  var 다음버튼 = document.querySelector('.next')
  var 동의버튼 = document.querySelector('input[class="agree"]')
  var 자세히보기 = document.querySelector('.detail')
  // 금액 변수
  var 입력금액 = '0' ? '' : parseInt(입력금액)
  var 기본문구 = this.설정값.인풋타입 === 'price' ? `최대 <span>${this.금액콤마(this.설정값.최대금액)}원</span> 기부 가능해요` : ''
  var 초과문구 = `최대 기부 가능 금액을 <span>초과</span> 했어요`
  var 부족문구 = `최소 기부 가능 금액은 <span>${소속객체.설정값.최소금액}원</span> 입니다.`
  var 금액범위 = this.설정값.렌더링위치.querySelector('.guide')
  // 비번,인증번호 변수
  var 입력칸위치 = 0
  var 입력칸들 = this.설정값.렌더링위치.querySelector('.input-value').querySelectorAll('strong')
  // 폰번호 변수
  var 입력번호 = ''

  버튼들.forEach(function (el) {
    el.addEventListener('click', function (e) {
      document.querySelector('.prev').classList.add('fade-in')
      클릭버튼 = e.target.getAttribute('data-number')
      switch (소속객체.설정값.인풋타입) {

        default: case 'id':
          if (클릭버튼 === 'reset') 입력창초기화(소속객체.설정값.인풋타입)
          else if (클릭버튼 === 'delete') {
            입력란.innerText = 입력란.innerText.slice(0, 입력란.innerText.length - 1)
            if (입력란.innerText.length === 0) 입력창초기화(소속객체.설정값.인풋타입);
          }
          else if (입력란.innerText.length < 소속객체.설정값.최대글자수) {
            입력창활성화(소속객체.설정값.인풋타입)
            입력란.innerText += e.target.getAttribute('data-number')
          }
          다음버튼생성()
          break;

        case 'price':
          if (클릭버튼 === 'reset') 입력창초기화(소속객체.설정값.인풋타입)
          else if (클릭버튼 === 'full') {
            입력금액 = 소속객체.설정값.최대금액.toString()
            입력창활성화(소속객체.설정값.인풋타입)
          }
          else if (클릭버튼 === 'delete') {
            금액범위.classList.remove('error')
            입력금액 = 입력금액.slice(0, 입력금액.length - 1)
            if (입력금액.length < 1) 입력창초기화(소속객체.설정값.인풋타입);
          }
          else if (입력금액 === '' && 클릭버튼 === '0') {
            alert('0원 이상을 입력해 주세요.')
            입력창초기화(소속객체.설정값.인풋타입);
          }
          else if (입력금액 <= 소속객체.설정값.최대금액) {
            입력창활성화(소속객체.설정값.인풋타입)
            입력금액 += 클릭버튼
          }
          입력란.innerText = 소속객체.금액콤마(입력금액)
          금액경고문구()
          다음버튼생성()
          break;

        case 'etc':
          if (클릭버튼 === 'reset') 입력창초기화(소속객체.설정값.인풋타입)
          else if (클릭버튼 === 'delete') {
            입력란.innerText = 입력란.innerText.slice(0, 입력란.innerText.length - 1)
            if (입력란.innerText.length === 0) 입력창초기화(소속객체.설정값.인풋타입)
          }
          else if (입력란.innerText === '' && 클릭버튼 === '0') {
            alert('0 이상의 수량을 입력해 주세요.')
            입력창초기화(소속객체.설정값.인풋타입)
          }
          else {
            입력창활성화(소속객체.설정값.인풋타입)
            입력란.innerText += 클릭버튼
          }
          다음버튼생성()
          break;

        case 'connect': case 'password':
          if (클릭버튼 === 'reset') {
            입력칸들.forEach(function (el) {
              el.innerText = ''
              if (소속객체.설정값.노출여부 === false) el.classList.remove('hidden');
              입력칸위치 = 0
            })
          }
          else if (클릭버튼 === 'delete') {
            if (입력칸위치 > 0) {
              입력칸들[입력칸위치 - 1].innerText = ''
              if (소속객체.설정값.노출여부 === false) 입력칸들[입력칸위치 - 1].classList.remove('hidden');
              입력칸위치--
            }
          }
          else if (입력칸위치 < 소속객체.설정값.입력칸) {
            if (소속객체.설정값.노출여부 === false) {
              var 위치기억 = 입력칸들[입력칸위치];
              setTimeout(function () {
                위치기억.classList.add('hidden');
              }, 100)
            }
            입력칸들[입력칸위치].innerText += 클릭버튼
            입력칸위치++
          }
          다음버튼생성()
          break;

        case 'phone':
          if (클릭버튼 === 'reset') 입력창초기화(소속객체.설정값.인풋타입)
          else if (클릭버튼 === 'delete') {
            입력번호 = 입력번호.slice(0, 입력번호.length - 1)
            if (입력란.innerText.length <= 1) 입력창초기화(소속객체.설정값.인풋타입);
          }
          else if (입력란.innerText.length <= 12) {
            입력창활성화(소속객체.설정값.인풋타입)
            입력번호 += 클릭버튼
            if (입력번호.length > 11) 입력번호 = 입력번호.slice(0, 11);
          }
          번호하이픈삽입()
          다음버튼생성()
          break;
      }
    })
  })

  if (동의버튼 !== null) {
    동의버튼.addEventListener('click', function () {
      switch (소속객체.설정값.인풋타입) {
        case 'phone': 다음버튼생성()
      }
    });
  }

  if (자세히보기 !== null) {
    자세히보기.addEventListener('click', function () {
      if (document.querySelectorAll('.popup').length > 0) document.querySelector('.popup').remove()
      var 팝업 = document.createElement('aside')
      팝업.classList.add('popup')
      팝업.innerHTML = 소속객체.개인정보팝업()
      document.querySelector('body').append(팝업)
      console.log('')
      setTimeout(function () {
        document.querySelector('.popup').classList.add('is-open')
      }, 0)
      document.querySelector('.btn-close').addEventListener('click', function () {
        document.querySelector('.popup').classList.remove('is-open')
      })
    })
  }

  //내부함수
  function 입력창초기화(인풋타입) {
    입력란.innerText = ''
    힌트문자.classList.remove('hide')
    초기화아이콘.classList.add('hide')
    if (인풋타입 === 'price') {
      입력금액 = '';
      입력란.classList.remove('unit')
      금액범위.classList.remove('error')
      금액범위.innerHTML = 기본문구
    }
    else if (인풋타입 === 'etc') 입력란.classList.remove('unit')
    else if (인풋타입 === 'phone') 입력번호 = ''
  }

  function 입력창활성화(인풋타입) {
    힌트문자.classList.add('hide')
    초기화아이콘.classList.remove('hide')
    if (인풋타입 === 'price') {
      입력란.classList.add('unit')
      금액범위.classList.remove('error')
      금액범위.innerHTML = 기본문구
    }
    else if (인풋타입 === 'etc') 입력란.classList.add('unit')
  }

  function 다음버튼생성() {
    switch (소속객체.설정값.인풋타입) {
      default: case 'id':
        입력란.innerText.length === 소속객체.설정값.최대글자수 ?
          생성조건검사(true) : 생성조건검사(false);
        break;
      case 'price':
        입력금액 <= 소속객체.설정값.최대금액 && 입력금액 >= 소속객체.설정값.최소금액 && 입력금액 !== '' ?
          생성조건검사(true) : 생성조건검사(false);
        break;
      case 'etc':
        입력란.innerText.length > 0 ?
          생성조건검사(true) : 생성조건검사(false);
        break;
      case 'connect': case 'password':
        입력칸들[소속객체.설정값.입력칸 - 1].innerText !== '' ?
          생성조건검사(true) : 생성조건검사(false);
        break;
      case 'phone':
        입력번호.length >= 10 && 동의버튼.checked === true ?
          생성조건검사(true) : 생성조건검사(false);
        break;
    }
  }

  function 생성조건검사(조건) {
    if (조건) {
      다음버튼.classList.add('fade-in')
      다음버튼.removeAttribute('disabled')
    }
    else {
      다음버튼.classList.remove('fade-in')
      다음버튼.setAttribute('disabled', 'true')
    }
  }

  function 금액경고문구() {
    if (입력금액 !== '' && 입력금액 < 소속객체.설정값.최소금액) {
      금액범위.classList.add('error')
      금액범위.innerHTML = 부족문구
    }
    else if (입력금액 > 소속객체.설정값.최대금액) {
      금액범위.classList.add('error')
      금액범위.innerHTML = 초과문구
    }
    else 금액범위.innerHTML = 기본문구;
  }

  function 번호하이픈삽입() {
    if (입력번호.length > 3 && !소속객체.설정값.지원번호.includes(입력번호.slice(0, 3))) {
      alert('휴대폰 앞자리는 ' + 소속객체.설정값.지원번호.join(',') + ' 만 입력해 주세요.')
      입력창초기화(소속객체.설정값.인풋타입)
    }
    else if (입력번호.length >= 7) {
      var 하이픈처리 = 입력번호.slice(0, 3) + '-' + 입력번호.slice(3, 입력번호.length - 4) + '-' + 입력번호.slice(입력번호.length - 4, 입력번호.length)
      입력란.innerText = 하이픈처리.replace('--', '-')
    }
    else 입력란.innerText = 입력번호
  }
}

Input.prototype.금액콤마 = function (숫자) {
  var 숫자 = 숫자.toString()
  var 표시숫자 = 숫자
  var 콤마수 = 0
  for (i = 1; i < 숫자.length / 3; i++) {
    var 자르기 = 표시숫자.slice(-3 * i - 콤마수, 표시숫자.length)
    var 콤마추가 = "," + 자르기
    var 앞에숫자 = 표시숫자.slice(0, 표시숫자.length - 3 * i - 콤마수)
    var 합치기 = 앞에숫자 + 콤마추가
    표시숫자 = 합치기
    콤마수++
  }
  return 표시숫자
}

Input.prototype.개인정보팝업 = function () {
  var 개인정보팝업HTML =
    `<header>
    <h1>개인정보 수집 및 이용 내용.</h1>
    </header>
    <footer>
    <button class="btn-close">확인</button>
    </footer>
    `
  return 개인정보팝업HTML
}

Input.prototype.인풋창생성 = function () {
  var 기본입력창 = `
  <span class='placeholder'>${this.설정값.인풋힌트}</span>
  <strong></strong>
  <button class="hide" data-number="reset">X</button>
  `
  var 하단문구 = ``
  switch (this.설정값.인풋타입) {
    case 'price':
      하단문구 = `<p class="guide">최대 <span>${this.금액콤마(this.설정값.최대금액)}원</span> 기부 가능해요</p>`
      break;
    case 'connect': case 'password':
      기본입력창 = ``
      for (i = 0; i < this.설정값.입력칸; i++) {
        기본입력창 += `<strong data-input-number="${i}"></strong>`
      }
      하단문구 = `<p class="guide">${this.설정값.문구}</p>`
      break;
    case 'phone':
      하단문구 = `<p class='guide'><input type="checkbox" class="agree">(필수) 개인정보 수집 및 이용에 동의합니다.<a href="#" class="detail">자세히보기</a></p>`
  }
  return `
  <input type="hidden">
  <div class="input-value">
    ${기본입력창}
  </div>
  ${하단문구}
  `
}

Input.prototype.렌더링 = function () {
  var 키보드 = ``
  for (i = 1; i <= 12; i++) {
    switch (i) {
      case 10:
        키보드 += `<li><button data-number=${this.설정값.좌측버튼기능}>${this.설정값.좌측버튼}</button></li>`
        break;
      case 11:
        키보드 += `<li><button data-number="0">0</button></li>`
        break;
      case 12:
        키보드 += `<li><button data-number="delete">지움</button></li>`
        break;
      default:
        키보드 += `<li><button data-number=${i}>${i}</button></li>`
    }
  }
  this.설정값.렌더링위치.innerHTML = `
    <div class="input-box ${this.설정값.인풋클래스}">
    <input type="hidden">
      ${this.인풋창생성()}
    </div>
    <ul class="input-btn">
      ${키보드}
    </ul>
    `
}