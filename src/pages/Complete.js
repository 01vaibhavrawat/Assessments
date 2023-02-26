import {useLocation} from "react-router-dom";

const Complete = () => {
	const data = [
			"Thank you for joining! We appreciate your interest and look forward to connecting with you soon. Our team will be in touch shortly to discuss next steps.",
			"Thank you for submitting your assessment. We have received it successfully and will process it promptly. You can expect to receive an email with the results within the next 24 hours. If you have any questions or concerns in the meantime, please don't hesitate to reach out to us."
		]

	const path = useLocation();

	return(
			<p id="complete"> {path.pathname == "/complete" ? data[1] : data[0]}</p>
		)
}

export default Complete;