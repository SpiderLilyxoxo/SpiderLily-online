import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


import "./works-list-item.scss";

import pic from "../../pic/red spiderlily.jpg";

const SpiderLily = () => {
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
                    <li className="breadcrumbs__item"><NavLink to={"/works/spiderlily"} className="breadcrumbs__item-link-active">SpiderLily</NavLink></li>
                </ul>
                <ul className="desc">
                    <li className="desc-item">This is my first official project, on which I had to try the most. It doesn't actually have that much complex logic,
                     but I had to spend a lot of time thinking about the design.</li>
                     <li className="desc-item">This project was built on <strong>react</strong> and <strong>scss</strong>, I also used <strong>emailjs</strong> to be able to send email messages directly from the site.</li>
                     <li className="desc-item">The logic of the site is simple, but I had to try the most on the implementation of the background, since I decided to use a script that creates blocks in a random location on the page.
                      And I decided to add a hook that changes theme of the site, which also tracks the color scheme of the operating system, and saves it to <strong>local storage</strong>.</li>
                     <li className="desc-item">The design was mostly done by myself, based on <a href="https://www.craftz.dog" className="twitter-link"><strong>Takuya Matsuyama's</strong></a> work. I really hope that one day I will be like him...</li>
                </ul>
            </div>
        </motion.div>
    )
}
export default SpiderLily