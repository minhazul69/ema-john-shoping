import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import googleLogo from "../../images/google.svg";

const SignUp = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="container box-shadow sizing mx-auto border p-4  mt-4 mb-4">
      <h2 className="text-center mb-4">Sign Up</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="py-2" required type="email" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid a valid email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="py-2" required type="password" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide your password
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control className="py-2" required type="password" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide your Confirm Password
          </Form.Control.Feedback>
        </Form.Group>
        <button
          type="submit "
          className="w-100 rounded-0 login-btn-bg-color py-2"
        >
          Sign Up
        </button>

        <p className="text-center mt-1">
          Already have an account?
          <Link to="/login" className=" text-decoration-none text-warning">
            Login
          </Link>
        </p>
        <div className="content mt-4 mb-4">
          <p className="or">or</p>
        </div>
        <button className="btn w-100 border py-3 mb-3">
          <img className="img-fluid me-2" src={googleLogo} alt="" /> Continue
          with Google
        </button>
      </Form>
    </div>
  );
};

export default SignUp;
