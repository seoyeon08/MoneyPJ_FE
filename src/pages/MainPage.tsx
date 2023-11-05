import React from "react";
import Nav from '../components/Nav'
import style from '../css/mainPage.module.css'
import Img1 from '../assets/img/Main_Img1.png'
import Img2 from '../assets/img/Main_Img2.png'
import Pink from '../assets/img/Main_Pink.png'
import Yellow from '../assets/img/Main_Yellow.png'

function MainPage() {

  return (
    <div>
      <Nav />

      <div className={style.box}>
        <div className={style.left}>
        <img className={style.yellow} alt="yellow" src={Yellow} />
          <p className={style.text1}>오늘의 총 소비</p>

          <div className={style.calc}>
            <p className={style.text2}>180,800</p>
            <p className={style.text3}>won</p>
          </div>
          <p className={style.text1}>카페</p>

          <div className={style.calc}>
            <p className={style.text2}>1,800</p>
            <p className={style.text3}>won</p>
          </div>
          <a href="./LoginPage">로그인</a>
          <a href="./SignInPage1">회원가입1</a>
          <a href="./SignInPage2">회원가입2</a>
        </div>

        <div className={style.right}>
          <img className={style.bg2} alt="bg2" src={Img2} />
          <img className={style.bg1} alt="bg1" src={Img1} />
          <img className={style.bg3} alt="bg3" src={Pink} />
        </div>
      </div>
        
    </div>    
    );
}

export default MainPage;