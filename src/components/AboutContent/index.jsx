import React from "react";
import photo from "../assets/aboutcontent.jpeg";
import photo2 from "../assets/carss.jpeg";
import photo3 from "../assets/cars.jpeg";
import './styles.css';
import locations from './data.json';

function AboutContent(){
    return(
        <div className="about-content-container">
            
            <div className="about-content-first" id="about">    
            <p>
            <h1>#1 Lux Rental Car Company</h1>
                Founded with a profound love for automotive
                excellence, <span style={{color: '#d68d06'}}>DriveXcellence</span> embodes a vision
                to offer an unparalleled section of luxurious
                sports cars to those who crave the extraordinary.
                We understand that driving is not merely a means 
                of transportation; it's a powerful expression
                of freedom, style and exhilaration. That's why We
                have meticulously curated a fleet of iconic sports
                cars that embody the perfect fusion of engineering 
                prowess and aesthetic beauty.
            </p>
            <img src={photo}  />
            </div>
            <div className="about-content-second" id="about">
            <img src={photo2}  />
                <p>
                <h1>Unmatched Customer Service and Support</h1>
                At <span style={{color: '#d68d06'}}>DriveXcellence</span>, we pride ourselves on providing
                 unmatched customer service and support throughout your rental experience.
                  Our dedicated team of professionals is passionate about ensuring your 
                  satisfaction and making your journey memorable. From the moment you
                   reach out to us until the end of your rental period, we are here to
                    assist you with any queries, special requests, or concerns you may have.
                     We go above and beyond to exceed your expectations, offering personalized 
                     attention and a seamless rental process, so you can focus on enjoying your luxury sports car to the fullest.
                </p>
                
              
            </div>
            <div className="about-content-third" id="about">
                <p>
                <h1>Unforgettable Experiences, Tailored for You</h1>
                <span style={{color: '#d68d06'}}>DriveXcellence</span> is more than just a luxury car rental company;
                 we are creators of unforgettable experiences. We understand that
                  each customer is unique, with their own preferences and desires. 
                  That's why we offer personalized solutions to ensure that your rental
                   experience aligns perfectly with your needs. Whether you're planning 
                   a special occasion, a weekend getaway, or simply treating yourself to
                    an extraordinary driving experience, our team will work
                     closely with you to tailor every aspect of your rental,
                      from vehicle selection to delivery and beyond.
                 DriveXcellence is your gateway to unforgettable moments on the road.
                </p>
                <img src={photo3}  />
              
            </div>
        </div>
    )
}
export default AboutContent