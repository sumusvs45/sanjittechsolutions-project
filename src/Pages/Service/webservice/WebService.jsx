import React, { useRef,useState } from "react";
import WebFaq from "./WebFaq.jsx";
import { FaPeopleArrows, FaLaptop, FaCalendarCheck, } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";

import app_icon from "../../../assets/app development 1.webp";
import webbg from "../../../assets/web-service-bg.webp";
import webbg_lt from "../../../assets/web-service-bg-lt.webp";
import CTA_img from "../../../assets/CTA_Image.webp";
import "../webservice/WebService.css";
import {motion, useScroll, useTransform } from "framer-motion";

export default function WebService() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
 
  const totalCards = 5;  // Number of cards
 
  // Calculate the X transform based on the index
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(totalCards - 1) * 100}%`]
  );
 
  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalCards - 1 ? prev + 1 : prev));
  };
 
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <div className="app_dev">
      {/* Hero Section */}
      <div className="app_dev_hero">
        <div className="app_dev_hero_two">
          <img src={app_icon} alt="App Development" />
        </div>
        <div className="app_dev_hero_one">
          <h1 className="app_dev_hero_h1">Web Development Services for High-Performance Websites</h1>
          <p>
            At Sanjit Tech Solutions, we follow a streamlined process to ensure
            high-quality websites that align with your business goal.
          </p>
          <button type="submit">Let's Build</button>
        </div>
      </div>
      
      {/* Why Choose Section */}
      <div className="why_box">
        <p className="sub-heading">Why Choose Our Web Development Service</p>
        <p className="sub-text"> Our Web development Process</p>
      </div>

      {/* Process Section */}
      <div className="wrapper" ref={containerRef}>
      <h2 className="sub-heading">Horizontal Scroll Animation</h2>
 
      {/* Progress Bar */}
      <div className="progress-bar-container">
        {Array.from({ length: totalCards }, (_, i) => (
          <div
            key={i}
            className={`circle ${i === currentIndex ? "active" : ""}`}
          >
            {i + 1}
          </div>
        ))}
      </div>
 
      {/* Scroll Section */}
      <div className="horizontal-scroll">
        <motion.div
          className="scroll-container"
          style={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Individual Cards */}
          {Array.from({ length: totalCards }, (_, i) => (
            <motion.div
              key={i}
              className="content-box"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h2>Card {i + 1}</h2>
              <ul>
                <li>Requirement Analysis</li>
                <li>UI/UX Design</li>
                <li>Development</li>
                <li>Testing & Deployment</li>
                <li>Maintenance & Support</li>
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
 
      {/* Navigation Buttons */}
      <div className="btn-container">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Prev
        </button>
        <button onClick={handleNext} disabled={currentIndex === totalCards - 1}>
          Next
        </button>
      </div>
    </div>

      {/* Properties Section */}
      <div className="properties">Why Web Development Stands Out</div>
      <div className="boxes">
        <img className="webbg-1" src={webbg_lt} alt="Web Background" />
        <div className="boxes1">
          {[{icon: BiCodeBlock, text: "Custom & Scalable Solutions – Tailor-made websites that grow with your business."},
            {icon: FaPeopleArrows, text: "SEO & Performance Optimized – Faster load times, better rankings, and higher conversions."},
            {icon: FaLaptop, text: "User-Friendly & Responsive – Flawless experience across all devices."}
          ].map((item, index) => (
            <div key={index} className={`box-${index + 1}`}>
              <div className="box-icon"><item.icon size={40} /></div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="boxes2">
          {[{icon: FaCalendarCheck, text: "Security First Approach – Ensuring top-tier security and protection."},
            {icon: SlGraph, text: "Dedicated Support & Maintenance – Continuous improvements for long-term success."},
            {icon: MdOutlineSecurity, text: "Secure, efficient, high-performing solutions for a flawless user experience."}
          ].map((item, index) => (
            <div key={index} className={`box-${index + 4}`}>
              <div className="box-icon"><item.icon size={40} /></div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <img className="webbg-2" src={webbg} alt="Web Background" />
      </div>

      {/* FAQ Section */}
      <div className="faq_container">
        <h4 className="faq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
        <WebFaq />
      </div>

      {/* Contact Section */}
      <div className="service-contact">
        <div className="service-contact-img">
          <img src={CTA_img} alt="Call to Action" />
        </div>
        <div className="service-contact-content">
          <h1>Empower Your Business with a Custom App</h1>
          <p>
            In today’s digital world, having a custom-built website is more than just an online presence—it’s a powerful business tool that helps you stand out, attract customers, and drive growth.
          </p>
          <button>Get a Free Quote</button>
        </div>
      </div>
    </div>
  );
}
