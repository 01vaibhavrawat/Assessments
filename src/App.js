import { useLocation, Route, Routes } from 'react-router-dom';
import { authProtectedRoutes } from "./routes";
import { useState, useMemo } from "react";

import "./styles/app.scss";

<<<<<<< Updated upstream
import NavCom from "./components/Navbar";
=======
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/NotFound";
import LoginForm from "./pages/LoginForm";
import NavCom from "./pages/Navbar";
import Story from "./pages/StoryPage";
import Asessment from "./pages/Asessment";
import SignUp from "./pages/SignUp";
import ForgetPass from "./pages/ForgetPassword";
import Complete from "./pages/Complete";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import WelcomeBox from "./pages/WelcomeBox";
import JoinProgram from "./pages/JoinProgram";
import Footer from "./pages/Footer";
import HowItWorks from "./pages/HowItWorks";
import Procrastination from "./pages/Procrastination";
>>>>>>> Stashed changes


function App() {

    const location = useLocation();

  sessionStorage.setItem("token", "token");

  if (sessionStorage.getItem("token")) {

    return (
      <>
      <NavCom />
<<<<<<< Updated upstream
      <Routes location={location}>
              {authProtectedRoutes.map(({ path, component }, i) => {
                return (
                  <Route path={`/${path}`} end element={component} key={i} />
                );
              })}
            </Routes>
            </>
    );
  }
=======
      <Routes>
        <Route path="/" element={<Home data={hp} />} />
        <Route path="/procrastination-assessment" element={<Procrastination data={hp}/>} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<Footer />} />
        <Route path="/join-basic-plan" element={<JoinProgram plan="basic"/>} />
        <Route path="/join-premium-plan" element={<JoinProgram plan="premium"/>} />
        <Route path="/Story" element={<Story data={story} />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Details" element={<SignUp />} />
        <Route path="/ForgetPassword" element={<ForgetPass/>}/>
        <Route path="/Asessment" element={<Asessment data={quetion} />} />
        <Route path="/ContactUs" element={<ContactUs />} /> 
        <Route path="/Complete" element={<Complete />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
>>>>>>> Stashed changes
}

export default App;
