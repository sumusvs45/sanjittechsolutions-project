import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "../DsProcess/DsProcess.css";

const cards = [
  { id: 1, text: "1. Data Strategy & Consulting  ",para:"We analyze your business objectives and craft a data-driven strategy to maximize insights and efficiency. " },
  { id: 2, text: "2. Data Collection & Processing ",para:'We gather and preprocess structured and unstructured data to ensure accuracy and efficiency. Data Mining & Extraction – Collecting relevant data from multiple sources. ' },
  { id: 3, text: "3.Exploratory Data Analysis (EDA) & Visualization  ",para:'Understanding data trends and patterns through statistical analysis and interactive dashboards. Descriptive & Inferential Statistics – Uncovering key data insights' },
  { id: 4, text: "4.Machine Learning & Predictive Analytics  ",para:'We develop AI-powered predictive models to forecast trends and automate business decisions. ' },
  { id: 5, text: "5.Big Data & Cloud Analytics   ",para:'Handling massive datasets with cloud-based solutions for scalable data processing. ' },
];

export default function DsProcess() {
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
    <div className="ds-container-slider">
      <div className="ds-progress-bar-wrapper-slider">
        <div className="ds-progress-bar-slider" style={{ width: `${scrollX}%` }}></div>
      </div>
      <div className="ds-cards-wrapper-slider" ref={containerRef} onScroll={handleScroll}>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="ds-card-slider"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="ds-card-slider-heading">{card.text}</h2>
            <p className="ds-card-slider-para">{card.para}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}