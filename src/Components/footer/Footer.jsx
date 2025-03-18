import React from "react";
import "../footer/Footer.css";
import logo from '../../assets/footer-logo.svg'
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
        </div>
 
        {/* Links Section */}
        <div className="footer-links">
          <div className="company">
            <h3>Company</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
 
          {/* Subscribe Section */}
          <div className="subscribe">
            <h3>Stay Ahead in Tech!</h3>
            <p>Subscribe for Exclusive Insights & Updates.</p>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
            <div className="social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="linkedin"><FaLinkedin /></a>
            <a href="#" className="instagram"><FaInstagram /></a>
            <a href="#" className="twitter"><FaXTwitter /></a>
          </div>
        </div>
          </div>
         
        </div>
 
        {/* Social Icons */}
       
      </div>
 
      {/* Copyright */}
      <p className="copyright">© 2025 Sanjit Tech Solutions. All Rights Reserved.</p>
    </footer>
  );
};
 
export default Footer;