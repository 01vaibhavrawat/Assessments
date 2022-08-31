import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";

import About from "./About";
import Story from "./StoryPage";

import { STORIES } from "../shared/stories.js";

const Home = (props) => {
  const [story, setStory] = useState(STORIES);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="home">
      <div className="intro">
        <h1 className="title">{props.data.heading}</h1>
        <p className="story">{props.data.para}</p>

        <h1 className="second_h">{props.data.heading1}</h1>
        <p className="story">{props.data.para1}</p>

        <h1 className="second_h">{props.data.heading2}</h1>
        <p className="story">{props.data.para2}</p>

        <Link to="/signup">
          <Button color="primary" id="start-assessment-button">
            Start the Asessment
          </Button>
        </Link>
      </div>

      <div className="home_container">
        <Story data={story} />
      </div>
      <About />
    </div>
  );
};

export default Home;
