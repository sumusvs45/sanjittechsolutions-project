import React from "react";
import AppFaq from "./DataScienceFaq";
import { FaPeopleArrows } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { FaLaptop } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";

import app_icon from "../../../assets/app development 1.webp";
import webbg from "../../../assets/web-service-bg.webp";
import webbg_lt from "../../../assets/web-service-bg-lt.webp";
import CTA_img from "../../../assets/CTA_Image.webp";
import "../DataScience/DataScience.css";
import DsProcess from "./DsProcess/DsProcess";

export default function DataScience() {
  return (
    <div className="ds_dev">
      <div className="ds_dev_hero">
        <div className="ds_dev_hero_two">
          <img src={app_icon}></img>
        </div>
        <div className="ds_dev_hero_one">
          <h1 className="ds_dev_hero_h1">
          Data Science Solutions for Business Growth  
          </h1>
          <p>
          Our Data Science expertise helps businesses make data-driven decisions for enhanced efficiency.
          </p>
          <button type="submit">Let's Build</button>
        </div>
      </div>
      <div className="ds-why_box">
        <p className="ds-sub-heading">Why Choose Our  Data Science Development Service</p>
        <p className="ds-sub-text"> Our Data Science development Process</p>
      </div>
     <DsProcess/>

      <div className="ds-properties">Why Our Data Science Services Stand Out </div>
      <div className="ds-boxes">
        <img className="ds-webbg-1" src={webbg_lt} alt="image" />
        <div className="ds-boxes1">
          <div className="ds-box-1">
            <div className="ds-box-icon">
              <BiCodeBlock size={40} className="ds-icon-code-block" />
            </div>
            <p> Tailored data science strategies to meet your unique business needs.  </p>
          </div>
          <div className="ds-box-2">
            <div className="ds-box-icon">
              <FaPeopleArrows size={40} className="ds-icon-code-block" />
            </div>
            <p>
            Implementing cutting-edge ML and AI models for predictive 
            insights and automation. 
            </p>
          </div>
          <div className="ds-box-3">
            <div className="ds-box-icon">
              <FaLaptop size={40} className="ds-icon-code-block" />
            </div>
            <p>
              Seamless, high-performance cross-platform and native app
              development
            </p>
          </div>
        </div>
        <div className="ds-boxes2">
          <div className="ds-box-4">
            <div className="ds-box-icon">
              <FaCalendarCheck size={40} className="ds-icon-code-block" />
            </div>
            <p>
            Leveraging big data technologies for faster and more accurate decision
            making.
            </p>
          </div>
          <div className="ds-box-5">
            <div className="ds-box-icon">
              <SlGraph size={40} className="ds-icon-code-block" />
            </div>
            <p>
            Ensuring data protection and adherence to industry regulations.
            </p>
          </div>
          <div className="ds-box-6">
            <div className="ds-box-icon">
              <MdOutlineSecurity size={40} className="ds-icon-code-block" />
            </div>
            <p>
            Refining models and strategies for improved accuracy and 
            efficiency over time. 
            </p>
          </div>
        </div>
        <img className="ds-webbg-2" src={webbg} alt="image" />
      </div>
      <div className="ds-professional">
        <h1>Why Data Science is Essential for Your Business </h1>
        <div className="ds-professinal-boxes">
          <div className="ds-professional-box-one">
            <SiAdguard size={40} className="ds-icon-code-block" />

            <div className="ds-professional-content">
              <h2>Data-Driven Decision Making </h2>
              <ul>
                <li>
                Predictive Analytics – Forecast trends and make proactive business decisions. .
                </li>
                <li>
                Real-Time Insights – Access actionable insights to improve strategies..
                </li>
               
              </ul>
            </div>
          </div>
          <div className="ds-professional-box-two">
            <IoPeopleSharp size={40} className="icon-code-block" />
            <div className="ds-professional-content">
              <h2> Enhanced Customer Experience & Personalization </h2>
              <ul>
                <li>
                Behavioral Analytics – Analyze customer interactions for better engagement.
                </li>
                <li>
                Recommendation Systems – Suggest products/services based on user preferences.
                </li>
               
              </ul>
            </div>
          </div>
          <div className="ds-professional-box-three">
            <FaMoneyBillTrendUp size={40} className="icon-code-block" />{" "}
            <div className="ds-professional-content">
              <h2> Business Growth & Competitive Advantage </h2>
              <ul>
                <li>
                Process Automation – Use AI-driven solutions to streamline workflows.
                </li>
                <li>
                 Risk Management & Fraud Detection – Identify and mitigate potential risks in real-times.
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ds-faq_container">
        <h4 className="ds-faq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
        {/* Faq Component */}
        <AppFaq />
      </div>
      <div className="ds-service-contact">
        <div className="ds-service-contact-img">
          <img src={CTA_img} alt="Call to Action"></img>
        </div>
        <div className="ds-service-contact-content">
          <h1>Empower Your Business with a Data Science </h1>
          <p>
            In today’s mobile-first world, having a custom-built app is a
            game-changer for business growth. At Sanjit Tech Solutions, we build
            powerful, secure, and user-friendly apps tailored to your unique
            business needs.
          </p>
          <button>Get a Free Quote</button>
        </div>
      </div>
    </div>
  );
}
