import React, { useState, useEffect, useContext } from "react";
import style from "../style.module.css";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { AuthContext } from "../../../context/auth-context";

const Login = (props) => {
  const auth = useContext(AuthContext);
  const initialValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    setValues(initialValues);
  }, []);

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
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
