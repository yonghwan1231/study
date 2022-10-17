
/**
 * 
 * @param {*} 구성 
 * 
 * 기능 ( 이벤트 ) 
 * 1. gnb 띄우기 
 */

function GNB(구성) {
  this.구성 = 구성;

  this.메뉴구성 = [
    {
      name: '메인',
      text: '메인',
      url: '메인'
    },
    {
      name: '가이드',
      text: '가이드',
      url: '가이드'
    },
    {
      name: '상담',
      text: '상담',
      url: '상담'
    },
  ]

  this.로고색상 = ['red', 'blue', 'green']
  this.고객센터 = '1588-5588'
  this.네비게이션 = document.querySelector('#gnb')
}

GNB.prototype.렌더링 = function () {
  var 고객센터 = this.구성.hasOwnProperty('고객센터') === true && this.구성.고객센터 === false ? '' : this.고객센터생성()

  var 메뉴 = document.createElement('nav')
  메뉴.classList.add('menu')
  메뉴.innerHTML = this.구성.hasOwnProperty('메뉴') === true && this.구성.메뉴 === false ? '' : this.메뉴생성()

  this.네비게이션.innerHTML = this.네비게이션생성()
  this.네비게이션.innerHTML += 고객센터
  this.네비게이션.after(메뉴)
  //사용자가 고객센터와 메뉴를 false 로 설정하지 않았다면 마크업 함수 실행
}

GNB.prototype.이벤트 = function () {
  var 소속객체 = this
  var 오픈 = 'is-open'
  var 메뉴 = document.querySelector('.menu')
  var 메뉴오픈버튼 = document.querySelector('.btn-menu')
  var 메뉴닫기버튼 = document.querySelector('.btn-menu-close')
  var 버튼들 = 메뉴.querySelectorAll('a')
  console.log(버튼들)

  버튼들.forEach(function (el) {
    //모든 사이드메뉴속 버튼들에 클릭 이벤트 추가
    if (el.getAttribute('href') !== '메인') {
      el.addEventListener('click', function (e) {
        e.preventDefault()
        var 클릭한팝업 = e.target.getAttribute('href') + '팝업'
        메뉴.classList.remove(오픈);
        if (document.querySelectorAll('.popup').length > 0) {
          document.querySelector('.popup').remove()
        }
        //팝업 html 생성
        document.querySelector('.wrap').after(소속객체[클릭한팝업]())
        //콜백으로 클래스 추가(밑에서 아래로 올라오게)
        setTimeout(function () {
          document.querySelector('.popup').classList.add(오픈)
        }, 500)
        document.querySelector('.btn-close').addEventListener('click', function () {
          document.querySelector('.popup').classList.remove(오픈)
        })
      })
    }
    else {
      el.addEventListener('click', function (e) {
        e.preventDefault()
        confirm('메인으로 돌아가시겠습니까?')
      })
    }
  })

  메뉴오픈버튼.addEventListener('click', function () {
    메뉴.classList.add(오픈);
  })

  메뉴닫기버튼.addEventListener('click', function () {
    메뉴.classList.remove(오픈);
  })
}

// 상세 렌더링
GNB.prototype.메뉴생성 = function () {
  var 링크목록 = []
  if (typeof this.구성 !== 'undefined' && this.구성.hasOwnProperty('링크') === true) {
    링크목록 = this.상태.링크
  }
  //사용자가 설정한 버튼들로 사이드메뉴 버튼목록 구성
  else {
    for (var i = 0; i < this.메뉴구성.length; i++) {
      링크목록.push(this.메뉴구성[i].name)
    }
  }
  //사용자 설정값이 없다면 기본 사이드메뉴 버튼목록으로 구성

  var 메뉴링크 = this.메뉴구성.map(function (el, idx) {
    if (el.url === '') el.url = '#'
    if (링크목록.indexOf(el.name) !== -1) {
      var 메뉴버튼 =
        '<li><a href="' + el.url + '">' + el.text + '</a></li>'
    }
    return 메뉴버튼
  }).join('')
  //위에서 구성된 버튼목록 중 존재하지 않는 버튼들을 검사하고, 존재하는 버튼들만 태그 생성

  var 메뉴html =
    '<header>' +
    '<button class="btn-menu-close">닫기</button>' +
    '</header>' +

    '<section>' +
    '<ul>' +
    메뉴링크 +
    '</ul>' +
    '</section>' +

    '<footer>' +
    '<p class="cs-center">고객센터 <span class="cs-number">' +
    this.고객센터 +
    '</span></p>' +
    '</footer>'
  //마크업 생성

  return 메뉴html
}


GNB.prototype.고객센터생성 = function () {
  var 고객센터html =
    '<footer>' +
    '<p class="cs-center">고객센터 <span class="cs-number">' + this.고객센터 + '</span></p>' +
    '</footer>';
  //마크업 생성

  return 고객센터html
}

GNB.prototype.네비게이션생성 = function () {
  var 로고
  if (typeof this.구성 !== 'undefined' && this.구성.hasOwnProperty('로고') === true && this.로고색상.indexOf(this.구성.로고) !== -1) {
    //사용자가 로고 색상을 지정했다면 지정한 로고 색상이 존재하는 색상인지 검사한 뒤, 존재하면 지정 색상으로 변경
    로고 = '<h1 class="logo ' + this.구성.로고 + '">로고 로고 로고</h1>'
  }
  else {
    console.log(로고)
    로고 = '<h1 class="logo red">로고 로고 로고</h1>'
  }
  //사용자가 지정한 로고 색상이 없는 색상이라면 기본 색상(red) 적용

  var 메뉴오픈버튼
  if (typeof this.구성 !== 'undefined' && this.구성.hasOwnProperty('메뉴') === true && this.구성.메뉴 === false) {
    메뉴오픈버튼 = ''
  }
  //사용자가 메뉴 설정값을 false 로 입력 시 메뉴오픈버튼 없앰
  else {
    메뉴오픈버튼 = '<button class="btn-menu">메뉴</button>'
  }
  //아니라면 메뉴오픈버튼 노출

  var 네비게이션html =
    '<header>' +
    '<div class="logo-wrap">' +
    로고 +
    '</div>' +
    '<div class="btn-wrap">' +
    메뉴오픈버튼 +
    '</div>' +
    '</header>'
  //마크업 생성

  return 네비게이션html
}

GNB.prototype.가이드팝업 = function () {

  var 가이드html = document.createElement('aside')
  가이드html.classList.add('popup')
  가이드html.innerHTML =
    '<header>' +
    '<h1>가이드입니다.</h1>' +
    '</header>' +
    '<footer>' +
    '<button class="btn-close">확인</button>' +
    '</footer>';

  return 가이드html
}

GNB.prototype.상담팝업 = function () {

  var 상담html = document.createElement('aside')
  상담html.classList.add('popup')
  상담html.innerHTML =
    '<header>' +
    '<h1>QR코드를 인식하세요.</h1>' +
    '</header>' +
    '<footer>' +
    '<button class="btn-close">확인</button>' +
    '</footer>';

  return 상담html
}

GNB.prototype.구성설정 = function (사용자설정) {
  this.구성 = 사용자설정
  this.고객센터 = typeof this.구성 !== 'undefined' && this.구성.hasOwnProperty('고객센터') === false ? this.고객센터 : this.구성.고객센터

  this.렌더링()
  this.이벤트()
}

if (document.querySelectorAll('#gnb').length > 0) var gnb = new GNB()