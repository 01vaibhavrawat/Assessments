import {
	FormGroup,
	Form,
	Label,
	Input,
	Button
} from 'reactstrap';
import { useState } from 'react';


export default function ForgetPass() {

  const VerifyEmail = () => {
    return(
      <div id="login-body">
        <div id="login-box">
          <Form inline id="login-form">
            <FormGroup>
              <Label
                  for="exampleEmail"
                  hidden
                >
                  Email
                </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Enter your email"
                type="email"
                title='Email required'
                required
              />
              </FormGroup>
              {' '}
              
              <Button id="login-submit" 
                onClick={clickHandler}
                type="submit"
              >
                Send
              </Button>
            </Form>
        </div>
      </div>
    );
  }

  const ResetPass = () => {
    return(
      <div id="login-body">
        <div id="login-box">
          <Form inline id="login-form">
            <FormGroup>
                <Label
                  for="verifyCode"
                  hidden
                >
                  Code
                </Label>
                <Input
                  id="verifyCode"
                  name="verifyCode"
                  placeholder="Verify Code"
                  type="code"
                  title='Verify code required'
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
              name="password"
              placeholder="Confirm Password"
              type="password"
              title='Confirm password required'
              required
            />
          </FormGroup>
          {' '}
          <Button 
            id="login-submit" 
            onClick={console.log()}
            type="submit"
          >
            Next
          </Button>
        </Form>
      </div>
    </div>
    );
  }

   const clickHandler = () =>{
    setPass(<ResetPass/>);
  }

  const [verifyEmail, setPass] = useState(<VerifyEmail/>);

  return(
    <>
      {verifyEmail}
    </>
  );

}