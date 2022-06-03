import './App.css';
import './app.scss';
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/NotFound'
import Form from './pages/Form'
import { STORIES } from './pages/shared/stories.js'
import Story from './pages/StoryPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const[kahani, setStory] = useState(STORIES)
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Story' element={<Story data= {kahani}/>} />
    <Route path='/Form' element={<Form />} />
    <Route path="*" element={<Notfound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
