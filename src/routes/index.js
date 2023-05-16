import About from "../pages/About";
import Notfound from "../pages/NotFound";
import LoginForm from "../pages/LoginForm";
import Story from "../pages/StoryPage";
import Assessment from "../pages/Assessment";
import SignUp from "../pages/SignUp";
import Complete from "../pages/Complete";
import ContactUs from "../pages/ContactUs";
import JoinProgram from "../pages/JoinProgram";
import Footer from "../components/Footer";
import Procrastination from "../pages/Procrastination";
import Conversion from "../pages/Conversion";
import FreeTrial from "../pages/FreeTrial";

const authProtectedRoutes = [
        { path:"/" , exact : true , component: <SignUp/> },
        { path:"/procrastination-assessment" , exact : true , component: <Procrastination /> },
        { path:"/procrastination-assessment/:refer" , exact : true , component: <Procrastination /> },
        { path:"/about" , exact : true , component: <About /> },
        { path:"/contactUs" , exact : true , component: <Footer /> },
        { path:"/join-basic-plan" , exact : true , component: <JoinProgram /> },
        { path:"/join-premium-plan" , exact : true , component: <JoinProgram /> },
        { path:"/story" , exact : true , component: <Story /> },
        { path:"/login" , exact : true , component: <LoginForm /> },
        { path:"/details" , exact : true , component: <SignUp /> },
        { path:"/conversion" , exact : true , component: <Conversion /> },
        { path:"/assessment" , exact : true , component: <Assessment /> },
        { path:"/contactUs" , exact : true , component: <ContactUs /> }, 
        { path:"/complete" , exact : true , component: <Complete /> }, 
        { path:"/signedup" , exact : true , component: <Complete /> }, 
        { path:"/free-trial" , exact : true , component: <FreeTrial /> }, 
        { path:"*" , exact : true , component: <Notfound /> },
];

const publics = [
  // { path:'/login' ,, exact : true , component: <Login,pageId:0 0 }
  // { path:'/register' ,, exact : true , component: <Register,pageId:1 0 },,
];

export { authProtectedRoutes, publics };