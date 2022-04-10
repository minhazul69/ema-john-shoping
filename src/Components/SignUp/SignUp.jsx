import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import googleLogo from "../../images/google.svg";

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setEmail(event.target.value);
  };
  const handleConfirmPasswordBluer = (event) => {
    setEmail(event.target.value);
  };
  // const handleSubmit = () => {

  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (password !== confirmPassword) {
      setError("opps Password Not Match");
      return;
    }
    // setError("");
  };
  return (
    <div className="container box-shadow sizing mx-auto border p-4  mt-5 mb-5">
      <h2 className="text-center mb-4">Sign Up</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            className="py-2 shadow-none"
            required
            type="email"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid a valid email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            className="py-2 shadow-none"
            required
            type="password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide your password
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={handleConfirmPasswordBluer}
            className="py-2 shadow-none"
            required
            type="password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide your Confirm Password
          </Form.Control.Feedback>
        </Form.Group>
        <p className="text-danger">{error}</p>
        <button
          type="submit "
          className="w-100 rounded-0 login-btn-bg-color py-2 shadow-none"
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
        <button className="btn w-100 border border-secondary py-3 mb-3 shadow-none">
          <img className="img-fluid me-2" src={googleLogo} alt="" /> Continue
          with Google
        </button>
      </Form>
    </div>
  );
};

export default SignUp;
