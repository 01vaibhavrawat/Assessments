import "./styles/app.scss";

import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/NotFound";
import LoginForm from "./pages/LoginForm";
import NavCom from "./pages/Navbar";
import Story from "./pages/StoryPage";
import Asessment from "./pages/Asessment";
import SignUp from "./pages/SignUp";
import Complete from "./pages/Complete";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import WelcomeBox from "./pages/WelcomeBox";
import Footer from "./pages/Footer";
import HowItWorks from "./pages/HowItWorks";
import Procrastination from "./pages/Procrastination";
import { STORIES } from "./shared/stories.js";
import { QUETIONS } from "./shared/quetions.js";
import { HP } from "./shared/homePageText.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [hp, setHp] = useState(HP);
  const [story, setStory] = useState(STORIES);
  const [quetion, setQuetion] = useState(QUETIONS);
  return (
    <BrowserRouter>
      <NavCom />
      <Routes>
        <Route path="/" element={<Home data={hp} />} />
        <Route path="/procrastination-assessment" element={<Procrastination />} />
        <Route path="/About" element={<About />} />
        <Route path="/Story" element={<Story data={story} />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Details" element={<SignUp />} />
        <Route path="/Asessment" element={<Asessment data={quetion} />} />
        <Route path="/ContactUs" element={<ContactUs />} /> 
        <Route path="/Complete" element={<Complete />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
