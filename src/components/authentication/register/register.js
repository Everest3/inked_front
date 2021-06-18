import React, { useState, useContext } from "react";
import style from "../style.module.css";
import Modal from "react-bootstrap/Modal";
import styles from "../style.module.css";
import { AuthContext } from "../../../context/auth-context";

const Register = (props) => {
  const [nextStep, setNextStep] = useState(false);
  const auth = useContext(AuthContext);
  const initialValues = {
    email: "",
    password: "",
    password_confirmation: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
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

  if (nextStep) {
    return (
      <>
        <div className={`${style.login} ${style.choseModal}`}>
          <h5 style={{ marginLeft: "43%" }}>I am a. . .</h5>
          <button
            className={`${styles.choseModalBtn} ${styles.modalBodyBtn} btn btn-lg btn-primary shadow`}
            onClick={() => setValues({ ...values, tipi: "writer" })}
          >
            A writer
          </button>
          <button
            className={`${styles.choseModalBtn} ${styles.modalBodyBtn} btn btn-lg btn-primary shadow`}
            onClick={() => setValues({ ...values, tipi: "reader" })}
          >
            A reader
          </button>{" "}
          {auth.errMessage !== "" ? showError(auth.errMessage) : null}
          <span>
            <button
              className={`${styles.joinusBtn} ${styles.choseModalBtn} ${styles.modalBodyBtn} btn btn-lg btn-primary shadow`}
              onClick={() => auth.register(values)}
            >
              {auth.loading ? "Signing up" : "Join us!"}
            </button>
          </span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <meta name="csrf-token" content="{{ csrf_token() }}"></meta>
        <div className={`mb-3 ${style.login}`}>
          <input
            type="text"
            className={`${style.input} form-control shadow`}
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            className={`${style.input} form-control shadow`}
            placeholder="Password"
            id="signupPassword"
            value={values.password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password_confirmation"
            className={`${style.input} form-control shadow`}
            placeholder="Confirm password"
            id="signupconfirmPassword"
            value={values.confirmpass}
            onChange={handleInputChange}
          />
          <button
            className={`${style.btn} ${style.roundedBtn} btn btn-lg btn-primary shadow `}
            onClick={() => setNextStep(true)}
          >
            Next step
          </button>
          <p className="text-center">
            <u>
              <b>
                <br />
                or
              </b>
            </u>
          </p>{" "}
          <span>
            <button
              className={`${style.googlebtn} ${style.btn} ${style.roundedBtn} btn btn-lg btn-primary shadow `}
              id="google"
            >
              <i className="fa fa-google" aria-hidden="true" /> Sign up with
              Google
            </button>
          </span>
        </div>
        {!nextStep ? (
          <Modal.Footer className="d-flex justify-content-center">
            Already have an account?
            <span
              style={{
                color: "blue",
                textDecoration: "underline",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={props.setCurrentApp}
            >
              Login
            </span>
          </Modal.Footer>
        ) : null}
      </>
    );
  }
};

export default Register;
