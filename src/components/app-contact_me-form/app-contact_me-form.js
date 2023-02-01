import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./app-contact_me-form.scss"
import { Component } from 'react';

const EmailContactForm = () => {
    const form = useRef();

    const sendingAnimation = () => {
        document.querySelector("[data-btn]").classList.add("animating")
    }
    
    const sendEmail = (e) => {
        e.preventDefault();
        sendingAnimation();

        emailjs.sendForm('service_r4552gx', 'template_xgado24', form.current, 'Pz1p9fWDYudH97nA7')
        .then(() => {
            setTimeout(() => {    
                document.querySelector(".btn.animating").style.display= "none";
                document.querySelector(".checkmark-container").style.display = "flex";
                setTimeout(() => {
                    document.querySelector(".checkmark-container").style.display = "none";
                    document.querySelector(".btn.animating").style.display= "";
                    document.querySelector("[data-btn]").classList.remove("animating");
                }, 4000);
            }, 400);
        }, (error) => {
            console.log(error)
        });

    

    };

    return (

        <form ref={form} className="form-field" onSubmit={sendEmail}>
            <div className="contact-me">
                <div className="contact-header">
                    <div className="contact-me__container">Get in touch!</div>
                    <div className="links">
                        <a href="https://twitter.com/SpiderLilyxoxo_" className="twitter"><img src={require('../../pic/twitter.png')}alt="twitter" className="link-item"/></a>
                        <a href="https://t.me/spiderlilyzzz" className="telegram"><img src={require('../../pic/telegram.png')}alt="telegram" className="link-item"/></a>
                    </div>
                </div>
                <input type="text" name="user_name" placeholder="Your name" required />
                <input type="email" name="user_email"  placeholder="Email adress" required />
                <textarea name="message" rows="6" placeholder="How can I help you?" required ></textarea>
                <div className="submit-container">
                    <button type="submit" value="Send" className='btn' data-btn>Submit</button>
                    <div className="checkmark-container">
                        <svg x="0px" y="0px"
                        viewBox="0 0 25 30">
                        <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"/>
                        </svg>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EmailContactForm;