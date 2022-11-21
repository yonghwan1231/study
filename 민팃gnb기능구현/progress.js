class Progress {
  렌더링(설정값) {
    if (!설정값 || !설정값.스텝) return;
    fetch('./progress.json')
      .then(respone => respone.json())
      .then(데이터객체 => {
        this.설정값 = 설정값
        this.설정값 = 설정값;
        this.카테고리 = 설정값?.카테고리 || 'sell'
        this.스텝 = 설정값?.스텝
        this.애니메이션 = 설정값?.애니메이션
        this.경고모드 = 설정값?.경고모드
        this.카테고리 = 데이터객체[this.카테고리]
        this.타이틀타입 = this.경고모드 && this.카테고리.dangerTitle ?
          this.카테고리.dangerTitle : this.카테고리?.title
        this.컬러설정 = this.경고모드 && this.카테고리.dangerTitle ?
          'danger' : ''
        this.캐릭터타입 = this.경고모드 && this.카테고리.dangerTitle ?
          'illust_progress_danger' : 'illust_progress'
        this.스텝 = this.타이틀타입[this.스텝] ?
          this.스텝 : Math.floor(this.스텝)
        this.스텝목록 = this.카테고리.step
        this.스텝개수 = this.스텝목록.length
        this.스텝설명 = this.타이틀타입[this.스텝]
        this.스텝간격 = 100 / (this.스텝목록?.length + 1)
        this.진행도 = this.스텝 * this.스텝간격
        this.게이지 = this.애니메이션 ? this.진행도 - (this.스텝간격 / 2) : this.진행도
        this.스텝생성 = ''

        if (!this.타이틀타입[this.스텝]) {
          for (let i = this.스텝 - 0.5; i >= 0; i -= 0.5) {
            if (this.타이틀타입[i]) {
              this.스텝설명 = this.타이틀타입[i]
              break;
            }
          }
        }

        this.스텝목록?.forEach((el, idx) => {
          this.스텝생성 += `
          <figure data-step="${idx + 1}" style="left:${(idx + 1) * this.스텝간격}%">
            <strong class="step-success">√</strong>
            <strong class="step-towards">${idx + 1}</strong>
            <p class="step-title">
              ${el}
            </p>
          </figure>
          `
        })

        document.querySelector('#progress').innerHTML = `
          <div class="progress-mini ${this.컬러설정}">
            <span class="step-mini-bar" style="width:${this.게이지}%"></span>
          </div>
          <div class="progress-wrap hide ${this.컬러설정}">
            <header class="step-description">
              ${this.스텝설명}
            </header>
            <section class="step-list">
              ${this.스텝생성}
              <div class="step-bar">
                <span class="step-gage" style="width:${this.진행도}%"></span>
                <img src="./${this.캐릭터타입}.svg" alt="" class="step-icon" style="margin-left:${this.진행도}%">
              </div>
            </section>
            <footer>
              <button class="open-close">열기</button>
            </footer>
          </div>
          `
      })
      .then(() => {
        this.애니메이션재생()
        document.querySelectorAll('[data-step]').forEach((el) => {
          if (el.dataset.step <= this.스텝) {
            el.querySelector('.step-title').innerHTML += `완료`
          }
          if (el.dataset.step < this.스텝) {
            el.classList.add('succes')
          }
        })

        if (this.스텝 <= this.스텝개수) {
          (this.스텝 / 0.5) % 2 !== 0 ?
            document.querySelector(`[data-step="${this.스텝 + 0.5}"]`).classList.add('towards') :
            document.querySelector(`[data-step="${this.스텝}"]`).classList.add('towards')
        }

        document.querySelector('.open-close')?.addEventListener('click', (e) => {
          if (e.target.innerText === '닫기') {
            document.querySelector('.progress-wrap').classList.add('hide')
            e.target.innerText = '열기'
          }
          else {
            document.querySelector('.progress-wrap').classList.remove('hide')
            this.애니메이션재생()
            e.target.innerText = '닫기'
          }
        })
      })
  }

  애니메이션재생() {
    if (this.애니메이션) {
      let stepBar = document.querySelector('.step-bar')
      let stepGage = document.querySelector('.step-gage')
      let stepIcon = document.querySelector('.step-icon')
      let stepMini = document.querySelector('.step-mini-bar')
      if (this.스텝 > this.스텝개수) {
        stepBar.classList.remove('is-ani')
        stepGage.style.width = `${this.스텝간격 * (this.스텝개수)}%`
        stepIcon.style.marginLeft = `${this.스텝간격 * (this.스텝개수)}%`
        setTimeout(() => {
          stepBar.classList.add('is-ani')
          stepMini.style.width = `${this.스텝간격 * (this.스텝개수 + 1)}%`
          stepGage.style.width = `${this.스텝간격 * (this.스텝개수 + 1)}%`
        }, 500)
      } else {
        stepBar.classList.remove('is-ani')
        stepGage.style.width = `${this.진행도 - (this.스텝간격 / 2)}%`
        stepIcon.style.marginLeft = `${this.진행도 - (this.스텝간격 / 2)}%`
        setTimeout(() => {
          stepBar.classList.add('is-ani')
          stepMini.style.width = `${this.진행도}%`
          stepGage.style.width = `${this.진행도}%`
          stepIcon.style.marginLeft = `${this.진행도}%`
        }, 500)
      }
    }
  }
}
var progress = new Progress()