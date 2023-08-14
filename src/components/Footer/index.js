
import React from 'react';
import './style.css';

const Footer = () => {   
  return (
  <footer className="footer">
      <div className="all">

        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">FOODISH</div>
            <div className="footer-text">Continue FOODISH 2023 | All rights reserved</div>
          </div>

          <div className="footer-sections">
            <div className="footer-section">
              <div className="footer-title">Menu</div>
              <ul>
                <li>Home</li>
                <li>Offer</li>
                <li>Services</li>
                <li>Menu</li>
                <li>About us</li>
              </ul>
            </div>
            <div className="footer-section">
              <div className="footer-title">Information</div>
              <ul>
                <li>Menu</li>
                <li>Quality</li>
                <li>Make a choice</li>
                <li>Salad with vegetables</li>
                <li>Fast delivery</li>
                <li>Subscribe</li>
              </ul>
            </div>
            <div className="footer-section">
              <div className="footer-title">Contact</div>
              <ul>
                <li>+123456789</li>
                <li>Explore</li>
                <li>1245,New York,US</li>
                <li>info@Foodish.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
