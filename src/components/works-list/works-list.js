import { NavLink } from "react-router-dom";
import { Component } from 'react';

import SpiderLily from "../../pic/spiderlily.png"
import SpiderYard from "../../pic/profile_page.png"
import Books from "../../pic/books.jpg"

import "./works-list.scss";

class WorksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [            
                {name: "SpiderLily Homepage", description: "SpiderLily's page that you've seen already, so how it works...", picture: `${SpiderLily}`, navigation: "/works/spiderlily", status: "DONE", id: 1},
                {name: "Spider Yard", description: "Spider Yard is a convenient platform for artists and their clients.", picture: `${SpiderYard}`, navigation: "/works/spideryard", status: "IN PROGRESS", id: 2},
                {name: "Other Stuff", description: "My training projects", picture: `${Books}`, navigation: "/works/otherstuff", status: "", id: 3},
            ]
        }
    }

    

    render() {
        const elements = this.state.data.map(item => {
            const {name, description, picture, navigation, status, id} = item;
            return (
                <li className="items" key={id}>
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
                </li>
            )
        })

        return (
            <ul className="app-list">
                {elements}
            </ul>
        )
    }
}

export default WorksList