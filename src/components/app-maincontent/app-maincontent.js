import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "./app-maincontent.scss";

const MainContent = () => {

    const container = {
        hidden: { 
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
            staggerChildren: .2
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

    return (
        <motion.div 
        className="maincontent"
        variants={container}
        initial="hidden"
        animate="show"
        >
           <section className="greetings">
                <motion.div 
                className="greetings__container"
                variants={item}
                >
                    Hello, I'm a frontend developer!
                </motion.div>
                <motion.div className="greetings__tags"
                variants={item}>
                    <div className="tag__name">Klippa Denis</div>
                    Frontend Dev / Musician / Dreamer ♡
                </motion.div>
           </section>
           <motion.section className="about-me"
           variants={item}>
            <div className="about-me__section">About-Me</div>
            <ul className="text__container">
                <li className="about-me__text">
                    I am a beginner Front-end specialist from Russia with a passion for learning new technologies for creating and designing websites. After a year of mastering HTML, CSS, Javascript and React, I realized that I want to dedicate my life to this business.
                </li>
                <li className="about-me__text">
                    In the past I have had experience with cryptocurrencies, especially with trading and participation in distributions of rare NFTs, such as mekaverse, genopets etc.
                </li>
                <li className="about-me__text">
                    I am also fond of music and like to spend time getting to know the world and myself especially.
                </li>
            </ul>
            <NavLink to="/works" className=""><motion.button 
            className="about-me_btn work-btn"
            variants={item}
            >My Works</motion.button></NavLink>
           </motion.section>
        </motion.div>
    )
}

export default MainContent