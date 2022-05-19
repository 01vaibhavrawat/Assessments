import {useEffect} from 'react'
const About = () => {
	useEffect(()=>{
		window.scroll(0,0)
	},[])

	const others = {
		a : "yes",
		b : "no"
	}
	return(
		<div>
		<p>Hello World! soon as you see the text reply</p>

			{others.b ? <p>hi {others.b}</p> : null}

		<p>hi</p>

		<p>hi</p>


		<p>hi</p>

		<p>hi</p>

		<p>hi</p>

		<p>hi</p>


		<p>hi</p>

		<p>hi</p>


		<p>hi</p>

		<p>hi</p>


		<p>hi</p>

		<p>hi</p>


		<p>hi</p>

		<p>hi</p>


		<p>hi</p>

		<p>hi</p>

		<p>hi</p>


		<p>hi</p>

		<p>hi</p>

		<p>hi</p>


		<p>hi</p>

		<p>hi</p>

		<p>hi</p>


		<p>hi</p>

		<p>hi</p>

		<p>hi</p>


		<p>hi</p></div>)
}

export default About