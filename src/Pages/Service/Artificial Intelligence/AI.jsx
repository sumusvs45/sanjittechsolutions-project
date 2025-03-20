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
import "../AppService/AppService.css";

export default function Ai() {
  return (
    <div className="app_dev">
      <div className="app_dev_hero">
        <div className="app_dev_hero_two">
          <img src={app_icon}></img>
        </div>
        <div className="app_dev_hero_one">
          <h1 className="app_dev_hero_h1">
          Unlock the power of Artificial Intelligence with Sanjit Tech Solutions.
          </h1>
          <p>
          We develop AI models 
          tailored to your business needss.
          </p>
          <button type="submit">Let's Build</button>
        </div>
      </div>
      <div className="why_box">
        <p className="sub-heading">Why Choose Our Ai Development Service</p>
        <p className="sub-text"> Our Ai development Process</p>
      </div>
      <div className="process">
        <div className="process_one">
          <div className="process1">01</div>
          <div className="process2">02</div>
          <div className="process3">03</div>
          <div className="process4">04</div>
          <div className="process5">05</div>
        </div>
        <div className="process_two">
          <h2>Understanding Your Business Needs</h2>
          <p>
            Before development begins, we analyze your business requirements,
            target users, and competitors. This helps us create an app strategy
            that aligns with your brand’s goals, ensuring a user-friendly and
            market-ready application.{" "}
          </p>
        </div>

        {/* <div className="process_two">
        <h2>Planning & Prototyping </h2>
          <p>Once we define the objectives, we move to the planning and prototyping stage. This includes 
designing wireframes, user flows, and UI/UX layouts to create an intuitive and engaging app 
experience. Every feature and screen is mapped out for seamless usability.  </p>
        </div>
        <div className="process_two">
          <h2> UI/UX Design & App Development</h2>
          <p>Modern and responsive UI/UX design for seamless user engagement 
Agile development using the latest technologies and frameworks 
Cross-platform and native solutions (Android, iOS, and Web Apps) </p>
        </div>
        <div className="process_two">
        <h2> Testing & Optimization</h2>
          <p>We conduct extensive testing to ensure your app works flawlessly across devices and platforms. Our 
testing process includes: 
Performance & Speed Optimization 
Bug Fixing & Security Checks 
User Experience (UX) Testing for smooth functionality </p>
        </div>
        <div className="process_two">
        <h2> Deployment & Ongoing Support</h2>
          <p>Once testing is complete, we launch your app on the App Store, Google Play, or private platforms. 
Our commitment doesn’t end there—we provide ongoing maintenance, updates, and performance 
monitoring to ensure continued success.  </p>
        </div> */}
      </div>

      <div className="properties">Why Our AI Solutions Stand Out </div>
      <div className="boxes">
        <img className="webbg-1" src={webbg_lt} alt="image" />
        <div className="boxes1">
          <div className="box-1">
            <div className="box-icon">
              <BiCodeBlock size={40} className="icon-code-block" />
            </div>
            <p>We develop AI solutions specific to your business needs, 
            ensuring maximum impact and efficiency</p>
          </div>
          <div className="box-2">
            <div className="box-icon">
              <FaPeopleArrows size={40} className="icon-code-block" />
            </div>
            <p>
            Our AI models analyze data to provide 
            actionable insights, helping businesses make smarter decisions
            </p>
          </div>
          <div className="box-3">
            <div className="box-icon">
              <FaLaptop size={40} className="icon-code-block" />
            </div>
            <p>
            Our AI models are built for scalability, seamlessly 
            integrating with cloud platforms like AWS, Azure, and Google Cloud
            </p>
          </div>
        </div>
        <div className="boxes2">
          <div className="box-4">
            <div className="box-icon">
              <FaCalendarCheck size={40} className="icon-code-block" />
            </div>
            <p>
            We ensure all AI implementations adhere to industry standards, 
            protecting sensitive data and maintaining compliance.
            </p>
          </div>
          <div className="box-5">
            <div className="box-icon">
              <SlGraph size={40} className="icon-code-block" />
            </div>
            <p>
              Integrating cutting-edge tech for enhanced performance and
              scalability
            </p>
          </div>
          <div className="box-6">
            <div className="box-icon">
              <MdOutlineSecurity size={40} className="icon-code-block" />
            </div>
            <p>
            Our AI solutions continuously evolve through 
            training and optimization, ensuring improved accuracy and performance over time.
            </p>
          </div>
        </div>
        <img className="webbg-2" src={webbg} alt="image" />
      </div>
      <div className="professional">
        <h1>Why AI is Essential for Your Business </h1>
        <div className="professinal-boxes">
          <div className="professional-box-one">
            <SiAdguard size={40} className="icon-code-block" />

            <div className="professional-content">
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
                <li>
                AI-Powered Decision Making – Data-driven insights help businesses make smarter, faster decisions.
                </li>
              </ul>
            </div>
          </div>
          <div className="professional-box-two">
            <IoPeopleSharp size={40} className="icon-code-block" />
            <div className="professional-content">
              <h2> Improves Customer Experience & Engagement</h2>
              <ul>
                <li>
                AI Chatbots & Virtual Assistants – Provide 24/7 customer support and personalized interactions.
                </li>
                <li>
                Sentiment Analysis & Predictive Behavior – Understand customer needs and tailor experiences 
                accordingly. 
                </li>
                <li>
                Personalized Recommendations – AI-driven insights enhance customer satisfaction and 
engagement. .
                </li>
              </ul>
            </div>
          </div>
          <div className="professional-box-three">
            <FaMoneyBillTrendUp size={40} className="icon-code-block" />{" "}
            <div className="professional-content">
              <h2> Drives Business Growth & Innovation </h2>
              <ul>
                <li>
                Data-Driven Insights – AI analyzes large datasets to uncover trends and business opportunities.
                </li>
                <li>
                Competitive Advantage – Businesses leveraging AI stay ahead in a fast-evolving market.
                </li>
                <li>
                Scalability & Adaptability – AI solutions grow with your business, ensuring long-term success.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="faq_container">
        <h4 className="faq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
        {/* Faq Component */}
        <AiFaq />
      </div>
      <div className="service-contact">
        <div className="service-contact-img">
          <img src={CTA_img} alt="Call to Action"></img>
        </div>
        <div className="service-contact-content">
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
