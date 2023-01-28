import Home from "../pages/Home";
import About from "../pages/About";
import Notfound from "../pages/NotFound";
import LoginForm from "../pages/LoginForm";
import NavCom from "../pages/Navbar";
import Story from "../pages/StoryPage";
import Asessment from "../pages/Asessment";
import SignUp from "../pages/SignUp";
import Complete from "../pages/Complete";
import ContactUs from "../pages/ContactUs";
import Pricing from "../pages/Pricing";
import WelcomeBox from "../pages/WelcomeBox";
import JoinProgram from "../pages/JoinProgram";
import Footer from "../pages/Footer";
import HowItWorks from "../pages/HowItWorks";
import Procrastination from "../pages/Procrastination";
import Conversion from "../pages/Conversion";

const authProtectedRoutes = [
        { path:"/" , exact : true , component: <Home/> },
        { path:"/procrastination-assessment" , exact : true , component: <Procrastination/> },
        { path:"/about" , exact : true , component: <About/> },
        { path:"/contactUs" , exact : true , component: <Footer/> },
        { path:"/join-basic-plan" , exact : true , component: <JoinProgram/> },
        { path:"/join-premium-plan" , exact : true , component: <JoinProgram/> },
        { path:"/story" , exact : true , component: <Story/> },
        { path:"/login" , exact : true , component: <LoginForm/> },
        { path:"/details" , exact : true , component: <SignUp/> },
        { path:"/conversion" , exact : true , component: <Conversion/> },
        { path:"/asessment" , exact : true , component: <Asessment/> },
        { path:"/contactUs" , exact : true , component: <ContactUs/> }, 
        { path:"/complete" , exact : true , component: <Complete/> }, 
        { path:"*" , exact : true , component: <Notfound/> },
];

const publics = [
  // { path:'/login' ,, exact : true , component: <Login,pageId:0 0 }
  // { path:'/register' ,, exact : true , component: <Register,pageId:1 0 },,
];

export { authProtectedRoutes, publics };