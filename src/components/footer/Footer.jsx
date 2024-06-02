import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} DAMAYO Company. All rights reserved.</p>
                <nav className="footer-nav">
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
        </footer>
    )
}

export default Footer;