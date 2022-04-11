import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import googleLogo from "../../images/google.svg";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  if (user) {
    // navigate("/shop");
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 2000);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    signInWithEmailAndPassword(email, password);

    setValidated(true);
  };

  return (
    <div className="container box-shadow sizing mx-auto border p-4  mt-5 mb-5 position-relative">
      <h2 className="text-center mb-4">Login</h2>
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
        <p className="text-danger fw-bold">{error?.message}</p>
        {user && (
          <div className="toast show position-absolute top-50 end-0 ">
            <div className="toast-header  border-bottom-0 border-info bg-success text-light fw-bold">
              <div className="d-flex align-items-center justify-content-center">
                <span className="px-4">Login SuccessFull</span>
              </div>
              <button
                type="button"
                className="btn-close ms-auto btn-close-warning"
                data-bs-dismiss="toast"
              ></button>
            </div>
          </div>
        )}

        {loading && <p>Loading....</p>}
        <button
          type="submit "
          className="w-100 rounded-0 login-btn-bg-color py-2 shadow-none"
        >
          Login
        </button>

        <p className="text-center mt-1">
          New to Ema-john<span className="mx-1">?</span>
          <Link to="/signup" className=" text-decoration-none text-warning">
            Create New Account
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

export default Login;
