import React from "react";
import Card from "../card/Card";

const RowCards = (props) => {
  return (
    <div className="card-group">
      {props.books.map((book) => {
        return <Card book={book} key={book["ID"]} />;
      })}
    </div>
  );
};

export default RowCards;
