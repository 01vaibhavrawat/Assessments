import whatsapp from "../images/whatsapp.png";
import email from "../images/email.png";

const ContactUs = () => {
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
			<p className="contactDetails"> example@email.com</p>
			<br />
			<br/>
			</div>
			</div>
		)
}
export default ContactUs;