import React, { useState } from "react";
import { Row, Col, Button, Input } from "reactstrap";
import emailjs from "emailjs-com";
import FreeTrial from "./FreeTrial";

const JoinProgram = (plan = { plan: "free" }) => {
  //because it has to be named message for the emailjs
  const [text, setText] = useState("");
  const [readMore, setReadMore] = useState(false);

  const handleSubmit = () => {
    const message = `${text}, ${plan.plan}`;
    const templateParams = {
      message,
    };
    emailjs
      .send(
        "service_wsqyd68",
        "template_aw5wtxm",
        templateParams,
        "igzjQsnj1cF-26O7F"
      )
      .then((response) => {
        console.log("res", response);
        window.alert(
          "Thanks for joining, we will send you an email with the link to your program."
        );
      })
      .then((error) => {
        console.log("err", error);
      });
  };

  const data = {
    heading: "Overcome Procrastination Program",
    para: `Do you find yourself delaying or avoiding certain tasks or goals, 
  then criticizing yourself for it? Contrary to common belief, 
  procrastination is not a character flaw or a problem in itself. 
  It is a coping mechanism can be unlearned and reprogrammed. In this program, 
  we present strategies and tools that can help anyone to overcome procrastination, 
  improve your work quality, and free up guilt-free time to play and relax.`,
    heading1: "What does this program consist of?",
    para1: `Strategies to understand and deal with the role technology plays in procrastination today, 
  this program offers a comprehensive plan to help readers lower their stress and increase their time to enjoy guilt-free play. 
  These techniques will help any busy person start tasks sooner and accomplish them more quickly, 
  without the anxiety brought on by the negative habits of procrastination and perfectionism.
  `,
    email:
      "Register for the trial :",
  };

  return (
    <div id="home">
      <div className="intro">
        <img id="procrastionation_img" src={require("../images/program.jpg")} />
        <h3 style={{fontSize:"1.5rem"}} className="title">{data.heading}</h3>
        <p className="story">{data.para}</p>

        <h3 style={{fontSize:"1.5rem"}} className="second_h">{data.heading1}</h3>
        <p className="story" style={{marginBottom:"1px"}}>{data.para1}</p>
      
        {!readMore && <span className="read-more-link" onClick={()=> setReadMore(true)}>Read more</span>}
        <br></br>

      { readMore && <> <p className="story">
          Whether you are a professional, an entrepreneur, a middle manager, a
          writer, or a student who wants to overcome problems with
          procrastination—or if you simply want to be more efficient in
          completing complex and challenging projects—this program will help you
          get results. If you are organized in your larger work projects, but
          find that the small, essential tasks of everyday living get ignored,
          Overcome Procrastination will help you set priorities for, start,
          and complete these tasks as well. If you are a professional whose busy
          schedule doesn't allow for leisure time, this strategic program will
          legitimize guilt-free play while it improves the quality and
          efficiency of your work. If you suffer from extreme panic and block
          when confronted by pressure to perform, this program will show you how
          to overcome the initial terror so you can get started. It will teach
          you to use empowering inner dialogue that leads to responsible choices
          while avoiding ambivalent statements such as "should" and "have to."
        </p>
        <p className="story">
          The typical procrastinator completes most assignments on time, but the
          pressure of doing work at the last minute causes unnecessary anxiety
          and diminishes the quality of the end result. Procrastination is a
          problem that we all have in some areas of our lives, be it balancing
          the budget, filing a complicated legal brief, or painting the spare
          bedroom—anything we have delayed in favor of more pressing or
          pleasurable pursuits. We all have tasks and goals we attempt to
          delay—or totally escape.
        </p>
        <p className="story">
          Overcome Procrastination is a strategic system—that is, it goes
          beyond tactical advice and presents a plan based on the dynamics of
          procrastination and motivation. The program shows you how to shift
          gears into a higher level of functioning so you can go faster, and
          more efficiently. It shows you how scheduling more guilt-free play in
          your life can attack the underlying causes of procrastination by
          lowering resentment toward work, making it easier to start working,
          improving the quality of work, and stirring motivation. With this
          strategy, you will be able to work virtually free of stress and enjoy
          your leisure time free of guilt. This program will provide you with
          powerful tools for overcome procrastination.
        </p>
        <ol className="story">
        <li>
  <strong>Creating safety:</strong> Put a psychological safety net under your high-wire act to lessen your fear of failure and learn how to bounce back from mistakes with renewed purpose.
</li>
<li>
  <strong>Reprogramming negative attitudes through positive self-talk:</strong> Identify your negative messages to yourself and develop positive phrasing that directs your energy toward task-oriented thoughts and rapid solutions.
</li>
<li>
  <strong>Using the symptom to trigger the cure:</strong> Use old habits to evoke and strengthen the formation of new, positive habits.
</li>
<li>
  <strong>Guilt-free play:</strong> Strategically schedule your leisure time to shift the pressure from work to play and create a subconscious urge to return to work.
</li>
<li>
  <strong>Three-dimensional thinking and the reverse calendar:</strong> Control the terror of being overwhelmed by important tasks by creating a step-by-step calendar of your path to achievement, with adequate time to rest and fully appreciate your accomplishment.
</li>
<li>
  <strong>Making worry work for you:</strong> Develop alternative plans for achieving your goals and strengthen confidence in your ability to face the worst that could happen.
</li>
<li>
  <strong>The Unschedule:</strong> Schedule guilt-free play, visualize the amount of time available, and track quality time on projects to see how much you've accomplished.
</li>
<li>
  <strong>Setting realistic goals:</strong> Clear your mind of guilt-producing goals that cannot be worked on in the present and direct your energies toward the few worthwhile goals that deserve your attention now.
</li>
<li>
  <strong>Working in the flow state:</strong> Move beyond stress and low motivation to a state of focused energy, interest, and concentration.
</li>

        </ol> </>}

        <br></br>

        <strong  style={{fontSize:"1rem"}}>{data.email}</strong>
        
         <FreeTrial />
        {/* <Row id="email-submit">
          <Col>
            <Input
              id="exampleEmail"
              name="email"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="type email here"
              type="email"
            />
          </Col>
          <Col>
            <Button onClick={() => handleSubmit()}>Submit</Button>
          </Col>
        </Row> */}
      </div>
    </div>
  );
};

export default JoinProgram;
