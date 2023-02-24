import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import {data} from "../shared/questions";
import useLocalStorage from "../shared/useLocalStorage";

const Asessment = () => {

  /*const count = useSelector((state) => state.asessment.count);*/
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  React.useEffect(() => {
    window.scroll(0, 0);

    return ()=>{
      localStorage.setItem("answers", JSON.stringify(answers));
    }
  }, []);

  const [answers, setAnswers] = useState({})

  const handleSelect = (questionN, option)=>{
    let temp = {...answers}
    temp[questionN] = option;
   setAnswers(temp);
  };

  const handleNext = ()=>{
    window.scrollTo(0, 0);
      Navigate("/details");
  };
  const handleBack = (e, option)=>{
    window.scrollTo(0, 0);
  };

const memoized = React.useMemo(()=>{
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
  return (
    <div>
      {memoized}

      <Button
        id="back-button"
        onClick={handleBack}
        title="back"
      >
        {"<"}
      </Button>
      <Button
        id="next-button"
        onClick={handleNext}
        title="next"
      >
        {">"}
      </Button>
    </div>
  );
};

export default Asessment;
