import React from "react";
import './styles.css';
import aboutcover from "../assets/abouttcover.jpeg";

function AboutLanding(){
    return(
        <div className="about-container">
            <img src={aboutcover} alt="aboutpagecoverphoto" className="about-cover"/>
            <div className="about-bg-overlay"></div>
            <div className="about-head">
                <h1>About Us</h1>
            </div>  
        </div>
        
    )
}

export default AboutLanding;