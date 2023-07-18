import React from "react";
import './styles.css';
import {BiSolidQuoteAltLeft} from 'react-icons/bi';
import avatar1 from "../assets/avatarA.jpg";
import avatar2 from "../assets/avatarB.jpg";
import avatar3 from "../assets/avatarC.jpg";
const Testimonials = () => {
    return(
        <div className="testimonials-container">
            <div className="testimonials-heading">
                <p className="capitalize">see what our clients have to say</p>
                <h1>Testimonials</h1>
            </div>
            <div className="testimonials-cards-container">
                <div className="testimonials-cards">
                    <div id="firstcard" className="card">
                    <div className="card-content">
                        <div className="quotes">
                            <BiSolidQuoteAltLeft />
                        </div>
                        <div className="card-text">
                            <p>Renting a luxury sports car from DriveXcellence was a dream come true. The car was in impeccable condition, 
                               and the entire rental process was seamless. 
                               The team was professional and provided exceptional customer service. 
                               I highly recommend DriveXcellence to anyone looking for a thrilling driving experience.
                               </p>
                        </div>
                        <div className="card-photo">
                            <img src={avatar1} alt=""/>
                            <p>Reichel Green</p>
                        </div>
                        </div>
                    </div>
                    <div id="secondcard" className="card">
                    <div className="card-content">
                        <div className="quotes">
                            <BiSolidQuoteAltLeft />
                        </div>
                        <div className="card-text">
                            <p>I had an incredible experience with DriveXcellence. The selection of luxury sports cars they offer is outstanding. 
                                The car I rented was delivered on time and in perfect condition.
                                Driving through scenic routes in that beautiful machine was an unforgettable adventure. 
                                I can't wait to rent from DriveXcellence again!
                                </p>
                        </div>
                        <div className="card-photo">
                        <img src={avatar2} alt=""/>
                        <p>Ross Geller</p>
                        </div>
                        </div>
                    </div>
                    <div id="thirdcard" className="card">
                    <div className="card-content">
                        <div className="quotes">
                            <BiSolidQuoteAltLeft />
                        </div>
                        <div className="card-text">
                            <p>DriveXcellence exceeded my expectations in every way. The staff was friendly, knowledgeable,
                                and went above and beyond to ensure my satisfaction. 
                                The luxury sports car I rented was a true head-turner, and the whole experience made me feel like a VIP.
                                DriveXcellence is my go-to for renting luxury sports cars!</p>
                        </div>
                        <div className="card-photo">
                        <img src={avatar3} alt=""/>
                        <p>Bonnie Finkle</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;