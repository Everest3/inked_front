import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RowCards from "../../components/global_components/row_cards/RowCards";
// import BookPreview from "../../components/homesection/book_preview/BookPreview";
import { BooksContext } from "../../context/book-context";
import Grid from "../../components/global_components/grid/Grid";
import "./library.css";
const Library = () => {
  const books = useContext(BooksContext);
  return (
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
                <h4>
                  <Link href="#">Reading list</Link>
                </h4>
                <h4>
                  <Link href="#">I loved these books</Link>
                </h4>
                <h4>
                  <Link href="#">Books I bought</Link>
                </h4>
                <h4>
                  <Link href="#">Archived</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        {/* <RowCards /> */}

        {/* <BookPreview /> */}
        <div class="col">
          <h4>Picks for you</h4>
        </div>
        <Grid books={books.readBooks} />
        {/* <RowCards /> */}
        <div class="col">
          <h4>Picks for you</h4>
        </div>
        {/* <RowCards /> */}
      </div>
    </div>
  );
};

export default Library;
