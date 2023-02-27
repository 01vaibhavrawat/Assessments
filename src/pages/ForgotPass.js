import {
	FormGroup,
	Form,
	Label,
	Input,
	Button
} from 'reactstrap';
import { useEffect, useState } from 'react';


function ForgotPass(){

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [email, setEmail] = useState("");
  const handleClick  = () => {
    setEmail(email)
  }

  const sendCode = () => {
    setpass(<SetPassword/>) 
  }
  
  const VerifyEmail = () => {
    return(
      <div id="login-body">
        <div id="login-box">
        <Form inline id="login-form">
        <FormGroup>
          <Label
            for="Email"
            hidden
          >
            Email
          </Label>
          <Input
            id="Email"
            name="email"
            placeholder="Email"
            onChange={handleClick}
            type="email"
            title='email required'
            required
          />
        </FormGroup>
        {' '}
        <Button 
        id="login-submit" 
        onClick={sendCode}
        type="submit"
        >
          Next
        </Button>
        </Form>
      </div>
    </div>
    );
  }

  const SetPassword = () => {
    return(
      <div id="login-body">
        <div id="login-box">
        <Form inline id="login-form">
        <FormGroup>
          <Label
            for="Password"
            hidden
          >
            Password
          </Label>
          <Input
            id="Password"
            name="VerifyCode"
            placeholder="Code"
            type="number"
            title='Code send to your email'
            required
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label
            for="confirmPassword"
            hidden
          >
            Password
          </Label>
          <Input
            id="confirmPassword"
            name="password"
            placeholder="New Password"
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label
            for="examplePassword"
            hidden
          >
            Password
          </Label>
          <Input
            id="examplePassword"
            name="confirm_password"
            placeholder="Confirm Password"
            type="confirm_password"
            title='Confirm your password'
            required
          />
        </FormGroup>
        {' '}
        <Button 
          id="login-submit" 
          type="submit"
        >
          Submit
        </Button>
        </Form>
      </div>
    </div>
    );
  }

 
  const [verify, setpass] = useState(<VerifyEmail/>);

  return(
    <>
      {verify}
    </>
  );
}
	
export default ForgotPass;