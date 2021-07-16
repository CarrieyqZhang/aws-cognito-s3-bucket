import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import UserPool from "../UserPool";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
        alert("Invalid input, try again");
      } else {
        history.push("/Success");
      }
      console.log(data);
    });
  };
  return (
    <div>
      <Form className="login-form px-4 py-3" onSubmit={onSubmit}>
        <h2 className=" text-center">Welcome</h2>
        <FormGroup className="mb-2">
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            placeholder="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></Input>
        </FormGroup>

        <FormGroup className="mb-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup className="mb-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></Input>
        </FormGroup>

        <Button className="btn col-12 btn-dark mt-3" type="submit">
          Sign Up
        </Button>

        <div className="text-center mt-2">
          <span>Already a member?</span>
          <Link to="/login"> Login</Link>
        </div>
      </Form>
    </div>
  );
};

// function Signup() {
//   return (
// <Form className="login-form mt-5 px-4 py-3">
//   <h2 className=" text-center">Welcome</h2>
//   <FormGroup className="mb-2">
//     <Label>Username</Label>
//     <Input type="text" placeholder="username"></Input>
//   </FormGroup>

//   <FormGroup className="mb-2">
//     <Label>Email</Label>
//     <Input type="email" placeholder="email"></Input>
//   </FormGroup>
//   <FormGroup className="mb-2">
//     <Label>Password</Label>
//     <Input type="password" placeholder="password"></Input>
//   </FormGroup>

//   <Button className="btn col-12 btn-dark mt-3" type="submit">
//     Sign Up
//   </Button>

//   <div className="text-center mt-2">
//     <span>Already a member?</span>
//     <Link to="/login"> Login</Link>
//   </div>
// </Form>
//   );
// }
export default Signup;
