import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/NotFound'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path="*" element={<Notfound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
