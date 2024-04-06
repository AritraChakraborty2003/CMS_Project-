import React from 'react';
import './Header.css'; // Assuming you have a separate CSS file for styling
import logoImage from './logo.webp'; // Adjust the path to your logo image
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi'; 

function Header() {
  return (
    <header className="header">
      <img src={logoImage} alt="Dazzling Sphere Logo" className="logo" />
      <div className="brand-statement">Where Every Event Shines Brighter</div>
      <div className="contact-info">
        <div className="phone">
          <a href="tel:+918800904854" aria-label="Call us">
            <FiPhoneCall /> +91 88009 04854
          </a>
        </div>
        <div className="email">
          <a href="mailto:info@dazzzlingsphere.com" aria-label="Send email">
            <FaEnvelope /> info@dazzzlingsphere.com
          </a>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/dazzzlingsphere/" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> @dazzzlingsphere
          </a>
          <a href="https://www.facebook.com/dazzzlingsphere" aria-label="Follow us on Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF /> @dazzzlingsphere
          </a>
          <a href="https://www.linkedin.com/company/dazzzlingsphere/" aria-label="Connect with us on LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn /> @dazzzlingsphere
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
