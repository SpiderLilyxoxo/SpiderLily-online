import { NavLink } from "react-router-dom";
import { Component } from 'react';
import { motion } from "framer-motion";

import SpiderLilyPic from "../../pic/spiderlily.png"
import SpiderYardPic from "../../pic/profile_page.png"
import Books from "../../pic/books.jpg"

import "./works-list.scss";

class WorksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [            
                {name: "SpiderLily Homepage", description: "SpiderLily's page that you've seen already, so how it works...", picture: `${SpiderLilyPic}`, navigation: "/works/spiderlily", status: "DONE", id: 1},
                {name: "Spider Yard", description: "Spider Yard is a convenient platform for artists and their clients.", picture: `${SpiderYardPic}`, navigation: "/works/spideryard", status: "CANCELLED", id: 2},
                {name: "Other Stuff", description: "My training projects", picture: `${Books}`, navigation: "/works/otherstuff", status: "", id: 3},
            ]
        }
    }


    
    render() {
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
        
        const itemOne = {
            hidden: { opacity: 0},
            show: { opacity: 1 }
        }
    

        const elements = this.state.data.map(item => {
            const {name, description, picture, navigation, status, id} = item;
            return (
                <motion.li className="items" 
                key={id}
                variants={itemOne}>
                    <NavLink to={navigation} className="list-item">
                                <img src={picture} alt="" className="list-item__picture"/>
                                <div className="list-item__description-container">
                                    <div className="about-item">                          
                                        <div className="item-name">{name}</div>
                                        <div className="item-status">{status}</div>
                                    </div>
                                    <div className="item-text">{description}</div>
                                </div>
                    </NavLink>
                </motion.li>
            )
        })

        return (
            <motion.ul 
            className="app-list"
            variants={container}
            initial="hidden"
            animate="show">
                {elements}
            </motion.ul>

        )
    }
}

export default WorksList