import React, { useContext, useEffect } from "react";
import RowCards from "../../../components/row_cards/RowCards";
import BookPreview from "../../../components/book_preview/BookPreview";
import { AuthContext } from "../../../context/auth-context";
import { BooksContext } from "../../../context/book-context";
import "./homesection.css";

const HomeSection = () => {
  const auth = useContext(AuthContext);
  const books = useContext(BooksContext);

  useEffect(() => {
    function fetchReadBooks() {
      if (auth.authenticated()) {
        books.fetchReadBooks(4);
        books.fetchTrendingBooks(3);
      }
    }
    fetchReadBooks();
  }, [auth]);
  return (
    <>
      <div className="container readers-page">
        <div className="row">
          <div className="col">
            <h1
              className="font-weight-bold"
              style={{
                fontFamily: '"Syne", sans-serif',
                color: "#8e9aaf",
                marginTop: "50px",
              }}
            >
              Welcome home!
            </h1>
          </div>
          <div className="row">
            <div className="col">
              <h4
                style={{
                  marginTop: "50px",
                  marginBottom: "40px",
                  fontFamily: '"Syne", sans-serif',
                }}
              >
                Continue reading
              </h4>
              <RowCards books={books.readBooks} />
              <BookPreview id={Math.floor(Math.random() * 20)} />
              <div className="row">
                <div className="col">
                  <h4>Trending</h4>
                </div>
              </div>
              <RowCards books={books.trendingBooks} />
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default HomeSection;
