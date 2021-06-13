import React from "react";
import RowCards from "../row_cards/RowCards";

const grid = (props) => {
  var arr = [];
  for (var i = 0; i < props.books.length; i = i + 3) {
    let row = [];
    row = props.books.slice(i, i + 3);
    arr.push(
      <div className="row">
        <RowCards books={row} key={i} />
      </div>
    );
  }
  return <div>{arr}</div>;
};

export default grid;
