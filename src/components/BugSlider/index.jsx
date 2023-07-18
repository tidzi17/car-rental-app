import React, { useState, useRef } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';
import data from './data.json';
import bug1 from "../assets/bug1.png";
import bug2 from "../assets/bug2.png";


const BuggatiSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };
  const imageSources = [bug1, bug2];
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

export default BuggatiSlider;