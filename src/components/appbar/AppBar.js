import React, { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/appbar/appbar_logo.png";
import Modal from "react-bootstrap/Modal";
import Login from "../authentication/login/Login";
import Register from "../authentication/register/register";
import { AuthContext } from "../../context/auth-context";
import UserDrop from "../UserDrop";
import style from "./appbar.css";
import Timer from "react-compound-timer";
import { BooksContext } from "../../context/book-context";

const AppBar = () => {
  const auth = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const bookContext = useContext(BooksContext);

  const handleClose = () => {
    setShow(false);
    auth.resetErrMessage();
  };
  const [currentApp, setCurrentApp] = useState(0);
  var [toggle, setToggle] = useState(false);
  var collapseRef = useRef();

  useEffect(() => {
    var myCollapse = collapseRef.current;
    toggle
      ? (myCollapse.className = "navbar-collapse collapse show")
      : (myCollapse.className = "navbar-collapse collapse");
  });

  useEffect(() => {
    if (searchQuery === "") {
      bookContext.clearSearch();
      return;
    }
    const indicator = setTimeout(() => {
      bookContext.searchBooks(searchQuery);
    }, 1000);
    return () => {
      clearTimeout(indicator);
    };
  }, [searchQuery]);

  return (
    <>
      {searchQuery.length > 0 && (
        <div
          className="clearSearch"
          onClick={() => {
            setSearchQuery("");
            bookContext.clearSearch();
          }}
        />
      )}
      <nav className={`navbar navbar-expand-lg navbar-light bg-white`}>
        <div className={`container`}>
          <Link
            to={"/"}
            className={`${style["navbar-brand"]} navbar-brand`}
            href="#"
          >
            <img
              src={logo}
              alt="inked."
              width={140}
              height={70}
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setToggle((toggle) => !toggle)}
          >
            {" "}
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
            style={{ flexGrow: 0 }}
            ref={collapseRef}
          >
            <div className="navbar-nav search-bar" style={{ marginTop: 15 }}>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`${style["form-control"]} form-control me-5 rounded-pill`}
                type="search"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  width: 400,
                  height: 50,
                }}
                placeholder="Search a book..."
                aria-label="Search"
              />
              <ul className="list-group search-list">
                {bookContext.searchedBooks.map((book) => {
                  return (
                    <Link to={`/book/${book["id"]}`}>
                      <li className="list-group-item">{book["EMER"]}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="navbar-nav" style={{ marginTop: 15 }}>
              {auth.authenticated() ? (
                <Link to="/library">
                  <button
                    type="button"
                    id="graybutton"
                    className="btn btn-lg
                  text-nowrap rounded-pill"
                    style={{ marginLeft: 20, fontFamily: '"Syne", sans-serif' }}
                  >
                    {" "}
                    {auth.user["tipi"] === "reader"
                      ? "I am a reader"
                      : "I am a reader"}
                  </button>
                </Link>
              ) : null}
              {!auth.authenticated() ? (
                <button
                  type="button"
                  className={`${style.btn} btn btn-lg btn-white text-nowrap rounded-0`}
                  style={{
                    borderRight: toggle ? "" : "1px solid rgb(0, 0, 0)",
                    marginRight: 20,
                    fontFamily: '"Syne", sans-serif',
                  }}
                  onClick={() => {
                    setCurrentApp(0);
                    setShow((prevState) => !prevState);
                  }}
                >
                  Sign Up
                </button>
              ) : null}
              {!auth.authenticated() ? (
                <button
                  type="button"
                  className={`${style.btn} btn btn-lg btn-dark text-nowrap rounded-pill`}
                  style={{ marginLeft: 20, fontFamily: '"Syne", sans-serif' }}
                  onClick={() => {
                    setCurrentApp(1);
                    setShow((prevState) => !prevState);
                  }}
                >
                  Log in
                </button>
              ) : null}
              {auth.authenticated() ? <UserDrop /> : null}
            </div>
          </div>
        </div>
      </nav>
      <hr style={{ boxShadow: "0px 1px 2px #888888" }} />
      <Modal
        show={show && !auth.authenticated()}
        onHide={handleClose}
        centered={"true"}
      >
        <Modal.Header closeButton={false} closeLabel={""} centered={"true"}>
          <Modal.Title style={{ marginLeft: "40%" }}>
            {currentApp === 0 ? "Sign up" : "Login"}
          </Modal.Title>
          <button className="btn-close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          {currentApp === 0 ? (
            <Register
              close={handleClose}
              setCurrentApp={() => setCurrentApp(1)}
            />
          ) : (
            <Login close={handleClose} setCurrentApp={() => setCurrentApp(0)} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AppBar;
