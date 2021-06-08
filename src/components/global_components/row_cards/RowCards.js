import React from "react";
import Card from "../card/Card";

const RowCards = (props) => {
  return (
    <div className="card-group" style={{ marginBottom: 50 }}>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default RowCards;
