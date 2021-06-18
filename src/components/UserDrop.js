import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

export default function UserDrop() {
  const auth = useContext(AuthContext);
  var listCollapseRef = useRef();
  var buttonCollapseRef = useRef();

  var [toggle, setToggle] = useState(false);
  var btnClass = ["navbar-collapse collapse", "navbar-collapse collapse show"];
  var listClass = [
    "dropdown-menu dropdown-menu-end dropdown-menu-lg-start",
    "dropdown-menu dropdown-menu-end dropdown-menu-lg-start show",
  ];

  useEffect(() => {
    var collapseButton = buttonCollapseRef.current;
    var collapseList = listCollapseRef.current;
    if (toggle) {
      collapseButton.className = btnClass[1];
      collapseList.className = listClass[1];
    } else {
      collapseButton.className = btnClass[0];
      collapseList.className = listClass[0];
    }
  });

  return (
    <div className="dropdown">
      <button
        ref={buttonCollapseRef}
        className="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        style={{ backgroundColor: "white", border: "none", marginTop: 8 }}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <i
          className="fa fa-user-circle-o fa-2x"
          style={{ backgroundColor: "white" }}
        />
      </button>
      <ul
        ref={listCollapseRef}
        className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
        aria-labelledby="dropdownMenuButton1"
      >
        <Link className="dropdown-item">Profile</Link>
        <Link className="dropdown-item">Settings</Link>
        <Link className="dropdown-item">Favorite Books</Link>
        <Link className="dropdown-item">Bookmarks</Link>
        <button className="dropdown-item" onClick={() => auth.logout()}>
          Log out
        </button>
      </ul>
    </div>
  );
}
