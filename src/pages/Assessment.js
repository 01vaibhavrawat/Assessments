import React from "react";
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
  }, []);

  // 01 is the assessment id to prevent from possible future coflicts with other assessments
  const [currentPart01, setCurrentPart01] = useLocalStorage("currentPart01", 0);
  const [answers01, setAnswers01] = useLocalStorage();

  React.useEffect(()=>{
    if(!answers01){
      setAnswers01([]);
    }
  })

  const handleSelect = (questionN, option)=>{
    let temp = {...answers01}
    temp[questionN] = option;
   setAnswers01(temp);
  };
  const handleNext = ()=>{
    window.scrollTo(0, 0);
    if(currentPart01 < 13){
      setCurrentPart01(p => p += 5);
    }else{
      Navigate("/details");
    }
  };
  const handleBack = (e, option)=>{
    window.scrollTo(0, 0);
    if(currentPart01 > 3){
      setCurrentPart01(p => p -= 5);
    }
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
                  <Input type="radio" name="radio1" checked={answers01[i+""] == j+""} />
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
}, [data])
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
