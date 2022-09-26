import React from "react";
import { useState } from "react";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";

export default function EmailForm() {
    const [form, setForm] = useState({
        name:'',
        email:''
    });
    function handleChange(e){
        setForm(e.target.value)
    }
    const { email, username, password } = form;
  return (
    <div>
      <FormGroup>
        <div class="mb-3">
          <Label for="exampleInputEmail1" class="form-label">
            Email address
          </Label>
          <Input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={email}
          ></Input>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <Label for="exampleInputPassword1" class="form-label">
            User Name
          </Label>
          <Input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          ></Input>
        </div>
        <div class="mb-3 form-check">
          <Input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></Input>
          <Label class="form-check-label" for="exampleCheck1">
            Check me out
          </Label>
        </div>
        <Button onClick={handleChange} type="submit" class="btn btn-primary">
          Submit
        </Button>
      </FormGroup>
    </div>
  );
}
