import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import BookPreview from "../../components/book_preview/BookPreview";
import { useParams } from "react-router-dom";
import BookSection from "./booksection/BookSection";
import AppBar from "../../components/appbar/AppBar";
import "./book.css";
import { BooksContext } from "../../context/book-context";
const Book = () => {
  let { id } = useParams();
  const bookContext = useContext(BooksContext);
  const [book, setBook] = useState({});
  useEffect(() => {
    bookContext.fetchRandomBooks(3);
  });
  useEffect(() => {
    function func() {
      bookContext.fetchBookById(id).then((res) => {
        setBook(res.data);
      });
    }
    func();
  }, [id]);
  return (
    <>
      <AppBar />

      <div className="book-page container">
        <BookSection book={book !== undefined ? book : {}} />
        <div className="container col">
          <h4>
            <i className="fa fa-user-circle-o fa-xs" aria-hidden="true" />{" "}
            {book["AUTORI"]}
          </h4>
          <h5 className="card-text" style={{ padding: "0px 25px" }}>
            {book["PERSHKRIMI"]}
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
