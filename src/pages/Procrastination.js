import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";

const Procrastination = () => {

  const data = {
      heading: "Test & Self-Assessment For Procrastination",
      para: "Why do I procrastinate? This quiz is to help determine the underlying cause of your procrastination problems.",
      heading1: "What Does This Test Consist Of?",
      para1:
        "Twenty questions that relate to common thoughts and behaviors experienced by people struggling with procrastination.",
      heading2: "What after this assessment?",
      para2:
        "Our team will contact you to discuss your reports, and to guide you through the process of overcoming procrastination.",
};

  return (
    <div id="home">
      <div className="intro">
        <img id="procrastionation_img" src={require('../images/procrastination.png')} />
        <h1 className="title">{data.heading}</h1>
        <p className="story">{data.para}</p>

        <h1 className="second_h">{data.heading1}</h1>
        <p className="story">{data.para1}</p>

        <h1 className="second_h">{data.heading2}</h1>
        <p className="story">{data.para2}</p>

        <Link to="/asessment">
          <Button color="primary" id="start-assessment-button">
            Start the Asessment
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Procrastination;