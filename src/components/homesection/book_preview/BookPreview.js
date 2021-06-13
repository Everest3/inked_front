import React from "react";
import img from "../../../assets/homesection/9002776b28684aec617c41554e33945f.jpg";
import "./bookPreviw.css";
const BookPreview = ({ book }) => {
  return (
    <div className="container book-preview">
      <div className="d-flex justify-content-center">
        <div className="card mb-3" style={{ maxWidth: "800px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className="mx-auto d-block"
                src={book["KOPERTINA"]}
                alt="book cover"
                id="fotomesit"
              />
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
                >
                  <button type="button" className="btn btn-sm rounded-pill">
                    Incomplete
                  </button>
                </div>
                <h5 className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  tempora aut ipsam sit amet consectetur corporis vel quibusdam
                  odio architecto velit iure?
                </h5>
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
                  >
                    <i className="fa fa-plus" aria-hidden="true" /> Add
                  </button>
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
