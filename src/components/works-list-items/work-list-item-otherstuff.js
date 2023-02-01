import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "./works-list-item.scss";

import pic from "../../pic/books2.jpg";

const OtherStuff = () => {
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

    return (
        <motion.div className="work"         
        variants={item}
        initial="hidden"
        animate="show">
            <div className="work-container">
                <img src={pic} alt="" className="item__picture"/>
                <ul className="breadcrumbs">
                    <li className="breadcrumbs__item"><NavLink to={"/works"} className="breadcrumbs__item-link">Works</NavLink></li>
                    <li className="breadcrumbs__item"><NavLink to={"/works/otherstuff"} className="breadcrumbs__item-link-active">OtherStuff</NavLink></li>
                </ul>
                <ul className="desc">
                    <li className="desc-item">I did quite a few projects during my studying, so it seems important to me to list them here.</li>
                    <li className="desc-item"><strong>- To Do List.</strong> This was my first project on <strong>react</strong>. In this work, I focused on completely disassembling the basic functionality of react.
                     It contains filters that uses "important things" and "working hours" as an argument, and there is a search by name. I also made a form for adding tasks. Feel free to check this project  <a href="https://spiderlilyxoxo.github.io" className="twitter-link"><strong>here</strong></a></li>
                    <li className="desc-item"><strong>- Marvel App</strong> This is a react app using official <strong>marvel api</strong> and it has the most complicated logic at the moment. Here I used arrays with marvel characters and the comics they appear in.
                     Thus, I implemented a web application in which you can find the information you are interested in on certain marvel heroes. This project is currently in progress, but you can check the github page <a href="https://github.com/SpiderLilyxoxo/marvel-comics" className="twitter-link"><strong>here</strong></a></li>
                </ul>
            </div>
        </motion.div>
    )
}
export default OtherStuff