import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const JoinProgram = () => {

  const text = {
  heading: "Overcome Procrastination Program",
  para: `Do you find yourself delaying or avoiding certain tasks or goals, 
  then criticizing yourself for it? Contrary to common belief, 
  procrastination is not a character flaw or a problem in itself. 
  It is a coping mechanism can be unlearned and reprogrammed. In this program, 
  we present strategies and tools that can help anyone to overcome procrastination, 
  improve your work quality, and free up guilt-free time to play and relax.`,
  heading1: "What does this program consist of?",
  para1:`Strategies to understand and deal with the role technology plays in procrastination today, 
  this program offers a comprehensive plan to help readers lower their stress and increase their time to enjoy guilt-free play. 
  These techniques will help any busy person start tasks sooner and accomplish them more quickly, 
  without the anxiety brought on by the negative habits of procrastination and perfectionism.
`,
};

  return (
    <div id="home">
      <div className="intro">
        <img id="procrastionation_img" src={require('../images/program.jpg')} />
        <h1 className="title">{text.heading}</h1>
        <p className="story">{text.para}</p>

        <h1 className="second_h">{text.heading1}</h1>
        <p className="story">{text.para1}</p>
      </div>
    </div>
  );
};

export default JoinProgram;