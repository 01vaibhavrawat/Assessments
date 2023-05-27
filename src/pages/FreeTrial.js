import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";
import {postAssessmentAction, resetAssessmentAction, postUserAction} from "../store/actions";
import Loader from "../components/Loader";
import {useLocation} from "react-router-dom";

const SignUp = () => {

  let Navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState(
    {
      fullname: "",
      email: "",
      coutry: "",
      dob: "",
      pronouns: ""
    });

  const [assessment, setAssessment] = useState({
    answers: "",
    email: "",
  })

  const { assessmentLoading, success } = useSelector((state)=> state.Assessment);

  const { userLoading } = useSelector((state)=> state.Category);

  const location = useLocation();
  
  const handleChange = (event) => {
     setForm((o)=>{
     return(
      {...o, [event.target.name]: event.target.value}
     ) 
     } )
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
    if(window.localStorage.getItem("rfr")){
    setForm((r)=>({...r, refer: window.localStorage.getItem("rfr")}))
  }
    if(window.localStorage.getItem("answers")){
    setAssessment((r)=>({...assessment, answers: window.localStorage.getItem("answers")}))
  }
  }, []);

  useEffect(()=>{
        if(success && (location.pathname !== "/details")) {
        Navigate("/signedup");
        }
    if(success && (location.pathname == "/details")){
        Navigate("/complete");}
        return(()=>{
          dispatch(resetAssessmentAction())
        })
  }, [success])
 // will get this from uselocalstorage

  const validation = () => {
     return String(form.email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  const handleSubmit = () => {

  if(validation()){

    setAssessment((r)=>({...assessment, email: form.email}))
  
  if(window.localStorage.getItem("answers")){
      dispatch(postAssessmentAction(assessment));
  }
  
  dispatch(postUserAction(form));
  
      const message = `answers: ${JSON.stringify(assessment)} ||||| signup: ${JSON.stringify(form)}`
              const templateParams = {
                  message
              };
              //need to put credentials in environment variables
              emailjs.send('service_wsqyd68', 'template_aw5wtxm', templateParams, 'igzjQsnj1cF-26O7F')
                  .then(response => {
                  })
                  .then(error => {
                    if(error){
                    window.alert('Something went wrong, please try again.');
                  }
                });

                }else{
                  window.alert("Please fill all the fields correctly.");
                }
  }
    

  return (

    (assessmentLoading || userLoading) ?  <Loader /> : 

    <div id="login-body" style={{height:"100%"}}>
      <div id="login-box" style={{margin:"2% 15%"}}>  {/* for join program page */}
        <Form inline id="login-form">
          <FormGroup>
            <Label for="exampleEmail" hidden></Label>
            <Input
              id="name"
              name='fullname'
              placeholder="Name"
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
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="exampleEmail" hidden>
              Phone Number
            </Label>
            <Input
              id="exampleNumber"
              name="number"
              placeholder="Phone Number"
              type="number"
              onChange={handleChange}
              required
            />
          </FormGroup>{" "}
            <Button id="login-submit" onClick={()=> {
              const arr = Object.keys(form)
              for(let x of arr){
                if(form[x] == ""){
                }
              }
              if(false){
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
