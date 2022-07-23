import {
	FormGroup,
	Form,
	Label,
	Input,
	Button
} from 'reactstrap'

const LoginForm = (props) => {


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
  <Button id="login-submit">
    Submit
  </Button>
  <div id="forgot">Forgot password?</div> 
</Form>
</div>
</div>
)
}
	
export default LoginForm