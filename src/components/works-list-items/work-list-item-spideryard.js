import { NavLink } from "react-router-dom";

import pic from "../../pic/spider-web.png";

import "./works-list-item.scss"

const SpiderYard = () => {
    
    return (
        <div className="work">
        <div className="work-container">
            <img src={pic} alt="" className="item__picture"/>
            <ul className="breadcrumbs">
                <li className="breadcrumbs__item breadcrumbs__item-link"><NavLink to={"/works"} className="breadcrumbs__item-link">Works</NavLink></li>
                <li className="breadcrumbs__item"><NavLink to={"/works/spideryard"} className="breadcrumbs__item-link-active">SpiderYard</NavLink></li>
            </ul>
            <ul className="desc">
                <li className="desc-item">Have you ever wanted to have a place at hand where you can order from favourite artists in complete comfort,
                 track prices and find exactly what you need? <strong>Spider Yard</strong> is the solution!</li>
                <li className="desc-item"><strong>The Spider Yard — is a convenient online platform for transactions between artists and their clients.</strong></li>
                <li className="desc-item">On our platform, the hashtags will help you find what you need,
                 and with our searching system customers can always be offered similar artists that can satisfy everyone's desire.</li>
                <li className="desc-item">Or maybe you are an Artist who wants to find a place where other people will appreciate your work at a worthy price? </li>
                <li className="desc-item">In the Spider Yard, you will be provided with an online price calculator, which allows you not to specify all the details with clients every time you work with them.
                 You just have to indicate the aspects that are important to you at the initial stage of your own <strong>Yard</strong> registration.</li>
                <li className="desc-item">And this is just the beginning! Feel free to offer your ideas about the site's design or functionality, we will always respect your wishes.</li>
                <li className="desc-item">Looking for more information? Check out our <a href="https://twitter.com/SpiderYardHQ" className="twitter-link"><strong>@twitter</strong></a> for all the latest news!</li>
            </ul>
        </div>
    </div>
    )
}

export default SpiderYard