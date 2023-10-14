import axios from "axios";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../services/toast.service";

const SignInPage = () => {
  // let email = "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    // console.log(e.target.value);
    // email = e.target.value;
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  //  Submit handle
  function hadleSubmit(e) {
    e.preventDefault();
    const data = { email, password };
    // Axios call for login
    axios
      .post("https://backend-mu-pied.vercel.app/users/login", data)
      .then((res) => {
        // console.log(res);
        if (res.data.status) {
          // Navigate
          navigate("/quotes");
          successToast(res.data.message);
        }
      })
      .catch((err) => {
        errorToast(err.response.data.message);

        // Success toat test

        // console.log(err.response.data.message);
      });
  }

  return (
    <Card>
      <Form>
        <h1>Sign-In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
            // value="kminchelle"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            // value="0lelplR"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={hadleSubmit}>
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default SignInPage;
