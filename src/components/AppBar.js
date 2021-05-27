import React from "react";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link to="/sd" className="navbar-brand" href="#">
            <img
              src="aboutusimages/LOGO - Black png.png"
              alt="inked."
              width="140"
              height="70"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button className="navbar-toggler" type="button">
            {" "}
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNavAltMarkup" style={{ flexGrow: 0 }}>
            <div className=" navbar-nav" style={{ marginTop: 15 }}>
              <input
                className="form-control me-5 rounded-pill"
                type="search"
                style={{ fontFamily: "Syne", width: 400 }}
                placeholder="Search a book..."
                aria-label="Search"
              />
              <button
                type="button"
                className="btn btn-lg btn-white text-nowrap rounded-0"
                style={{
                  borderRight: "1px solid rgb(0, 0, 0)",
                  marginRight: 20,
                  fontFamily: "Syne",
                }}
              >
                Sign Up
              </button>
              <button
                type="button"
                className="btn btn-lg btn-dark text-nowrap rounded-pill"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </nav>
      <hr></hr>
    </>
  );
};

export default AppBar;
