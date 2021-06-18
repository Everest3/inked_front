import React from "react";
import girl from "../../../assets/frontpageimages/girl.png";
import "./frontpage.css";
const FrontPage = () => {
  return (
    <div className="container front-page">
      <div className="row">
        <div
          className="col-md-6 col-xs-12 text-center"
          style={{ marginTop: "50px" }}
        >
          <h1>Welcome at inked.</h1>
          <h2>ink it outta your brain</h2>
          <div className="middle-buttons">
            <button
              type="button"
              className="btn btn-lg text-nowrap rounded-pill"
              style={{
                marginLeft: "20px",
                fontFamily: '"Syne", sans-serif',
                backgroundColor: "#edd2d6",
              }}
            >
              Read a story
            </button>
            <button
              type="button"
              className="btn btn-lg text-nowrap rounded-pill"
              style={{
                marginLeft: "20px",
                fontFamily: '"Syne", sans-serif',
                backgroundColor: "#dee2ff",
              }}
            >
              Write a story
            </button>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 ">
          <img src={girl} alt="Typing Girl" height="auto" width="90%" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12 icons">
          <ul className="list-inline">
            <li className="list-inline-item">
              <i className="fa fa-magic fa-3x" aria-hidden="true" />
              <p>Imagine</p>
            </li>
            <li className="list-inline-item">
              <i className="fa fa-pencil-square-o fa-3x" aria-hidden="true" />
              <p>Write</p>
            </li>
            <li className="list-inline-item">
              <i className="fa fa-book fa-3x" aria-hidden="true" />
              <p>Read</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
