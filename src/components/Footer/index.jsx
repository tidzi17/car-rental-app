import React from "react";
import footerLogo from "../assets/footer-logo.png";
import navdata from "./nav.json";
import contactinfo from "./contact.json";
import locations from "./locations.json";
import {SlSocialInstagram} from 'react-icons/sl';
import {SlSocialLinkedin} from 'react-icons/sl';
import {SlSocialFacebook} from 'react-icons/sl';
import {SlSocialTwitter} from 'react-icons/sl';

import { useNavigate } from "react-router-dom";

import "./styles.css";


function Footer() {
    const navigate = useNavigate();
    return(
        <footer className="footer-container">
            <div className="footer-context">
                <div className="footer-logo-container">
            <img src={footerLogo} alt="footer-logo"/>
            </div>
            <div className="footer-menu">
           
               <div className="footer-nav">
               <ul className="footer-nav-links">
                <h3>Navigation</h3>     
                {
                            navdata.map((e) => {
                                return <li className="footer-nav-item" key={e.name} onClick={() => navigate(e.url)}>{e.name}</li>
                            })
                        }
                {/* <li className="footer-nav-item">Home</li>
                <li className="footer-nav-item">About</li>
                <li className="footer-nav-item">Models</li>
                <li className="footer-nav-item">Contact</li> */}
                </ul>
               </div>
               <div className="footer-contact">
                <ul className="footer-contact-links">
                    <h3>Get in touch</h3>
                    {
                        contactinfo.map((e) => {
                            return(
                                <div>
                                <li className="footer-nav-item">{e.phone}</li> 
                                <li className="footer-nav-item">{e.email}</li>
                                </div> 
                            )
                        })
                    }
                    {/* <li className="footer-nav-item">+365 555-896</li>
                    <li className="footer-nav-item">drivexcellence@gmail.com</li> */}
                </ul>
               </div>
               <div className="footer-locations">
                <ul className="footer-locations-links">
                    <h3>Locations</h3>
                    {
                        locations.map((e) => {
                            return <li className="footer-nav-item">{e.addres}</li>
                        })
                    }
                    {/* <li className="footer-nav-item">21.Jump Street, New York</li>
                    <li className="footer-nav-item">17.Main Street, Chicago</li>
                    <li className="footer-nav-item">13.Central Awe, Atlanta</li>
                    <li className="footer-nav-item">47.Wall Street, Dallas</li>
                    <li className="footer-nav-item">86.Miami Ave, Miami</li> */}
                </ul>
               </div>
               </div>
            </div>
            <div className="footer-bottom">
            <div className="footer-socials">
            <SlSocialInstagram className="footer-socials-item"/>
            <SlSocialLinkedin className="footer-socials-item"/>
            <SlSocialFacebook className="footer-socials-item"/>
            <SlSocialTwitter className="footer-socials-item"/>
            </div>
            <div>
                <p>&copy;Copyright2023</p>
            </div>
            </div>
           
        </footer>
    )
}

export default Footer;