import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

import About from './About'
import Story from './StoryPage'

import { STORIES } from './shared/stories.js'


const Home = () => {

	const[story, setStory] = useState(STORIES)

	useEffect(()=>{
		window.scroll(0,0)
	},[])
	return(
		<div>
		<div>Click below button to give the asesment-</div>
		<button>
		<Link to="/asessment">Asessment</Link>
		</button>

		<div id="mission" className="about-box">
		<h3 id="card-title">Our Mission</h3>
		<div className="about_paragraph">
		<Story data= {story} />
		</div>
		</div>

		<About />

		</div>)

}

export default Home