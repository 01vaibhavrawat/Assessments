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
		<div id="home">

		<div>Click below button to give the asesment-</div>
		<button>
		<Link to="/asessment">Asessment</Link>
		</button>

		<div className="home_container">
		<Story data= {story} />
		</div>

		<About />

		</div>)

}

export default Home