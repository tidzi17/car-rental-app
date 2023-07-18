import React, { useState, useRef } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import sliderData from './data.json';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import './styles.css';

const Featured = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
  

    const handleSlideChange = (index) => {
      setCurrentIndex(index);
    };
    const imageSources = [feature1, feature2, feature3, feature4];
    const currentSlide = sliderData[currentIndex];

    const handleScroll = () => {
        const section = document.getElementById('bookingsection');
        section.scrollIntoView({ behavior: 'smooth' });
      };
  
    
    return(
        <div className="featured-container">
            <div className="featured-content">
            <h1>Featured vehicles</h1>
            </div>
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
                    {sliderData.map((slide, index) => (
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
            
            <button onClick={handleScroll} >Book now!</button>
            
         </div>
        </div>
    )
} 

export default Featured;