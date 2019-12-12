import React from 'react';
import './Header.css'
import Fb from '../../img/facebook.svg'
import Tw from '../../img/twitter.svg'
import Ig from '../../img/instagram.svg'
import Logo from '../../img/Jn-Travel_logo.png'

const Header = () => {
    return(<>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="#">Туры</a>
                        <a class="nav-item nav-link" href="#">Услуги</a>
                        <a class="nav-item nav-link" href="#">Отели</a>
                        <a class="nav-item nav-link" href="#">О Нас</a>
                        <a class="nav-item nav-link" href="#">Отзывы</a>
                    </div>
                </div>
                
                <a class="navbar-brand pr-5" href="#"><img src={Logo} alt=""></img></a>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="pl-5 social">
                        <img class="social-img" src={Fb} alt="facebook"></img>
                        <img class="social-img" src={Tw} alt="twitter"></img>
                        <img class="social-img" src={Ig} alt="insta"></img>
                    </div>

                    <div class="pl-5 lang">
                        <span class="lang-item">RU</span>
                        <span class="lang-item">EN</span>
                        <span class="lang-item">FR</span>
                    </div>

                </div>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    </header>
</>
    );       
}

export default Header;