import React from 'react'
import './Header.css'
import Fb from '../../img/facebook.svg'
import Tw from '../../img/twitter.svg'
import Ig from '../../img/instagram.svg'
import Logo from '../../img/Jn-Travel_logo.png'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return(<>
    <header>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/tours" className="nav-item nav-link">Туры</NavLink>
                        <NavLink to="/services" className="nav-item nav-link">Услуги</NavLink>
                        <NavLink to="/hotels" className="nav-item nav-link">Отели</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">О Нас</NavLink>
                        <NavLink to="/testimonials" className="nav-item nav-link">Отзывы</NavLink>
                    </div>
                </div>
                
                <NavLink to="/home"> <img src={Logo} alt=""></img></NavLink>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="pl-5 social">
                        <img className="social-img" src={Fb} alt="facebook"></img>
                        <img className="social-img" src={Tw} alt="twitter"></img>
                        <img className="social-img" src={Ig} alt="insta"></img>
                    </div>

                    <div class="pl-5 lang">
                        <NavLink to="/"><span className="lang-item">RU</span></NavLink>
                        <NavLink to="/english"><span className="lang-item">EN</span></NavLink>
                        <NavLink to="/french"><span className="lang-item">FR</span></NavLink>
                    </div>

                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    </header>
</>
    );       
}

export default Header;