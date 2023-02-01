import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import "./app.scss"

import AppHeader from "../app-header/app-header";
import BackGround from "../app-bg/app-bg";
import MainContent from "../app-maincontent/app-maincontent";
import EmailContactForm from "../app-contact_me-form/app-contact_me-form";
import WorksList from "../works-list/works-list";
import SpiderLily from "../works-list-items/work-list-item-spiderlily";
import SpiderYard from "../works-list-items/work-list-item-spideryard";
import OtherStuff from "../works-list-items/work-list-item-otherstuff";

import { useTheme } from "../hooks/use-theme";

const App = () => {
    const {theme, setTheme} = useTheme();

    const handleThemeClick = () => {
      const moonBtn = document.querySelector(".moon");
      const sunBtn = document.querySelector(".sun");

      if (theme === "dark") {
        sunBtn.style.display = "none"
        moonBtn.style.display = "flex"
        setTheme("light");
      } else {
        moonBtn.style.display = "none"
        sunBtn.style.display = "flex"
        setTheme("dark");
      }
    }

    return  (
      
      <Router>
      <div className="dark">
        <AppHeader handleThemeClick={handleThemeClick}/>
          <Routes>
            <Route path="/" element={<MainContent/>}/>
            <Route path="/contact_me" element={<EmailContactForm/>}/>
            <Route path="/works" element={<WorksList/>}/>
            <Route path="/works/spiderlily" element={<SpiderLily/>}/>
            <Route path="/works/spideryard" element={<SpiderYard/>}/>
            <Route path="/works/otherstuff" element={<OtherStuff/>}/>
            
            <Route path="*" element={<MainContent/>}/>
          </Routes>
        <BackGround theme={theme}/>
      </div>
      </Router>
    );
} 

export default App;
