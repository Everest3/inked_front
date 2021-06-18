import React, { useState, useContext } from "react";
import style from "../style.module.css";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../../../context/auth-context";

const Login = (props) => {
  const auth = useContext(AuthContext);

  const [values, setValues] = useState({});

  const handleInputChange = (e) => {
    auth.resetErrMessage();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const showError = (errMessage) => {
    return (
      <div
        style={{ width: 300, marginLeft: "20%" }}
        className="alert alert-danger py-2 "
        role="alert"
      >
        {errMessage}
      </div>
    );
  };
  return (
    <>
      <div className={`mb-3 ${style.login}`}>
        <input
          type="text"
          className={`${style.input} form-control shadow`}
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          className={`${style.input} form-control shadow`}
          placeholder="Password"
          id="loginPassword"
          name="password"
          onChange={handleInputChange}
        />
        {auth.errMessage !== "" ? showError(auth.errMessage) : null}
        <button
          className={`${style.btn} ${style.roundedBtn} btn btn-lg btn-primary shadow `}
          onClick={() => auth.login(values)}
        >
          {auth.loading ? "Loging in..." : "Log in"}
        </button>
        <p className="text-center">
          <u>
            <b>or</b>
          </u>
        </p>
        <span>
          <button
            className={`${style.googlebtn} ${style.btn} ${style.roundedBtn} btn btn-lg btn-primary shadow `}
          >
            <i className="fa fa-google" aria-hidden="true" /> Sign up with
            Google
          </button>
        </span>
      </div>
      <Modal.Footer className="d-flex justify-content-center">
        You don't have an account?
        <span
          style={{
            color: "blue",
            textDecoration: "underline",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={props.setCurrentApp}
        >
          Sign up
        </span>
      </Modal.Footer>
    </>
  );
};

export default Login;
