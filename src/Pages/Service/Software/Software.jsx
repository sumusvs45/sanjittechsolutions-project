import React from "react";
import SoftwareFaq from "./SoftwareFaq";
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
import '../Software/Software.css'
import SoftwareProcess from "../Software/softwareProcess/SoftwareProcess.jsx";


export default function Software() {
  return (
    <div className="software-dev">
      <div className="software-dev_hero">
        <div className="software-dev_hero_two">
          <img src={app_icon}></img>
        </div>
        <div className="software-dev_hero_one">
          <h1 className="software-dev_hero_h1">
          Unlock the Power of Software Development with Sanjit Tech Solutions

          </h1>
          <p>
          We build custom software solutions tailored to your business needs, helping you streamline operations, enhance customer experiences, and drive digital transformation
          </p>
          <button type="submit">Let's Build</button>
        </div>
      </div>
      <div className="software-why_box">
        <p className="software-sub-heading">Why Choose Our Software Service</p>
        <p className="software-sub-text"> Our Software  development Process</p>
      </div>
      <SoftwareProcess/>

      <div className="software-properties">Why Our Software Services Stand Out</div>
      <div className="software-boxes">
        <img className="software-webbg-1" src={webbg_lt} alt="image" />
        <div className="software-boxes1">
          <div className="software-box-1">
            <div className="software-box-icon">
              <BiCodeBlock size={40} className="software-icon-code-block" />
            </div>
            <p>Custom-built solutions designed to fit your specific business</p>
          </div>
          <div className="software-box-2">
            <div className="software-box-icon">
              <FaPeopleArrows size={40} className="software-icon-code-block" />
            </div>
            <p>
            We utilize the latest programming languages, frameworks, and tools.
            </p>
          </div>
          <div className="software-box-3">
            <div className="software-box-icon">
              <FaLaptop size={40} className="software-icon-code-block" />
            </div>
            <p>Our software evolves with your business growth.</p>
          </div>
        </div>
        <div className="software-boxes2">
          <div className="software-box-4">
            <div className="software-box-icon">
              <FaCalendarCheck size={40} className="software-icon-code-block" />
            </div>
            <p>Ensuring smooth connectivity across platforms. 
            </p>
          </div>
          <div className="software-box-5">
            <div className="software-box-icon">
              <SlGraph size={40} className="software-icon-code-block" />
            </div>
            <p>
            We adhere to industry standards to protect your data
            </p>
          </div>
          <div className="software-box-6">
            <div className="software-box-icon">
              <MdOutlineSecurity size={40} className="software-icon-code-block" />
            </div>
            <p>
            Regular updates and improvements for long-term performance.
            </p>
          </div>
        </div>
        <img className="software-webbg-2" src={webbg} alt="image" />
      </div>
      <div className="software-professional">
        <h1>Why  Software Development is Essential for Your Business </h1>
        <div className="software-professinal-boxes">
          <div className="software-professional-box-one">
            <SiAdguard size={40} className="software-icon-code-block" />

            <div className="software-professional-content">
              <h2>Why Custom Software Development is Essential for Your Business </h2>
              <ul>
                <li>
                Reduce manual workload and improve productivity.
                </li>
                <li>
                Optimize workflows for faster operations.
                </li>
              </ul>
            </div>
          </div>
          <div className="software-professional-box-two">
            <IoPeopleSharp size={40} className="software-icon-code-block" />
            <div className="software-professional-content">
              <h2> Improves User Experience & Engagement </h2>
              <ul>
                <li>
                Create intuitive and engaging digital experiences.

                </li>
                <li>
                Ensure seamless interactions across web, mobile, and desktop.
                </li>
                <li>
                Build future-proof applications with high security.
                </li>
              </ul>
            </div>
          </div>
          <div className="software-professional-box-three">
            <FaMoneyBillTrendUp size={40} className="software-icon-code-block" />{" "}
            <div className="software-professional-content">
              <h2>Business Growth & Competitive Edge </h2>
              <ul>
                <li>
                No limitations of off-the-shelf software.
                </li>
                <li>
                Develop applications tailored for global scalability.
                </li>
                <li>
                Stay ahead with evolving technology trends.


                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="software-faq_container">
        <h4 className="software-faq">FAQ's</h4>
        <h2>Got Questions? We've got answers!</h2>
        {/* Faq Component */}
        <SoftwareFaq/>
      </div>
      <div className="software-service-contact">
        <div className="software-service-contact-img">
          <img src={CTA_img} alt="Call to Action"></img>
        </div>
        <div className="software-service-contact-content">
          <h1>Empower Your Business with a Custom Software App </h1>
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
