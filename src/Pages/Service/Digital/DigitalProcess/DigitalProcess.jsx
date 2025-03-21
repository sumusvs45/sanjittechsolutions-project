import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "../DigitalProcess/DigitalProcess.css";

const cards = [
  { id: 1, text: "1. Market Research & Strategy Development  ",para:"We begin by understanding your business, competitors, and target audience. Our strategy is tailored to maximize your reach and engagement." },
  { id: 2, text: "2. Search Engine Marketing (SEM) & Paid Advertising ",para:'We create high-performance Google Ads and PPC campaigns to drive targeted traffic and boost RO ' },
  { id: 3, text: "3.Social Media Marketing (SMM)  ",para:'We leverage social media platforms to build brand awareness and engage with your audience. \Platform-Specific Strategies – Tailored marketing for Facebook, Instagram, LinkedIn, Twitter & more. ' },
  { id: 4, text: "4.Content Marketing & Branding  ",para:'High-quality content is at the heart of digital marketing. We create engaging, SEO-optimized content to establish your brand as an authority. ' },
  { id: 5, text: "5. Search Engine Optimization (SEO) Integration   ",para:'Our SEO-focused digital marketing approach ensures long-term visibility and high search rankings.  ' },
  { id: 4, text: "6. Performance Analysis & Continuous Optimization   ",para:'Digital marketing is an ongoing process. We track campaign performance and optimize strategies to maximize results.  ' },

];

export default function DigitalProcess() {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);
  
  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      setScrollX((scrollLeft / maxScroll) * 100);
    }
  };

  return (
    <div className="digital-container-slider">
      <div className="digital-progress-bar-wrapper-slider">
        <div className="digital-progress-bar-slider" style={{ width: `${scrollX}%` }}></div>
      </div>
      <div className="digital-cards-wrapper-slider" ref={containerRef} onScroll={handleScroll}>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="digital-card-slider"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="digital-card-slider-heading">{card.text}</h2>
            <p className="digital-card-slider-para">{card.para}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}