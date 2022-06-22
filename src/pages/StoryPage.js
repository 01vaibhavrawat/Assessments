import {useState} from 'react'
import {createState, combineReducers, applyMiddleware} from "redux"

import pfp from './photos/shivalika.jpg'

const Story = (props) => {

	const[n, setN] = useState(1)
	return(
		<div id="main">
		<div id="header">
		<img id="pfp" src={pfp} alt="profile photo"/>

		<div id="pfp-text">
		<p id="pfp-text-name">{props.data[n].name}</p>
		<p id="date">{props.data[n].date} <button>audio</button></p>
		</div>
		</div>

		<h1 id="title" data-selectable-paragraph>{props.data[n].title}</h1>

		<p className="text">{props.data[n].story}</p>

		<button onClick={()=> n=1 ? setN(0) : setN(1)}>change</button>
		</div>
		)
}


export default Story