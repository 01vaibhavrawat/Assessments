import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, array } from "../redux/asessmentSlice";
import { useNavigate } from "react-router-dom";
import {  Form,
          FormGroup,
          Label,
          Input,
          Button,
          ButtonGroup 
        } from "reactstrap";
import {data} from "../shared/questions"

const Asessment = (props) => {

  const count = useSelector((state) => state.asessment.count);
  const dispatch = useDispatch();
  const scroll = () => {
    if (n < 14) {
      window.scrollTo(0, 0);
    }
  };

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  let Navigate = useNavigate();
  let n = { count }.count;
  let five_quetions = data.slice(n, n + 5);

  
  return (
    <div>
      {five_quetions.map((e) => {
        return (
          <div id="asessment-component" key={e.n}>
            <Form id="asessment">
              <FormGroup tag="fieldset">
                <legend id="question">
                  {e.n}. {e.question}
                </legend>
                <FormGroup
                  check
                  className="check-o1.s"
                  id="a"
                  onClick={() => dispatch(array([`${e.n} 1`, e.n - 1]))}
                >
                  <Input name="radio1" type="radio" id={e.n} />
                  <Label for={e.n}>{e.a}</Label>
                </FormGroup>
                <FormGroup
                  check
                  className="check-o1.s"
                  id="b"
                  onClick={() => dispatch(array([`${e.n} 2`, e.n - 1]))}
                >
                  <Input name="radio1" type="radio" id={`${e.n}b`} />
                  <Label for={`${e.n}b`}>{e.b}</Label>
                </FormGroup>
                <FormGroup
                  check
                  className="check-o1.s"
                  id="c"
                  onClick={() => dispatch(array([`${e.n} 3`, e.n - 1]))}
                >
                  <Input name="radio1" type="radio" id={`${e.n}c`} />
                  <Label for={`${e.n}c`}>{e.c}</Label>
                </FormGroup>
                <FormGroup
                  check
                  className="check-o1.s"
                  id="d"
                  onClick={() => dispatch(array([`${e.n} 4`, e.n - 1]))}
                >
                  <Input name="radio1" type="radio" id={`${e.n}d`} />
                  <Label for={`${e.n}d`}>{e.d}</Label>
                </FormGroup>
                {console.log(Object.keys(e).length)}
                {Object.keys(e).length > 6 ?   <FormGroup
                    check
                    className="check-o1.s"
                    id="e"
                    onClick={() => dispatch(array([`${e.n} 5`, e.n - 1]))}
                  >
                    <Input name="radio1" type="radio" id={`${e.n}e`} />
                    <Label for={`${e.n}e`}>{e.e}</Label>
                  </FormGroup> : ""}
                </FormGroup>
            </Form>
          </div>
        );
      })}
      <Button
        id="back-button"
        onClick={() => {
          dispatch(decrement());
          window.scroll(0, 0);
        }}
        title="back"
      >
        {"<"}
      </Button>
      <Button
        id="next-button"
        onClick={() => {
          if (count > 14) {
            Navigate("/Details");
          }

          dispatch(increment());
          scroll();
        }}
        title="next"
      >
        >
      </Button>
    </div>
  );
};

export default Asessment;
