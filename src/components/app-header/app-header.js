import { NavLink } from "react-router-dom";

import "./app-header.scss"


const AppHeader = ({handleThemeClick}) => { 

    return (
    <div className="header">
    <div className="header__container">
            <NavLink to="/" className="logo">
                <img src={require("../../pic/logo.png")} alt="" className="logo__pic"/>
                <div className="logo__name">SpiderLily</div> 
            </NavLink>
            <nav className="header__menu">
                <ul className="menu__list"> 
                    <li className="menu__item"><NavLink to="/works" className="menu__item">Works</NavLink></li>
                    <li className="menu__item"><NavLink to="/contact_me" className="menu__item">Contact Me</NavLink></li>
                </ul>
            </nav>
            <button className="header__btn sun" onClick={handleThemeClick}>
                <img src={require('../../pic/sun.png')}alt="sun" className="header__btn-item"/>
            </button>
            <button className="header__btn moon" onClick={handleThemeClick}>
                <img src={require('../../pic/moon.png')}alt="moon" className="header__btn-item"/>
            </button>
        </div>
    </div>
    )
}

export default AppHeader;