import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { data } from "../shared/questions";
import emailjs from "emailjs-com";
import Loader from "../components/Loader";

const Assessment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { assessmentLoading, success } = useSelector(
    (state) => state.Assessment
  );

  const [answers, setAnswers] = useState({});

  const handleSelect = (questionN, option) => {
    let temp = { ...answers };
    temp[questionN] = option;
    setAnswers(temp);
  };

  const handleNext = () => {
    const message = `answers: ${JSON.stringify(answers)}`;
    const templateParams = {
      message,
    };
    // need to put credentials in environment variables
    emailjs
      .send(
        "service_wsqyd68",
        "template_aw5wtxm",
        templateParams,
        "igzjQsnj1cF-26O7F"
      )
      .then((response) => {})
      .then((error) => {
        if (error) {
          window.alert("Something went wrong, please try again.");
        }
      });
    navigate("/complete");
  };

  const handleBack = (e, option) => {
    window.scrollTo(0, 0);
  };

  const memoized = React.useMemo(() => {
    return (data && data.map((question, i) => {
        return (
          <div id="asessment-component" key={i}>
            <Form id="asessment">
              <FormGroup tag="fieldset">
                <legend id="question">
                  {question.n}. {question.question}
                </legend>
                {question.options && question.options.map((option, j)=>{
                  return(
                <FormGroup
                  check
                  className="check-o1.s"
                  id={"o"+j}
                  onClick={()=>handleSelect(i+"", j+"")}
                >
                  <Label name="radio1" type="radio" check>
                  <Input type="radio" name="radio1" checked={answers[i+""] == j+""} />
                  {option}
                  </Label>
                </FormGroup>
                  )
                })}
                </FormGroup>
            </Form>
          </div>
        );
      }))
}, [data, answers])

  useEffect(() => {
    if (success) {
      navigate("/complete");
    }
  }, [success]);

  useEffect(() => {
    window.scroll(0, 0);

    return () => {
      localStorage.setItem("answers", JSON.stringify(answers));
    };
  }, []);

  return (
    <div>
      {assessmentLoading ? <Loader /> : memoized}

      <Button
        id="back-button"
        onClick={handleBack}
        title="back"
      >
        {"<"}
      </Button>
      <Button id="next-button" onClick={handleNext} title="next">
        Submit
      </Button>
    </div>
  );
};

export default Assessment;
