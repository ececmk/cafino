import React, { useState, useEffect } from "react";
import { useLanguage } from '../../../Languages/LanguageContext'; 
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import LanguageSelector from '../../../Languages/LanguageSelector/ LanguageSelector'


export const Navbar = () => {

    const { translate } = useLanguage();

    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobile(!isMobile);


      };

    useEffect(() => {
        const handleScroll = () => {
            if (isMobile) {
                setIsMobile(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMobile]);

    return (
        <nav>
            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
                <li>
                    <NavLink to="/">{translate('nav-home')}</NavLink>
                    <span></span>
                </li>
                <li>
                    <NavLink to="/menu">{translate('nav-menu')}</NavLink>
                    <span></span>
                </li>
                <li>
                    <NavLink to="/contact">{translate('nav-contact')}</NavLink>
                    <span></span>
                </li>
            </ul>
            <a href="/">
                <img src="/cafino-logo.jpg" alt="Cafino Logo" className="cafinoLogo"></img>
            </a>
            <LanguageSelector />
            <div className="social-icons">
            <a href="https://www.instagram.com/cafino_muenchen/" target="_blank" rel="noreferrer"><FaInstagram className="social-icon"/></a>
            <a href="https://www.facebook.com/profile.php?id=100063610090685" target="_blank" rel="noreferrer"><FaFacebook className="social-icon" /></a>
            </div>
            <button className='mobile-menu-icon' onClick={toggleMobileMenu}>
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </nav>
    );
};

export default Navbar;