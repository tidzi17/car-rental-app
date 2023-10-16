import React, { useState, useRef } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';
import data from './data.json';
import fer1 from "../assets/fer1.png";
import fer2 from "../assets/fer2.png";
import fer3 from "../assets/fer3.png";
import fer4 from "../assets/fer4.png";
import { Link } from "react-router-dom";


const FerrariSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
  

    const handleSlideChange = (index) => {
      setCurrentIndex(index);
    };
    const imageSources = [fer1, fer2, fer3, fer4];
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

export default FerrariSlider;