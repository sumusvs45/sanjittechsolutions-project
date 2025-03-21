import React from 'react';
import '../contactUs Page/ContactUsPage.css'
import contact_img from '../../assets/contact.webp' 
const ContactUsPage = () => {
    return (
 <>
<div className='contact_main'>
<div className='contact_hero'>
<div className='contact_hero_one'>
<img src={contact_img} className='hero_png'></img>
</div>
<div className='contact_hero_two'><h1>Contact Us</h1></div>
</div>
<div className='contact_get_in_touch'>
<div className='contact_get_in_touch_one'>
<h1 className='contact_head'>Get In Touch</h1>
<form className='contact_form'>
<input type='text' placeholder='Name'></input><br></br>
<input type='text' placeholder='Phone no'></input><br></br>
<input  placeholder='email'></input><br></br>
<textarea rows={10} cols={30} placeholder='Type your message'></textarea><br></br>
<button type='submit'>Submit</button>
</form>
</div>
<div className='contact_get_in_touch_two'>
<h1>Contact Us</h1>
</div>
</div>
<div className='google-map'>
<div className='map'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.039068687785!2d80.57401407496289!3d16.42284208430909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f1c17beee6fd%3A0x7b865927db48c898!2sSanjit%20Tech%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1742195136241!5m2!1sen!2sin" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
<div className='contact_footer'>
</div>
</div>
            
 </>
    );
};

export default ContactUsPage; 