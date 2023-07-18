import React from "react";
import bgVideo from "../media/background.mp4"
import "./styles.css"

function Landing(){

    const handleScroll = () => {
        const section = document.getElementById('bookingsection');
        section.scrollIntoView({ behavior: 'smooth' });
      };
    return(
        <div className="landing-container">
            <video src={bgVideo} autoPlay loop muted className="video-bg" />
            <div className="bg-overlay"></div>
             <div className="landing-head">
                <h1><i>Experience the Art of Luxury Driving</i></h1>
                <p>
                Welcome to our premier luxury 
                sport car rental service
            </p> 
            <button onClick={handleScroll} className="home-btn">Explore</button>
            </div>  
        </div>
    )
}

export default Landing;