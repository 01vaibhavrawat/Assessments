import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup_data } from "../redux/asessmentSlice";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {

  let navigate = useNavigate();

  const answers = useSelector((state) => state.asessment.selected_options);
  const [form, setForm] = useState(['', '', '', '', '']);
  
  const handleChange = (event) => {
      form[event.target.name] = event.target.value;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    const message = `answers: ${answers} ||||| signup: ${form}, influencer1`
            const templateParams = {
                message
            };

            emailjs.send('service_wsqyd68', 'template_aw5wtxm', templateParams, 'igzjQsnj1cF-26O7F')
                .then(response => {
                  console.log('res', response);
                  if(response.status == 200){
                  navigate('/Complete')
                }
                })
                .then(error => {
                  console.log('err', error);
                  if(error){
                  window.alert('Something went wrong, please try again.');
                }
              });
  }
    

  return (
    <div id="login-body">
      <div id="login-box">
        <Form inline id="login-form">
          <FormGroup>
            <Label for="exampleEmail" hidden></Label>
            <Input
              id="name"
              name='0'
              placeholder="Full Name"
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="1"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="exampleEmail" hidden></Label>
            <Input
              id="country"
              name="2"
              placeholder="Country Name"
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="exampleDate">Date of Birth</Label>
            <Input
              type="date"
              name="3"
              id="exampleDate"
              placeholder="date placeholder"
              onChange={handleChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="exampleSelect">What are your pronouns?</Label>
            <Input type="select" name="4" id="exampleSelect" onChange={handleChange} required>
              <option>Click to select</option>
              <option>She/her</option>
              <option>He/him</option>
              <option>They/them</option>
            </Input>
          </FormGroup>{" "}
            <Button id="login-submit" onClick={()=> {
              for(let x of form){
                if(x == ""){
                  var stop = true;
                }
              }
              if(stop){
              window.alert('Please make sure all fields are filled in correctly.')
              }else{
              handleSubmit();
              }
            }}
              >Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
