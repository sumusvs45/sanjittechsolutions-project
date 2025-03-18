import React from 'react';
import '../About Us/aboutUs.css'
const AboutUs = () => {
    return (
        <>
        <div className="div">
        <div className="aboutUs-header">
          <div className="aboutUs-border"></div>
          <h2>Who We Are ?</h2>
        </div>
        <div className="about-card">
            <div className="about-left">
            <p>
            At Sanjit Tech Solutions, we transform ideas into powerful digital solutions. Our expert team specializes in <span>Web & App Development, AI, Data Science, SEO, and Digital Marketing</span>, helping businesses grow, adapt, and thrive in the digital age</p>
            .<p>With cutting-edge technology and strategic innovation, we craft high-performance solutions designed for efficiency, scalability, and long-term success. Our goal is to empower businesses with next-gen technology, enabling them to stay ahead in a fast-evolving digital landscape.</p>

            </div>
            <div className="about-right">
                <img src="https://cdn.create.vista.com/api/media/small/250465830/stock-photo-handsome-businessman-suit-pointing-hands-internet-security-illustration-front" className='img-1'/>
                <img src="https://st.depositphotos.com/1071909/2187/i/450/depositphotos_21873999-stock-photo-human-resources-and-crm.jpg" className='img-2'/>

            </div>

        </div>
        </div>
            
        </>
    );
};

export default AboutUs;