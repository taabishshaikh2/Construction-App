import React from "react";

const NumberCard = ({ number, text , desc}) => {
  return (
    <div className="d-flex flex-column">
      <div className="card shadow p-3">
        <h3 className="text-center text-danger">{number}+</h3>
        <h5 className="text-center ">{text}</h5>
      </div>
      <p className="p-1 text-center">{desc}</p>
    </div>
  );
};

export default NumberCard;
