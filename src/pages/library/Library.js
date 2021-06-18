import React, { useContext, useState, useEffect } from "react";
import { BooksContext } from "../../context/book-context";
import Grid from "../../components/grid/Grid";
import "./library.css";
import AppBar from "../../components/appbar/AppBar";
import Footer from "../../components/footer/Footer";
import BookPreview from "../../components/book_preview/BookPreview";
import RowCards from "../../components/row_cards/RowCards";

const Library = () => {
  const booksContext = useContext(BooksContext);
  const [clickIndex, setClickIndex] = useState(1);

  useEffect(() => {
    booksContext.fetchRandomBooks(3);
    console.log("tessdfst");
  }, []);
  useEffect(() => {
    if (clickIndex === 1) {
      booksContext.fetchReadBooks();
    } else if (clickIndex === 2) {
      booksContext.fetchFavoriteBooks();
    } else if (clickIndex === 3) {
      booksContext.fetchBoughtBooks();
    } else if (clickIndex === 4) {
      booksContext.fetchArchivedBooks();
    }
  }, [clickIndex]);
  return (
    <>
      <AppBar />
      <div className="library">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="font-weight-bold">Dive in your library!</h1>
            </div>
            <div className="row">
              <div className="dashboard">
                <div className="col d-flex">
                  {/* <h4>
                  <Link href="#">Currently reading</Link>
                </h4> */}
                  <h4
                    className={`${clickIndex === 1 ? "active" : ""}`}
                    onClick={() => setClickIndex(1)}
                  >
                    Currently Reading
                  </h4>
                  <h4
                    className={`${clickIndex === 2 ? "active" : ""}`}
                    onClick={() => setClickIndex(2)}
                  >
                    I loved these books
                  </h4>
                  <h4
                    className={`${clickIndex === 3 ? "active" : ""}`}
                    onClick={() => setClickIndex(3)}
                  >
                    Books I bought
                  </h4>
                  <h4
                    className={`${clickIndex === 4 ? "active" : ""}`}
                    onClick={() => setClickIndex(4)}
                  >
                    Archived
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <Grid books={booksContext.commonBooks} />
          <BookPreview id={Math.floor(Math.random() * 20)} />
          <div className="col">
            <h4>Picks for you</h4>
          </div>
          <RowCards books={booksContext.randomBooks} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Library;
