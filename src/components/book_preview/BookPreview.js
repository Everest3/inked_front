import React, { useEffect, useState, useContext } from "react";
import "./bookPreviw.css";
import { Link } from "react-router-dom";
import { BooksContext } from "../../context/book-context";
import AddBookModal from "../addbookmodal/AddBookModal";

const BookPreview = ({ id }) => {
  const bookContext = useContext(BooksContext);
  const [book, setBook] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    function func() {
      bookContext.fetchBookById(id).then((res) => {
        setBook(res.data);
      });
    }
    func();
  }, []);
  return (
    <div className="container book-preview">
      <div className="d-flex justify-content-center">
        <div className="card mb-3" style={{ maxWidth: "800px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <Link to={`/book/${id}`}>
                <img
                  className="mx-auto d-block card-img"
                  src={book["KOPERTINA"]}
                  alt="book cover"
                  id="fotomesit"
                />
              </Link>
            </div>
            <div className="col-md-8">
              <div className="card-body" id="middle-card">
                <h2 className="card-title">{book["EMER"]}</h2>
                <div
                  className="justify-content-md-start"
                  style={{
                    fontFamily: '"Syne", sans-serif',
                    marginBottom: "20px",
                  }}
                ></div>
                <h5 className="card-text">{book["PERSHKRIMI"]}</h5>
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
    </div>
  );
};

export default BookPreview;
