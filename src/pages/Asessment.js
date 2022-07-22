import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, array } from '../asessmentSlice'


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

  const count = useSelector((state) => state.asessment.count)
  console.log(count, "count")
  const dispatch = useDispatch()

  let n = {count}.count
  console.log(n)
  let five_quetions = props.data.slice(n, n+5)

  const scroll = () => {
    if(n < 5){
      window.scrollTo(0, 0)
    }
  }



	return (
    <div>
    {five_quetions.map((e)=>{
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
        id= {e.n}
      />
      <Label for={e.n} >
         {e.a}
      </Label>

    </FormGroup>
     <FormGroup check className="check-o1.s" id="b" onClick={()=> dispatch(array("b"))}>
      <Input
        name="radio1"
        type="radio"
        id={`${e.n}b`}
      />
      <Label for={`${e.n}b`}>
         {e.b}
      </Label>

    </FormGroup>
     <FormGroup check className="check-o1.s" id="c">
      <Input
        name="radio1"
        type="radio"
        id={`${e.n}c`}
      />
      <Label for={`${e.n}c`}>
         {e.c}
      </Label>

    </FormGroup>
     <FormGroup check className="check-o1.s" id="d">
      <Input
        name="radio1"
        type="radio"
        id={`${e.n}d`}
      />
      <Label for={`${e.n}d`}>
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
    </div>
 )
}


export default Asessment