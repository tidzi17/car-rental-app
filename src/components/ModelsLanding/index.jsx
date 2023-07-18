import React from "react";
import './styles.css';
import modelscover from "../assets/modelscover.webp";
function ModelsLanding(){
    return(
        <div className="models-container">
            <img src={modelscover} alt="modelspagecoverphoto" className="models-cover"/>
            <div className="models-bg-overlay"></div>
            <div className="models-head">
                <h1>Our Models</h1>
            </div>  
        </div>
        
    )
}

export default ModelsLanding;