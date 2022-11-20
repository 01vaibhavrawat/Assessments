  import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { STORIES } from "../shared/stories.js";

import WelcomeBox from "./WelcomeBox";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Footer from "./Footer";

const Home = (props) => {

  const [story, setStory] = useState(STORIES);

  return (
      <React.Fragment>
      <WelcomeBox />
      <HowItWorks />
      <Pricing />
      <Footer />
      </React.Fragment>
  );
};

export default Home;