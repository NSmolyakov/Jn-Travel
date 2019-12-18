import React from 'react'
import './404.css'
import Image404 from '../../img/404/404Image.png'
import {NavLink} from 'react-router-dom'

const PageNotFound = () => {
    return(
        <div className="notFound">
                <img src={Image404} alt="404"></img>
                <p>К сожалению, мы не смогли найти нужную вам страницу</p>
                <NavLink to="/tours"> <button className="btn btn-primary-mini">Наши Туры</button> </NavLink>
                <div className="mt-3">
                <NavLink to="/"> <button className="btn btn-alt-mini"> На Главную </button></NavLink>
                </div>
        </div>
    );
}

export default PageNotFound;