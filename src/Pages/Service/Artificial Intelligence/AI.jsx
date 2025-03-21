import React from "react";
import AiFaq from "./AiFaq";
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
import "../Artificial Intelligence/Ai.css";
import AiProcess from "./AiProcess/AiProcess";

export default function Ai() {
  return (
    <div className="ai_app_dev">
      <div className="ai_app_dev_hero">
        <div className="ai_app_dev_hero_two">
          <img src={app_icon}></img>
        </div>
        <div className="ai_app_dev_hero_one">
          <h1 className="ai_app_dev_hero_h1">
          Unlock the power of Artificial Intelligence with Sanjit Tech Solutions.
          </h1>
          <p>
          We develop AI models 
          tailored to your business needss.
          </p>
          <button type="submit">Let's Build</button>
        </div>
      </div>
      <div className="ai_why_box">
        <p className="ai_sub-heading">Why Choose Our Ai Development Service</p>
        <p className="ai_sub-text"> Our Ai development Process</p>
      </div>
      <AiProcess/>
      <div className="ai_properties">Why Our AI Solutions Stand Out </div>
      <div className="ai_boxes">
        <img className="ai_webbg-1" src={webbg_lt} alt="image" />
        <div className="ai_boxes1">
          <div className="ai_box-1">
            <div className="ai_box-icon">
              <BiCodeBlock size={40} className="ai_icon-code-block" />
            </div>
            <p>We develop AI solutions specific to your business needs, 
            ensuring maximum impact and efficiency</p>
          </div>
          <div className="ai_box-2">
            <div className="ai_box-icon">
              <FaPeopleArrows size={40} className="ai_icon-code-block" />
            </div>
            <p>
            Our AI models analyze data to provide 
            actionable insights, helping businesses make smarter decisions
            </p>
          </div>
          <div className="ai_box-3">
            <div className="ai_box-icon">
              <FaLaptop size={40} className="ai_icon-code-block" />
            </div>
            <p>
            Our AI models are built for scalability, seamlessly 
            integrating with cloud platforms like AWS, Azure, and Google Cloud
            </p>
          </div>
        </div>
        <div className="ai_boxes2">
          <div className="ai_box-4">
            <div className="ai_box-icon">
              <FaCalendarCheck size={40} className="ai_app_icon-code-block" />
            </div>
            <p>
            We ensure all AI implementations adhere to industry standards, 
            protecting sensitive data and maintaining compliance.
            </p>
          </div>
          <div className="ai_box-5">
            <div className="ai_box-icon">
              <SlGraph size={40} className="ai_app_icon-code-block" />
            </div>
            <p>
              Integrating cutting-edge tech for enhanced performance and
              scalability
            </p>
          </div>
          <div className="ai_box-6">
            <div className="ai_box-icon">
              <MdOutlineSecurity size={40} className="ai_app_icon-code-block" />
            </div>
            <p>
            Our AI solutions continuously evolve through 
            training and optimization, ensuring improved accuracy and performance over time.
            </p>
          </div>
        </div>
        <img className="ai_webbg-2" src={webbg} alt="image" />
      </div>
      <div className="ai_professional">
        <h1>Why AI is Essential for Your Business </h1>
        <div className="ai_professinal-boxes">
          <div className="ai_professional-box-one">
            <SiAdguard size={40} className="ai_app_icon-code-block" />

            <div className="ai_professional-content">
              <h2>Enhances Efficiency & Automation </h2>
              <ul>
                <li>
                Automates Repetitive Tasks – AI-powered automation reduces manual workload, improving 
                efficiency.
                </li>
                <li>
                Smart Workflow Optimization – AI streamlines operations, reducing errors and improving 
                productivity. .
                </li>
                
              </ul>
            </div>
          </div>
          <div className="ai_professional-box-two">
            <IoPeopleSharp size={40} className="ai_app_icon-code-block" />
            <div className="ai_professional-content">
              <h2> Improves Customer Experience & Engagement</h2>
              <ul>
                <li>
                AI Chatbots & Virtual Assistants – Provide 24/7 customer support and personalized interactions.
                </li>
                <li>
                Sentiment Analysis & Predictive Behavior – Understand customer needs and tailor experiences 
                accordingly. 
                </li>
               
              </ul>
            </div>
          </div>
          <div className="ai_professional-box-three">
            <FaMoneyBillTrendUp size={40} className="ai_app_icon-code-block" />{" "}
            <div className="ai_professional-content">
              <h2> Drives Business Growth & Innovation </h2>
              <ul>
                <li>
                Data-Driven Insights – AI analyzes large datasets to uncover trends and business opportunities.
                </li>
                <li>
                Competitive Advantage – Businesses leveraging AI stay ahead in a fast-evolving market.
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ai_faq_container">
        <h4 className="ai_faq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
        {/* Faq Component */}
        <AiFaq />
      </div>
      <div className="ai_service-contact">
        <div className="ai_service-contact-img">
          <img src={CTA_img} alt="Call to Action"></img>
        </div>
        <div className="ai_service-contact-content">
          <h1>Empower Your Business with a Custom App </h1>
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
