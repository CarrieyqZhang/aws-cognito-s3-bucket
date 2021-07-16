import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Forgot extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3 className=" text-center">Forgot Password</h3>

          <FormGroup className="mb-2">
            <Label htmlFor="forgot">Email</Label>
            <Input type="email" placeholder="email" required></Input>
          </FormGroup>
          <Button className="btn col-12 btn-dark mt-3" type="submit">
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default Forgot;
