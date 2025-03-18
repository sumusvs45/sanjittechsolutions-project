import React from "react";
import "../WhyChoose/WhyChoose.css";
const WhyChoose = () => {
  return (
    <>
      <div className="div">
        <div className="whyChoose-header">
          <div className="chooseUs-border"></div>
          <h2>Why Sanjit Tech?</h2>
        </div>
        <div className="div"></div>
        <div className="card-box">
          <div className="md-circleLeft"></div>
          <div className="md-circleRight"></div>
          <div className="div"></div>
          <div className="card-left">
            <h2>What makes Sanjit Tech different?</h2>
            <p>Our expert team ensures innovative, high-performance solutions tailored to your business growth, leveraging the latest technology to drive efficiency and success.</p>
          </div>
          <div className="card-right">
            <h2>Why Choose Sanjit Tech?</h2>
            <p>We deliver cutting-edge, scalable web solutions designed to enhance user experience, boost performance, and accelerate your digital transformation with precision and expertise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
