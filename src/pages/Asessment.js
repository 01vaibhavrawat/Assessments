import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counterSlice'


import {
  Form,
  FormGroup,
  Label,
  Input,
  Button} 
  from 'reactstrap'

const Asessment = (props) => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  console.log({count}, "from asessment component")
  const n = 1

	return (
    <div id="asessment-component">
    <h1>Asessment-</h1>
    <Form id="asessment">

     <FormGroup tag="fieldset">
    <legend>
       {count}. {props.data[n].question}
    </legend>
    <FormGroup check className="check-o1.s" id="a">
      <Input
        name="radio1"
        type="radio"
        id="aa"
      />
      <Label for="aa">
         {props.data[n].a}
      </Label>

    </FormGroup>
     <FormGroup check className="check-o1.s" id="b">
      <Input
        name="radio1"
        type="radio"
        id="bb"
      />
      <Label for="bb">
         {props.data[n].b}
      </Label>

    </FormGroup>
     <FormGroup check className="check-o1.s" id="c">
      <Input
        name="radio1"
        type="radio"
        id="cc"
      />
      <Label for="cc">
         {props.data[n].c}
      </Label>

    </FormGroup>
     <FormGroup check className="check-o1.s" id="a">
      <Input
        name="radio1"
        type="radio"
        id="dd"
      />
      <Label for="dd">
         {props.data[n].d}
      </Label>
    </FormGroup>
   </FormGroup>
      </Form>
      <Button id="back-button" onClick={() => dispatch(increment())}>{"<-back"}</Button>
      </div>
 )
}


export default Asessment