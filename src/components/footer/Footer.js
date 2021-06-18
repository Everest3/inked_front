import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="row ">
            <ul className="nav  container mx-auto justify-content-center">
              <li className="nav-item ">
                {" "}
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/blog" className="nav-link" href="#">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/community" className="nav-link" href="#">
                  Community
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/terms" className="nav-link" href="#">
                  Terms
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/privacy" className="nav-link" href="#">
                  Privacy
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/contact-us" className="nav-link" href="#">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" href="#">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" href="#">
                  <i className="fa fa-facebook-official" aria-hidden="true" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" href="#">
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
