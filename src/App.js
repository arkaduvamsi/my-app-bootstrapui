import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function App() {

  const [userName, setUserName] = useState("");
  const OnSubmitClick = (e) => {console.log("The Username Given is :", userName)}
  return (
    <div className="formcomponents-centered">
      <div className="text-aligned">
        <h1>Create User</h1>
      </div>
      <div className="component-maxwidth">
        <Form.Label htmlFor="UserName">UserName</Form.Label>
        <Form.Control type="text" onChange={(e) => {setUserName(e.target.value);}} value = {userName} id="userName" />
        <Form.Label htmlFor="Password">Password</Form.Label>
        <Form.Control type="password" id="password" />
        <Form.Label htmlFor="ConfirmPassword">ConfirmPassword</Form.Label>
        <Form.Control type="password" id="confirmPassword" />
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control type="email" id="email" />
        <div className="center">
          <Button variant="primary" onClick={(e) => {OnSubmitClick(e.target.value);}}>Create Account</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
