import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../services/toast.service";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const data = { fullName, email, password };
    // console.log(data);

    // Axios post
    axios
      .post("https://backend-mu-pied.vercel.app/users/register", data)
      .then((res) => {
        if (res.data.status) {
          navigate("/");
          toast.success(res.data.message, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  }

  // Signup function
  const signUp = async (e) => {
    e.preventDefault();
    const data = { fullName, email, password };

    try {
      const res = await axios.post(
        "https://backend-mu-pied.vercel.app/users/register",
        data
      );
      console.log(res);
      if (res.data.status) {
        navigate("/");
        successToast(res.data.message);
      }
    } catch (error) {
      // console.log("Error", error.response.data.message);
      errorToast(error.response.data.message);
    }
  };

  return (
    <Card>
      <Form>
        <h1>Sign-up</h1>
        <Form.Group className="mb-3" controlId="fullname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="primary" type="submit" onClick={signUp}>
          Submit - await
        </Button>
      </Form>
    </Card>
  );
};

export default SignUpPage;
