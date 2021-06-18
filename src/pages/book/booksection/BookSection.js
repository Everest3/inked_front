import React, { useState } from "react";
import "./booksections.css";
import AddBookModal from "../../../components/addbookmodal/AddBookModal";

const BookSection = ({ book }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex justify-content-center book-section">
      <div className="card mb-3" style={{ maxWidth: "1000px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="card-img-top card-img"
              src={book["KOPERTINA"]}
              alt="book cover"
              id="fotomesit"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{book["EMER"]}</h2>
              <div
                className="justify-content-md-start"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  marginBottom: "20px",
                }}
              >
                <button type="button" className="btn btn-sm rounded-pill">
                  Incomplete
                </button>
              </div>
              <div className="icons">
                <i className="fa fa-heart-o fa-2x" aria-hidden="true" />
                <br />
                <i className="fa fa-book fa-2x" aria-hidden="true" />
              </div>
              <div className="plus justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-lg text-nowrap rounded-pill"
                  style={{ fontFamily: '"Syne", sans-serif' }}
                >
                  Start reading
                </button>
                <button
                  type="button"
                  className="btn btn-lg"
                  style={{ border: 0 }}
                  onClick={handleShow}
                >
                  <i className="fa fa-plus" aria-hidden="true" /> Add
                </button>
                <AddBookModal
                  handleShow={handleShow}
                  handleClose={handleClose}
                  show={show}
                  id={book["id"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
