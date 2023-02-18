  import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { STORIES } from "../shared/stories.js";

import WelcomeBox from "../components/WelcomeBox";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

import Testimonials from "../components/Testimonials";

const Home = (props) => {

  const [story, setStory] = useState(STORIES);

  return (
      <React.Fragment>
      <WelcomeBox />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
      </React.Fragment>
  );
};

export default Home;