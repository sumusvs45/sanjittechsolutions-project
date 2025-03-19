import React from "react";
import "../webservice/WebService.css";
import { FaMobileAlt } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { IoSpeedometer } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { PiPaintBrushFill } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import "../webservice/WebService.css";
import web_icon from "../../../assets/web_hero.png";
import webbg from '../../../assets/web-service-bg.png';
import webbg_lt from '../../../assets/web-service-bg-lt.png'
export default function WebService() {
  return (
    <div className="web_dev">
      <div className="web_dev_hero">
        <div className="web_dev_hero_one">
          <h1 className="web_dev_hero_h1">
            <span> Smart Solutions </span>
            <span> for a </span><br></br>
            <span>Digital World</span>{" "}
          </h1>
          <button type="submit">Let's Build</button>
        </div>
        <div className="web_dev_hero_two">
          <img src={web_icon}></img>
        </div>
      </div>
      <div className="why_box">
        <p className="sub-heading">
          Why Choose Our Website Development Service
        </p>
        <p className="sub-text"> Our Web development Process</p>
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
          <p>Requirement Analysis</p>
          <p> UI/UX Design</p>
          <p>Development</p>
          <p>Testing & Deployment</p>
          <p>Maintainance & Support</p>
        </div>
      </div>
      <div className="properties">Why Our Web Development Stands Out</div>
      <div className="boxes">
      <img  className="webbg-1"src={webbg_lt} alt="image"/>
        <div className="boxes1">
          <div className="box-1">
            <div className="box-icon">
              {" "}
              <BiCodeBlock size={40} />
            </div>
            <p>Custom Website Development</p>
          </div>
          <div className="box-2">
            <div className="box-icon">
              <FaMobileAlt size={40} />
            </div>
            <p>Mobile First Design</p>
          </div>
          <div className="box-3">
            <div className="box-icon">
              <IoSpeedometer size={40} />
            </div>
            <p>Website Optimization</p>
          </div>
        </div>
        <div className="boxes2">
          <div className="box-4">
            <div className="box-icon">
              <PiPaintBrushFill size={40} />
            </div>
            <p>Responsive Design</p>
          </div>
          <div className="box-5">
            <div className="box-icon">
              <SlGraph size={40} />
            </div>
            <p>SEO friendly solutions</p>
          </div>
          <div className="box-6">
            <div className="box-icon">
              <MdOutlineSecurity size={40} />
            </div>
            <p>Secure and Scalable Solutions</p>
          </div>
        </div>
        <img  className="webbg-2"src={webbg} alt="image"/>
      </div>
      <div className="professional">
        <h1>Why a Professional Website is Essential</h1>
        <div className="professinal-boxes">
          <div className="professional-box-one">
            <IoPeopleSharp size={40} />
            <div className="professional-content">
              <h2>Improve Customer Engagement</h2>
              <ul>
                <li>
                  A well-designed website with an intuitive user interface keeps
                  visitors engaged.
                </li>
                <li>
                  Easy navigation and fast loading times encourage users to
                  explore more.
                </li>
                <li>
                  Engaging visuals and interactive elements enhance the overall
                  user experience
                </li>
              </ul>
            </div>
          </div>
          <div className="professional-box-two">
            <FaMoneyBillTrendUp size={40} />{" "}
            <div className="professional-content">
              <h2>Boost Conversion Rates</h2>
              <ul>
                <li>
                  A well-designed website with an intuitive user interface keeps
                  visitors engaged.
                </li>
                <li>
                  Easy navigation and fast loading times encourage users to
                  explore more.
                </li>
                <li>
                  Engaging visuals and interactive elements enhance the overall
                  user experience
                </li>
              </ul>
            </div>
          </div>
          <div className="professional-box-three">
            <SiAdguard size={40} />{" "}
            <div className="professional-content">
              <h2>Increase Brand Trust Credability</h2>
              <ul>
                <li>
                  A well-designed website with an intuitive user interface keeps
                  visitors engaged.
                </li>
                <li>
                  Easy navigation and fast loading times encourage users to
                  explore more.
                </li>
                <li>
                  Engaging visuals and interactive elements enhance the overall
                  user experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>FAQ'S COMPONENT</h1>
      </div>
      <div className="service-contact">
        <div className="service-contact-img">
          <img src="src/cta web development 1.png"></img>
        </div>
        <div className="service-contact-content">
          <h1>Empower Your Business with a Custom Website </h1>
          <p>
            Boost your business with a fast, secure, and scalable website
            tailored to your goals. Delivering a seamless user experience to
            drive higher conversion rates.
          </p>
          <button>Get a Free Quote</button>
        </div>
      </div>
    </div>
  );
}
