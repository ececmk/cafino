import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [menuOpen]);

    return (
        <nav>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
            <a href="/">
                <img src="/cafino-logo.jpg" alt="Cafino Logo" className="cafinoLogo"></img>
            </a>
            <div className="social-icons">
            <a href="https://www.instagram.com/cafino_muenchen/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100063610090685" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
            </div>
            <button className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </nav>
    );
};

export default Navbar;