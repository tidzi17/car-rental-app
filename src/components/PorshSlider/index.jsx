import React, { useState /* , useRef  */} from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles.css';
import data from './data.json';
import por1 from "../assets/por1.png";
import por2 from "../assets/por2.png";
import por3 from "../assets/por3.png";
import por4 from "../assets/por4.png";


const PorscheSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };
  const imageSources = [por1, por2, por3, por4];
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

export default PorscheSlider;