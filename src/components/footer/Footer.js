import React from 'react';
import './Footer.css'
import Fb from '../../img/facebook.svg'
import Tw from '../../img/twitter.svg'
import Ig from '../../img/instagram.svg'
import Logo from '../../img/Jn-Travel_logo.png'

const Footer = () => {
    return(<>
     <footer>
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Страна Восходящего Солнца Ждёт Вас!</h3>
                        <hr />
                    </div>
                    <div class="container">
                        <div class="row footer-info">
                            <div class="col-md-4"><a href="#"><img src={Logo} alt="logo"></img></a></div>

                            <div class="col-md-6 navigation">
                                <a class="nav-item nav-link" href="#">Туры</a>
                                <a class="nav-item nav-link" href="#">Услуги</a>
                                <a class="nav-item nav-link" href="#">Отели</a>
                                <a class="nav-item nav-link" href="#">О Нас</a>
                                <a class="nav-item nav-link" href="#">Отзывы</a>
                            </div>

                            <div class="col-md-2 lang">
                                <div class="row pb-2"></div>
                                <span class="lang-item">RU</span>
                                <span class="lang-item">EN</span>
                                <span class="lang-item">FR</span>

                                <div class="row mt-4">
                                    <img class="social-img" src={Fb} alt="facebook"></img>
                                    <img class="social-img" src={Tw} alt="twitter"></img>
                                    <img class="social-img" src={Ig} alt="insta"></img></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
    );       
}

export default Footer;