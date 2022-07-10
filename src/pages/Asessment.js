import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counterSlice'


import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ButtonGroup
  } 
  from 'reactstrap'

const Asessment = (props) => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  let n = {count}.count
  let five_quetions = props.data.slice(n, n+5)
  console.log(n)

  const scroll = () => {
    if(n < 5){
      window.scrollTo(0, 0)
    }
  }


	return (
    <>
    {five_quetions.map((e)=>{
     let string = toString(e.n)
      return(
        <div id="asessment-component" key={e.n}>
    <Form id="asessment">

     <FormGroup tag="fieldset">
    <legend id="question">{e.n}. {e.question}
    </legend>
    <FormGroup check className="check-o1.s" id="a">
      <Input
        name="radio1"
        type="radio"
        id={string}
      />
      <Label for={string}>
         {e.a}
      </Label>

    </FormGroup>
     <FormGroup check className="check-o1.s" id="b">
      <Input
        name="radio1"
        type="radio"
        id="bb"
      />
      <Label for="bb">
         {e.b}
      </Label>

    </FormGroup>
     <FormGroup check className="check-o1.s" id="c">
      <Input
        name="radio1"
        type="radio"
        id="cc"
      />
      <Label for="cc">
         {e.c}
      </Label>

    </FormGroup>
     <FormGroup check className="check-o1.s" id="d">
      <Input
        name="radio1"
        type="radio"
        id="dd"
      />
      <Label for="dd">
         {e.d}
      </Label>
    </FormGroup>
   </FormGroup>
      </Form>
    </div>
        )
    })}
    <Button id="back-button" onClick={() => {dispatch(decrement())
      window.scroll(0, 0)}}>
    {"<-back"}</Button>
      <Button id="next-button" onClick={() => {dispatch(increment())
      scroll()}}>
      {n == 1 ? "Submit" : "Next->"}</Button>
    </>
 )
}


export default Asessment