import React from "react";
import { useState, useEffect} from "react";
import logo from "../assets/logo.png";
import data from "./data.json";
import { useNavigate } from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import {ImCross} from 'react-icons/im'
import './styles.css'

function Navbar(){
    const navigate = useNavigate();
    const [Mobile, setMobile] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const backgroundColor = scrollPosition > 100 ? 'black' : 'transparent';

    return(
        <header style={{ backgroundColor }}>
            <div className="navigation-container">
                <div className="logo">
                    <img src={logo} alt="logo" height={70} width={250} />
                </div>
                <nav className="navbar">
                    <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                        {
                            data.map((e) => {
                                return <li className="nav-item" key={e.name} onClick={() => navigate(e.url)}>{e.name}</li>
                            })
                        }
                     </ul>
                <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross /> : <FaBars />}
                </button>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;