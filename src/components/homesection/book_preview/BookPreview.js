import React from "react";
import img from "../../../assets/homesection/9002776b28684aec617c41554e33945f.jpg";
import styles from "./bookpreview.module.css";
const BookPreview = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div
          className="card mb-3"
          style={{ maxwidth: 800, border: 0, marginTop: 50 }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className={`mx-auto d-block ${styles.fotomesit}`}
                src={img}
                alt="book cover"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body" id="card-body">
                <h2 className={`${styles.cardTitle} card-title`}>Book Title</h2>
                <div
                  className="justify-content-md-start"
                  style={{ fontfamily: '"syne", sans-serif', marginbottom: 20 }}
                >
                  <button
                    type="button"
                    className={`btn ${styles.btnSm} btn-sm rounded-pill`}
                  >
                    Incomplete
                  </button>
                </div>
                <h5 className="card-text plus justify-content-md-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  tempora aut ipsam sit amet consectetur corporis vel quibusdam
                  odio architecto velit iure?
                </h5>
                <div className="plus justify-content-md-start">
                  <button
                    type="button"
                    className={`btn ${styles.btnLg} text-nowrap rounded-pill`}
                    style={{ fontfamily: '"syne", sans-serif' }}
                  >
                    Start reading
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg"
                    style={{ border: 0 }}
                  >
                    {" "}
                    Add
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
