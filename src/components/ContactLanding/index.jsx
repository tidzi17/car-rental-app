import React from "react";
import './styles.css';
import contactcover from "../assets/contactcover.jpeg";
function ContactLanding(){
    return(
        <div className="contact-container">
            <img src={contactcover} alt="contactpagecoverphoto" className="contact-cover"/>
            <div className="contact-bg-overlay"></div>
            <div className="contact-head">
                <h1>Contact</h1>
            </div>  
        </div>
        
    )
}

export default ContactLanding;