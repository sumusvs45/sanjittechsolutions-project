import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../WebProcess/WebProcess.css";

const cards = [
  { id: 1, text:'1. Understanding Your Business Needs', para:"Before we start building your website, we take the time to thoroughly analyze your business requirements, target audience, and competitors. This helps us craft a strategy that aligns with your goals, ensuring your website meets your brand’s unique needs while standing out in the market." },
  { id: 2, text: "2. Planning & Wireframing", para:'Once we understand your objectives, we move on to the planning and wireframing stage. This involves creating a blueprint of your website’s structure and user journey, mapping out key sections, navigation, and functionalities. A well-planned wireframe ensures an intuitive and engaging user experience.' },
  { id: 3, text: "3. Design & Development", para:'With a solid plan in place, our expert team brings your vision to life through modern, visually appealing, and responsive design. We use cutting-edge technologies to build a website that is fast, secure, and fully functional. Every element, from typography to animations, is crafted with user engagement and brand consistency in mind.' },
  { id: 4, text: "4. Testing & Optimization", para:'Before launching, we perform rigorous testing to ensure your website functions seamlessly across all devices and browsers. This includes speed optimization, security enhancements, and debugging to deliver a high-performing, error-free website. Our focus is on achieving fast loading times, smooth interactions, and top-tier security.' },
];

export default function WebProcess() {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);

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
    <div className="web-container-slider">
      {/* Progress Bar */}
      <div className="web-progress-bar-wrapper-slider">
        <div className="web-progress-bar-slider" style={{ width: `${scrollX}%` }}></div>
      </div>

      {/* Card Scroller */}
      <div className="web-cards-wrapper-slider" ref={containerRef} onScroll={() => setScrollX((containerRef.current.scrollLeft / (containerRef.current.scrollWidth - containerRef.current.clientWidth)) * 100)}>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="web-card-slider"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="web-card-slider-heading">{card.text}</h2>
            <p className="web-card-slider-para">{card.para}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
