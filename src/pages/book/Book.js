import React from "react";
import Footer from "../../components/global_components/footer/Footer";
import BookPreview from "../../components/homesection/book_preview/BookPreview";
import AppBar from "../../containers/appbar/AppBar";
import "./book.css";
const Book = () => {
  return (
    <>
      <AppBar />

      <div className="book-page container">
        <BookPreview />
        <div className="container col">
          <h4>
            <i className="fa fa-user-circle-o fa-xs" aria-hidden="true" />{" "}
            Author username{" "}
          </h4>
          <h5 className="card-text" style={{ padding: "0px 25px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            adipisicing elit. Molestias repellendus consectetur adipisicing elit
            voluptatem sint odit distinctio sit! A perspiciatis adipisicing
            elit. Molestias repellendus consectetur adipisicing elit voluptatem
            sint odit distinctio sit! A perspiciatis similique quod recusandae.
            Nesciunt aliquam iure quam voluptatibus similique quod recusandae.
            Nesciunt aliquam iure quam voluptatibus repellendus consectetur
            adipisicing elit voluptatem sint odit distinctio sit! A perspiciatis
            similique quod recusandae. Nesciunt aliquam iure quam voluptatibus
            quo officiis cumque ea, repellendus eius perspiciatis, dolore
            quisquam? Fuga quam ut perferendis asperiores sit.
          </h5>
          <br />
        </div>
      </div>
      <div className="book-page container">
        <Keyword />
        <Footer />
      </div>
    </>
  );
};

export const Keyword = () => {
  return (
    <div className="row keyword">
      <div className="col d-flex justify-content-center flex-direction-keyword">
        <button
          type="button"
          className="btn btn-primary btn-lg rounded-pill btn-keyword"
        >
          Best Seller
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg rounded-pill btn-keyword"
        >
          Drama
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg rounded-pill btn-keyword"
        >
          Adventure
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg rounded-pill btn-keyword"
        >
          Action
        </button>
      </div>
    </div>
  );
};

export default Book;
