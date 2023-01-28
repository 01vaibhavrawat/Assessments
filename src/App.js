import { useLocation, Route, Routes } from 'react-router-dom';
import { authProtectedRoutes } from "./routes";
import { useState, useMemo } from "react";

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
import JoinProgram from "./pages/JoinProgram";
import Footer from "./pages/Footer";
import HowItWorks from "./pages/HowItWorks";
import Procrastination from "./pages/Procrastination";
import Conversion from "./pages/Conversion";


function App() {

    const location = useLocation();

  sessionStorage.setItem("token", "token");

  if (sessionStorage.getItem("token")) {

    return (
      <>
      <NavCom />
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
}

export default App;
