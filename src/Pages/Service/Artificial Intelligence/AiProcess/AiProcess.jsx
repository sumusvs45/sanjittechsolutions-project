import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../AiProcess/AiProcess.css";

const cards = [
  { id: 1, text: "1. AI Strategy & Consultation", para: "We analyze your business requirements and explore AI-driven opportunities to create a tailored AI strategy that aligns with your goals." },
  { id: 2, text: "2. Machine Learning & Predictive Analytics", para: "We develop AI-powered machine learning models to analyze data, predict trends, and automate processes." },
  { id: 3, text: "3. Natural Language Processing (NLP) & Chatbots", para: "We create AI-driven chatbots and virtual assistants that enhance customer experience and automate conversations." },
  { id: 4, text: "4. AI-Powered Automation & Robotics", para: "Our AI-driven automation solutions help businesses streamline operations, reduce costs, and improve efficiency." },
  { id: 5, text: "5. Computer Vision & Image Recognition", para: "We develop AI-driven computer vision solutions that enable real-time object detection, facial recognition, and visual data analysis." },
  { id: 6, text: "6. AI Integration & Deployment", para: "We ensure seamless AI integration into existing business systems, enabling efficient automation and data-driven decision-making." },
];

export default function AiProcess() {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 2; // Adjust speed here
    const interval = setInterval(() => {
      if (scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft += scrollSpeed;
      } else {
        scrollContainer.scrollLeft = 0; // Reset scroll when it reaches the end
      }
      handleScroll();
    }, 50); // Adjust interval for smoothness

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      setScrollX((scrollLeft / maxScroll) * 100);
    }
  };

  return (
    <div className="ai-container-slider">
      <div className="ai-progress-bar-wrapper-slider">
        <div className="ai-progress-bar-slider" style={{ width: `${scrollX}%` }}></div>
      </div>
      <div className="ai-cards-wrapper-slider" ref={containerRef} onScroll={handleScroll}>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="ai-card-slider"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="ai-card-slider-heading">{card.text}</h2>
            <p className="ai-card-slider-para">{card.para}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
