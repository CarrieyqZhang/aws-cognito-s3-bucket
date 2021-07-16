import React, { useState } from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import { Link, useHistory } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
import Success from "../components/Success";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
        history.push("/success");
      },
      onFailure: (err) => {
        console.log("onFailure: ", err);
        alert("Invalid username or password, try again");
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
  };
  return (
    <div>
      <Form className="login-form px-4" onSubmit={onSubmit}>
        <h2 className=" text-center">Welcome Back</h2>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
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
          Log in
        </Button>
        <div className="text-center pt-3">
          or continue with your social account{" "}
        </div>
        <FacebookLoginButton className="my-3 " />
        <div className="text-center">
          <Link to="/signup">Sign Up</Link>
          <span className="p-2">|</span>
          <Link to={"/forgot"}>Forgot Password</Link>
        </div>
      </Form>
    </div>
  );
};

// function Login() {
//   return (
// <Form className="login-form mt-5 px-4">
//   <h2 className=" text-center">Welcome Back</h2>
//   <FormGroup>
//     <Label>Email</Label>
//     <Input type="email" placeholder="email"></Input>
//   </FormGroup>
//   <FormGroup>
//     <Label>Password</Label>
//     <Input type="password" placeholder="password"></Input>
//   </FormGroup>
//   <Button className="btn col-12 btn-dark mt-3" type="submit">
//     Log in
//   </Button>
//   <div className="text-center pt-3">
//     or continue with your social account{" "}
//   </div>
//   <FacebookLoginButton className="my-3 " />
//   <div className="text-center">
//     <Link to="/">Sign Up</Link>
//     <span className="p-2">|</span>
//     <a href="#">Forgot Password</a>
//   </div>
// </Form>
//   );
// }
export default Login;
