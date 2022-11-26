import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Button, Input } from "reactstrap";
import emailjs from 'emailjs-com';

const JoinProgram = () => {

  //because it has to be named message for the emaailjs
  const [message, setMessage] = React.useState('');

  const handleSubmit = () => {
      const templateParams = {
                message
            };
      emailjs.send('service_wsqyd68', 'template_aw5wtxm', templateParams, 'igzjQsnj1cF-26O7F')
                .then(response => {console.log('res', response)
                                   window.alert('Thanks for joining, we will send you an email with the link to your program.')
                                  })
                .then(error => {console.log('err', error)
                                  });
  }

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
  without the anxiety brought on by the negative habits of procrastination and perfectionism.`,
  email: 'Join the program by submitting the email, you used for the assessment'
};

  return (
    <div id="home">
      <div className="intro">
        <img id="procrastionation_img" src={require('../images/program.jpg')} />
        <h1 className="title">{text.heading}</h1>
        <p className="story">{text.para}</p>

        <h1 className="second_h">{text.heading1}</h1>
        <p className="story">{text.para1}</p>

        <h1 className="second_h">{text.email}</h1>
        <Row id="email-submit">
        <Col>
        <Input
          id="exampleEmail"
          name="email"
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
          placeholder="type email here"
          type="email"
        />
        </Col>
        <Col>
        <Button onClick={()=>handleSubmit()}>Submit</Button>
        </Col>
        </Row>
      </div>
    </div>
  );
};

export default JoinProgram;