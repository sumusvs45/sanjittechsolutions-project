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
import "../AppService/AppService.css";

export default function DataScience() {
  return (
    <div className="app_dev">
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
      <div className="why_box">
        <p className="sub-heading">Why Choose Our  Data Science Development Service</p>
        <p className="sub-text"> Our Data Science development Process</p>
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

      <div className="properties">Why Our Data Science Services Stand Out </div>
      <div className="boxes">
        <img className="webbg-1" src={webbg_lt} alt="image" />
        <div className="boxes1">
          <div className="box-1">
            <div className="box-icon">
              <BiCodeBlock size={40} className="icon-code-block" />
            </div>
            <p> Tailored data science strategies to meet your unique business needs.  </p>
          </div>
          <div className="box-2">
            <div className="box-icon">
              <FaPeopleArrows size={40} className="icon-code-block" />
            </div>
            <p>
            Implementing cutting-edge ML and AI models for predictive 
            insights and automation. 
            </p>
          </div>
          <div className="box-3">
            <div className="box-icon">
              <FaLaptop size={40} className="icon-code-block" />
            </div>
            <p>
              Seamless, high-performance cross-platform and native app
              development
            </p>
          </div>
        </div>
        <div className="boxes2">
          <div className="box-4">
            <div className="box-icon">
              <FaCalendarCheck size={40} className="icon-code-block" />
            </div>
            <p>
            Leveraging big data technologies for faster and more accurate decision
            making.
            </p>
          </div>
          <div className="box-5">
            <div className="box-icon">
              <SlGraph size={40} className="icon-code-block" />
            </div>
            <p>
            Ensuring data protection and adherence to industry regulations.
            </p>
          </div>
          <div className="box-6">
            <div className="box-icon">
              <MdOutlineSecurity size={40} className="icon-code-block" />
            </div>
            <p>
            Refining models and strategies for improved accuracy and 
            efficiency over time. 
            </p>
          </div>
        </div>
        <img className="webbg-2" src={webbg} alt="image" />
      </div>
      <div className="professional">
        <h1>Why Data Science is Essential for Your Business </h1>
        <div className="professinal-boxes">
          <div className="professional-box-one">
            <SiAdguard size={40} className="icon-code-block" />

            <div className="professional-content">
              <h2>Data-Driven Decision Making </h2>
              <ul>
                <li>
                Predictive Analytics – Forecast trends and make proactive business decisions. .
                </li>
                <li>
                Real-Time Insights – Access actionable insights to improve strategies..
                </li>
                <li>
                AI & Machine Learning Models – Automate processes and enhance efficiency.
                </li>
              </ul>
            </div>
          </div>
          <div className="professional-box-two">
            <IoPeopleSharp size={40} className="icon-code-block" />
            <div className="professional-content">
              <h2> Enhanced Customer Experience & Personalization </h2>
              <ul>
                <li>
                Behavioral Analytics – Analyze customer interactions for better engagement.
                </li>
                <li>
                Recommendation Systems – Suggest products/services based on user preferences.
                </li>
                <li>
                Customer Segmentation – Target the right audience with tailored marketing strategies.
                </li>
              </ul>
            </div>
          </div>
          <div className="professional-box-three">
            <FaMoneyBillTrendUp size={40} className="icon-code-block" />{" "}
            <div className="professional-content">
              <h2> Business Growth & Competitive Advantage </h2>
              <ul>
                <li>
                Process Automation – Use AI-driven solutions to streamline workflows.
                </li>
                <li>
                 Risk Management & Fraud Detection – Identify and mitigate potential risks in real-times.
                </li>
                <li>
                Risk Management & Fraud Detection – Identify and mitigate potential risks in real-time.
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
        <AppFaq />
      </div>
      <div className="service-contact">
        <div className="service-contact-img">
          <img src={CTA_img} alt="Call to Action"></img>
        </div>
        <div className="service-contact-content">
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
