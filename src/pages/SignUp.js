import {
	FormGroup,
	Form,
	Label,
	Input,
	Button
} from 'reactstrap'
import {Link} from 'react-router-dom'

const SignUp = (props) => {


return(
	<div id="login-body">
	<div id="login-box">

	<Form inline id="login-form">
  <FormGroup>
    <Label
      for="exampleEmail"
      hidden
    >
    </Label>
    <Input
      id="name"
      name="name"
      placeholder="Full Name"
      type="text"
      required
    />
  </FormGroup>
  {' '}
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
      required
    />
  </FormGroup>
  {' '}
   <FormGroup>
    <Label
      for="exampleEmail"
      hidden
    >
    </Label>
    <Input
      id="country"
      name="country"
      placeholder="Country Name"
      type="text"
      required
    />
  </FormGroup>
  {' '} 
  <FormGroup>
          <Label for="exampleDate">Date of Birth</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" required />
        </FormGroup>
  {' '}
   <FormGroup>
          <Label for="exampleSelect">What are your pronouns?</Label>
          <Input type="select" name="select" id="exampleSelect" required>
            <option>She/her</option>
            <option>He/him</option>
            <option>They/them</option>
            <option>I prefer not to say</option>
          </Input>
        </FormGroup>
  {' '}
  <Link to="/asessment">
  <Button id="login-submit">
    Next
  </Button>
  </Link>
</Form>
</div>
</div>
)
}
	
export default SignUp