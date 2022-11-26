import whatsapp from "../images/whatsapp.png";
import email from "../images/email.png";
import { useEffect } from 'react';

const ContactUs = () => {
	
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

	return(
		<div id="contactus-body">
		<div id="contactus">
			<br />
			<h1 className="title">We'd Love to Hear From You</h1>
			<p className="story">Whether you are curious about us or our work, we're ready to answer any and all questions.</p>
			<br />
			<img className="contactIconsa" src={whatsapp} alt="whatsapp icon" />
			<p className="contactDetails">+91 7505645311</p>
			<br /> <br /> <br />
			<img className="contactIconsb" src={email} alt="email icon" />
			<p className="contactDetails"> bobby.projecttherapy@gmail.com</p>
			<br />
			<br/>
			</div>
			</div>
		)
}
export default ContactUs;