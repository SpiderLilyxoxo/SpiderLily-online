import { NavLink } from "react-router-dom";

import "./app-maincontent.scss";

const MainContent = () => {
    return (
        <div className="maincontent">
           <section className="greetings">
                <div className="greetings__container">
                    Hello, I'm a frontend developer!
                </div>
                <div className="greetings__tags">
                    <div className="tag__name">Klippa Denis</div>
                    Frontend Dev / Musician / Dreamer ♡
                </div>
           </section>
           <section className="about-me">
            <div className="about-me__section">About-Me</div>
            <ul className="text__container">
                <li className="about-me__text">
                    I am a beginner Front-end specialist from Russia with a passion for learning new technologies for creating and designing websites. After half a year of mastering html css and javascript, I realized that I want to dedicate my life to this business.
                </li>
                <li className="about-me__text">
                    In last 1.5 year I have had experience with cryptocurrencies, especially with trading and participation in distributions of rare NFTs, such as mekaverse, genopets etc.
                </li>
                <li className="about-me__text">
                    I am also fond of music and like to spend time getting to know the world and myself especially.
                </li>
            </ul>
            <NavLink to="/works" className=""><button className="about-me_btn work-btn">My Works</button></NavLink>
           </section>
        </div>
    )
}

export default MainContent