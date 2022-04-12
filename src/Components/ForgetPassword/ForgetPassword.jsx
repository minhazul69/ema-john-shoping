import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import auth from "../../firebase.init";

const ForgetPassword = () => {
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setSuccess("");
      setError("Unvalid Email Please Type A Valid Email");
      return;
    }
    handleForgetPassword();
    setValidated(true);
  };
  const closeToast = () => {
    setSuccess("");
  };

  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setError("");
        setSuccess(
          <div className="toast show position-absolute top-50 end-0 ">
            <div className="toast-header  border-bottom-0 border-info bg-success text-light fw-bold">
              <div className="d-flex align-items-center justify-content-center">
                <span className="px-4">
                  Resat Email Code Sent SuccessFull Please Check Your Email And
                  Resat Your Password
                </span>
              </div>
              <button
                type="button"
                onClick={closeToast}
                className="btn-close ms-auto btn-close-warning"
                data-bs-dismiss="toast"
              ></button>
            </div>
          </div>
        );
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
      });
  };
  return (
    <div className="container box-shadow sizing mx-auto border p-4  mt-5 mb-5 position-relative">
      <h2 className="text-center mb-4">Reset Your Password</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            placeholder="Enter Your Emil Address"
            onBlur={handleEmailBlur}
            className="py-2 shadow-none"
            required
            type="email"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide your email
          </Form.Control.Feedback>
        </Form.Group>
        <p className="text-danger fw-bold">{error}</p>
        {success}

        <button
          type="submit "
          className="w-100 rounded-0 login-btn-bg-color py-2 shadow-none"
        >
          Resat Password
        </button>
      </Form>
    </div>
  );
};

export default ForgetPassword;
