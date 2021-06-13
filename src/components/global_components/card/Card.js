import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/homesection/9002776b28684aec617c41554e33945f.jpg";
import "../../components/homesection/book_preview/BookPreview";
const Card = ({ book }) => {
  return (
    <div className="card shadow p-3 mb-5">
      <Link to={`/book/${book["ID"]}`} props={book}>
        <img className="card-img-top" src={book["KOPERTINA"]} alt="Card  cap" />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{book["EMER"]}</h5>
        <div className="card-subtitle">
          <button type="button" className="btn btn-sm rounded-pill">
            Incomplete
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
