import React from "react";
import DigitalFaq from "./DigitalFaq";
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
import "../Digital/Digital.css";
import DigitalProcess from "./DigitalProcess/DigitalProcess";

export default function Digital() {
  return (
    <div className="digital_dev">
      <div className="digital_dev_hero">
        <div className="digital_dev_hero_two">
          <img src={app_icon}></img>
        </div>
        <div className="digital_dev_hero_one">
          <h1 className="digital_dev_hero_h1">
          Result-Driven Digital Marketing Strategies for Business Growth 
          </h1>
          <p>
          Our digital marketing solutions help brands grow by improving online visibility, generating leads, 
and maximizing ROI. We implement the latest marketing techniques to drive targeted traffic and 
customer engagement..
          </p>
          <button type="submit">Let's Build</button>
        </div>
      </div>
      <div className="digital_why_box">
        <p className="digital_sub-heading">Why Choose Our Digital Marketing Service</p>
        <p className="digital_sub-text"> Our Digital Marketing development Process</p>
      </div>
      <DigitalProcess/>

      <div className="digital-properties">Why Our SEO/Digital Marketing Services Stand Out</div>
      <div className="digital-2boxes">
        <img className="digital-webbg-1" src={webbg_lt} alt="image" />
        <div className="digital-boxes1">
          <div className="digital-box-1">
            <div className="digital-box-icon">
              <BiCodeBlock size={40} className="digital-icon-code-block" />
            </div>
            <p>Tailored SEO plans based on your industry, target audience, and 
            business goals</p>
          </div>
          <div className="digital-box-2">
            <div className="digital-box-icon">
              <FaPeopleArrows size={40} className="digital-icon-code-block" />
            </div>
            <p>
            Ethical and sustainable SEO techniques that ensure long-term success and 
            avoid penalties. 
            </p>
          </div>
          <div className="digital-box-3">
            <div className="digital-box-icon">
              <FaLaptop size={40} className="digital-icon-code-block" />
            </div>
            <p>
            Enhancing page speed, mobile-friendliness, and structured data 
for better rankings.
            </p>
          </div>
        </div>
        <div className="digital-boxes2">
          <div className="digital-box-4">
            <div className="digital-box-icon">
              <FaCalendarCheck size={40} className="digital-icon-code-block" />
            </div>
            <p>
            Creating high-quality, engaging content that improves search rankings 
and user engagement. 
            </p>
          </div>
          <div className="digital-box-5">
            <div className="digital-box-icon">
              <SlGraph size={40} className="digital-icon-code-block" />
            </div>
            <p>
            In-depth research to find the best opportunities 
            for ranking and outperforming competitors. 
            </p>
          </div>
          <div className="digital-box-6">
            <div className="digital-box-icon">
              <MdOutlineSecurity size={40} className="digital-icon-code-block" />
            </div>
            <p>
            Continuous tracking, detailed reports, and strategy 
            adjustments to maximize results. 
            </p>
          </div>
        </div>
        <img className="digital-webbg-2" src={webbg} alt="image" />
      </div>
      <div className="digital-professional">
        <h1>Why SEO is Essential for Your Business </h1>
        <div className="digital-professinal-boxes">
          <div className="digital-professional-box-one">
            <SiAdguard size={40} className="digital-icon-code-block" />

            <div className="digital-professional-content">
              <h2>Increases Website Traffic & Brand Visibility </h2>
              <ul>
                <li>
                Higher Google Rankings – SEO helps your business appear on the first page of search results. .
                </li>
                <li>
                Targeted Traffic – Attract the right audience through optimized keywords and content. 
                </li>
                <li>
                Brand Recognition – Establish your brand as an industry leader with a strong online presence. 
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-professional-box-two">
            <IoPeopleSharp size={40} className="digital-icon-code-block" />
            <div className="professional-content">
              <h2> Improves User Experience & Engagement </h2>
              <ul>
                <li>
                Faster Load Times – Optimized websites perform better and keep users engaged..
                </li>
                <li>
                Faster Load Times – Optimized websites perform better and keep users engaged.
                </li>
                <li>
                Intuitive Site Structure – Easy navigation improves user experience and reduces bounce rates.
                </li>
              </ul>
            </div>
          </div>
          <div className="digital-professional-box-three">
            <FaMoneyBillTrendUp size={40} className="digital-icon-code-block" />{" "}
            <div className="digital-professional-content">
              <h2>Boosts Conversions & Business Growth </h2>
              <ul>
                <li>
                Higher Lead Generation – SEO-driven traffic results in more potential customers.
                </li>
                <li>
                Better ROI Compared to Ads – Organic search brings long-term value without ongoing ad spend.
                </li>
                <li>
                Scalability for Growth – SEO evolves with your business, ensuring continuous visibility..
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="digital-faq_container">
        <h4 className="digital-faq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
        {/* Faq Component */}
        <DigitalFaq />
      </div>
      <div className="digital-service-contact">
        <div className="digital-service-contact-img">
          <img src={CTA_img} alt="Call to Action"></img>
        </div>
        <div className="digital-service-contact-content">
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
