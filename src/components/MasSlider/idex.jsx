import React, { useState, useRef } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';
import data from './data.json';
import mas1 from "../assets/mas3.png";
import mas2 from "../assets/mas4.png";
import mas3 from "../assets/mas1.png";
import mas4 from "../assets/mas2.png";


const MaseratiSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };
  const imageSources = [mas1, mas2, mas3, mas4];
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
        
        <button /* onClick={handleScroll} */ >Book now!</button>
        
     </div>



  </div>
  )
}

export default MaseratiSlider;