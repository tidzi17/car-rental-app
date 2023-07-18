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
                <p><AiFillClockCircle className="icon" style={{color: '#d68d06'}}/>     Working hours: 07:00AM-21:00PM</p>
                <p><BsFillTelephoneFill className="icon" style={{color: '#d68d06'}}/>  +365 555-896</p>
                <p><AiOutlineMail className="icon" style={{color: '#d68d06'}}/>  drivexcellence@gmail.com</p>
            </div>
            <div className="contact-content-map">
                <Map />
            </div>

        </div>
    )
}

export default ContactContent;