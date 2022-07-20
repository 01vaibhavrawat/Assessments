import './App.css';
import './app.scss';

import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/NotFound'
import LoginForm from './pages/LoginForm'
import NavCom from './pages/Navbar'
import Story from './pages/StoryPage'
import Asessment from './pages/Asessment'

import { STORIES } from './pages/shared/stories.js'
import { QUETIONS } from './pages/shared/quetions.js'


import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const[story, setStory] = useState(STORIES)
  const[quetion, setQuetion] = useState(QUETIONS)
  return (
    <BrowserRouter>
    <NavCom />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Story' element={<Story data= {story}/>} />
    <Route path='/Login' element={<LoginForm />} />
    <Route path='/Asessment' element={<Asessment data={quetion} />} />
    <Route path="*" element={<Notfound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
