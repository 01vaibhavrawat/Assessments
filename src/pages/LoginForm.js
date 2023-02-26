import {
	FormGroup,
	Form,
	Label,
	Input,
	Button
} from 'reactstrap';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {

  useEffect(() => {
    window.scroll(0, 0);
  }, []);


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
      placeholder="Email"
      type="email"
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
      placeholder="Password"
      type="password"
    />
  </FormGroup>
  {' '}
  <Button id="login-submit" onClick={(event)=>{
    event.preventDefault();
    setTimeout(() => window.alert(`couldn't login`), 3000);
  }}>
    Submit
  </Button>
  <div id="forgot"><Link to="/forgot-password">Forgot password?</Link></div> 
</Form>
</div>
</div>
)
}
	
export default LoginForm;