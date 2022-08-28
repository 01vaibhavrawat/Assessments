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

		<div  className="intro">
		<h1 className="title">Obsessive Compulsive Disorder (OCD) Test & Self-Assessment</h1>

		<p className="story">Do I have OCD? Use this quiz to help determine if you might need to consult a mental health professional for diagnosis and treatment of Obsessive-Compulsive Disorder.</p>
		<h1 className="title">Who Is This Obsessive Compulsive Disorder Quiz For?</h1>

		<p className="story">Below is a list of eight questions designed for people who are experiencing anxiety-inducing thoughts or repetitive behaviors they believe to be uncontrollable. The questions relate to life experiences common among people who have been diagnosed with obsessive compulsive disorder (OCD).

Please read each question carefully, and indicate how often you have experienced the same or similar challenges in the past few months.</p>
		
		</div>

		<div>
		<button>
		<Link to="/asessment">Asessment</Link>
		</button>
		</div>

		<div className="home_container">
		<Story data= {story} />
		</div><About /></div>

		)

}

export default Home