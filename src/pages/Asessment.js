import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, array } from "../asessmentSlice";

import { Form, FormGroup, Label, Input, Button, ButtonGroup } from "reactstrap";

const Asessment = (props) => {
  const count = useSelector((state) => state.asessment.count);
  const answers = useSelector((state) => state.asessment.selected_options);
  const signup = useSelector((state) => state.asessment.signup_data);
  const dispatch = useDispatch();
  console.log(signup, `let's go`)

  let n = { count }.count;
  let five_quetions = props.data.slice(n, n + 5);

  const get = () => {
    window.location.href = `http://localhost:8080/process_get?answers=${answers}`;
  };

  const scroll = () => {
    if (n < 5) {
      window.scrollTo(0, 0);
    }
  };

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
                  onClick={() => dispatch(array([1, e.n - 1]))}
                >
                  <Input name="radio1" type="radio" id={e.n} />
                  <Label for={e.n}>{e.a}</Label>
                </FormGroup>
                <FormGroup
                  check
                  className="check-o1.s"
                  id="b"
                  onClick={() => dispatch(array([2, e.n - 1]))}
                >
                  <Input name="radio1" type="radio" id={`${e.n}b`} />
                  <Label for={`${e.n}b`}>{e.b}</Label>
                </FormGroup>
                <FormGroup
                  check
                  className="check-o1.s"
                  id="c"
                  onClick={() => dispatch(array([3, e.n - 1]))}
                >
                  <Input name="radio1" type="radio" id={`${e.n}c`} />
                  <Label for={`${e.n}c`}>{e.c}</Label>
                </FormGroup>
                <FormGroup
                  check
                  className="check-o1.s"
                  id="d"
                  onClick={() => dispatch(array([4, e.n - 1]))}
                >
                  <Input name="radio1" type="radio" id={`${e.n}d`} />
                  <Label for={`${e.n}d`}>{e.d}</Label>
                </FormGroup>

                <FormGroup
                  check
                  className="check-o1.s"
                  id="e"
                  onClick={() => dispatch(array([5, e.n - 1]))}
                >
                  <Input name="radio1" type="radio" id={`${e.n}e`} />
                  <Label for={`${e.n}e`}>{e.e}</Label>
                </FormGroup>
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
      >
        {"<-back"}
      </Button>
      <Button
        id="next-button"
        onClick={() => {
          if (count > 2) {
            dispatch(get());
          }

          dispatch(increment());
          scroll();
        }}
      >
        {n > 2 ? "Submit" : "Next->"}
      </Button>
    </div>
  );
};

export default Asessment;
