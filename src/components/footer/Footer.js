import React from 'react';
import './Footer.css'
import Fb from '../../img/facebook.svg'
import Tw from '../../img/twitter.svg'
import Ig from '../../img/instagram.svg'
import Logo from '../../img/Jn-Travel_logo.png'
import {NavLink} from 'react-router-dom'

const Footer = () => {
    return(<>
     <footer>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Страна Восходящего Солнца Ждёт Вас!</h3>
                        <hr />
                    </div>
                    <div className="container">
                        <div className="row footer-info">
                            <div className="col-md-4"><a href="/home"><img src={Logo} alt="logo"></img></a></div>

                            <div className="col-md-6 navigation">
                                <NavLink to="/tours" className="nav-item nav-link">Туры</NavLink>
                                <NavLink to="/services" className="nav-item nav-link">Услуги</NavLink>
                                <NavLink to="/hotels" className="nav-item nav-link">Отели</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">О Нас</NavLink>
                                <NavLink to="/testimonials" className="nav-item nav-link">Отзывы</NavLink>    
                            </div>

                            <div className="col-md-2 lang">
                                <div className="row pb-2"></div>
                                <NavLink to="/"><span className="lang-item">RU</span></NavLink>
                                <NavLink to="/english"><span className="lang-item">EN</span></NavLink>
                                <NavLink to="/french"><span className="lang-item">FR</span></NavLink>

                                <div className="row mt-4">
                                    <img className="social-img" src={Fb} alt="facebook"></img>
                                    <img className="social-img" src={Tw} alt="twitter"></img>
                                    <img className="social-img" src={Ig} alt="insta"></img></div>
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