import React from "react";
import { Link } from "react-router-dom";
import "../book_preview/BookPreview";
const Card = ({ book }) => {
  const style = {
    width: "100%",
    height: "18vw",
    objectFit: "cover",
  };
  return (
    <div className="card shadow p-3 mb-5">
      <Link to={`/book/${book["ID"]}`}>
        <img
          className="card-img-top"
          style={style}
          src={book["KOPERTINA"]}
          alt="Card  cap"
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{book["EMER"]}</h5>
        <div className="card-subtitle">
          <button type="button" className="btn btn-sm rounded-pill">
            {book["KATEGORIA"]}
          </button>
        </div>
        <div className="startreading d-flex justify-content-center">
          {" "}
          <Link className="btn rounded-pill">Start reading</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
