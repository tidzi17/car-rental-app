import React from "react";
import {AiFillClockCircle} from 'react-icons/ai';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import Map from "../Map";
import './styles.css';

function ContactContent(){
    return(
        <div className="contact-content-container">
            <div className="contact-content-info">
            <div className="icon-text-container">
                 <AiFillClockCircle className="icon" style={{ color: '#d68d06' }} />
                 <p>Working hours: 07:00 AM - 21:00 PM</p>
                 </div>
                 <div className="icon-text-container">
                 <BsFillTelephoneFill className="icon" style={{ color: '#d68d06' }} />
                 <p>+365 555-896</p>
                 </div>
                 <div className="icon-text-container">
                 <AiOutlineMail className="icon" style={{ color: '#d68d06' }} />
                 <p>drivexcellence@gmail.com</p>
                 </div>
                
            </div>
            <div className="contact-content-map">
                <Map />
            </div>

        </div>
    )
}

export default ContactContent;