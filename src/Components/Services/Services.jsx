import React from "react";
import { MdWebAsset } from "react-icons/md";
import { IoPulseOutline } from "react-icons/io5";
import { FaBrain } from "react-icons/fa";
import { Si365Datascience } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa";
import "../Services/Services.css";
const Services = () => {
  return (
    <>
      <div className="services-section">
        <div className="services-header">
          <h2 className="sub-heading">Innovative Digital Solutions</h2>
          <p className="sub-text">
            we are development experts <br></br>on all technologies & platforms
          </p>
        </div>
        <div className="card-container">
          <div className="card">
          <MdWebAsset size={"80px"} />
            <div className="border"></div>
            <h4>Web Development</h4>
            <p>Your Vision, Our Code. Exceptional Web Development Delivered</p>
          </div>
          <div className="card">
          <IoPulseOutline size={"80px"} />

            <div className="border"></div>
            <h4>Seo</h4>
            <p>SEO Turning raw data into actionable insights, we deliver data-driven solutions that empower. </p>
          </div>
          <div className="card">
          <FaBrain size={"80px"} />
          <div className="border"></div>
            <div className="div"></div>
            <h4>Artificial Intiligence</h4>
            <p>Harnessing the power of AI to transform your vision into intelligent, scalable, and future-ready solutions.</p>
          </div>
          <div className="card">
          <Si365Datascience size={"80px"}/>
          <div className="border"></div>

            <div className="div"></div>
            <h4>Data Science</h4>
            <p>Turning raw data into actionable insights, we deliver data-driven solutions that empower. </p>
          </div>
          <div className="card">
          <SiGooglemarketingplatform size={"80px"}/>
          <div className="border"></div>

            <div className="div"></div>
            <h4>Digital Marketing</h4>
            <p>Your Vision, Our Code. Exceptional Web Development Delivered</p>
          </div>
          <div className="card">
          <FaAppStoreIos size={"80px"}/>
          <div className="border"></div>

            <div className="div"></div>
            <h4>App Development</h4>
            <p>Turning raw data into actionable insights, we deliver data-driven solutions that empower. </p> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
