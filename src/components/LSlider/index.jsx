import React, { useState, useRef } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';
import data from './data.json';
import lam1 from "../assets/lam1.png";
import lam2 from "../assets/lam2.png";
import lam3 from "../assets/lam3.png";
import lam4 from "../assets/lam4.png";
import lam5 from "../assets/lam5.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LamborghiniSlider () {

    const [currentIndex, setCurrentIndex] = useState(0);
  

    const handleSlideChange = (index) => {
      setCurrentIndex(index);
    };
    const imageSources = [lam1, lam2, lam3, lam4, lam5];
    const currentSlide = data[currentIndex]; 
  
    return(
      <div className="sliders-container">
        <div className="info-top">
                <h2>{currentSlide.title}</h2>
            </div>
            <div className="slider-container">
                <Carousel 
                showThumbs={false}
                showStatus={false}
                selectedItem={currentIndex}
                onChange={handleSlideChange}
                >
                    {data.map((slide, index) => (
                        <div key={slide.id} className="slide-container">
                            <img 
                            src={imageSources[index]} 
                             alt={`Photo ${slide.id}`} 
                             className="slide-image"
                             
                             />
                         
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="info-bottom">
            <p id="price">{currentSlide.price}/per day</p>
            <p >{currentSlide.hp}</p>
            <p>{currentSlide.mph}</p>
            
            <Link to="/"><button>Book now!</button></Link>
            
         </div>



      </div>
        
    )
}

export default LamborghiniSlider;