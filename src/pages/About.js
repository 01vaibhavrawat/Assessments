import {useEffect} from 'react'
const About = (props) => {
	useEffect(()=>{
		window.scroll(0,0)
	},[])

	const others = {
		a : "yes",
		b : "no"
	}

	console.log(props.food)
	return(
		<div>
		<p>Hello World! soon as you see the text reply</p>

			{others.b ? <p>hi {others.b}</p> : null}

			</div>)
}

export default About