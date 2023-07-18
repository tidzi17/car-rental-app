import React from "react";
import logo1 from "../assets/lamblogo.png";
import logo2 from "../assets/bmwlogo.png";
import logo3 from "../assets/bentllogo.png";
import logo4 from "../assets/masslogo.png";
import logo5 from "../assets/buglogo.png";
import logo6 from "../assets/merlogo.png";
import logo7 from "../assets/porshlogo.png";
import './styles.css';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7]; 

const Connect = () => {
    return(
        <div className="connect-container">
            <div className="connect-container-content">
                <div className="car-logos">
                    {logos.map((logo, index) => (
                        <img src={logo} alt={`Logo ${index + 1}`} key={index} /* width={50} height={50}  *//>
                    ))}
                </div>
                <div className="subscribe-container" >
                <div className="subscribe-container-content">
                    <h2>STAY CONNECT WITH US</h2>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <input type="email" placeholder="E-mail anddres"></input>
                    <button>Subscribe Now</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Connect;