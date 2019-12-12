import React from 'react';
import './Header.css'

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
                
                <a class="navbar-brand pr-5" href="#"><img src="img/Jn-Travel_logo.png" alt=""></img></a>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="pl-5 social">
                        <img class="social-img" src="img/facebook.svg" alt="facebook"></img>
                        <img class="social-img" src="img/twitter.svg" alt="twitter"></img>
                        <img class="social-img" src="img/instagram.svg" alt="insta"></img>
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