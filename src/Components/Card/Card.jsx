import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="add-card mt-4">
      <h4>Order Summary</h4>
      <div className="card-info">
        <p>Selected Items: 6</p>
        <p>Total Price: $1140</p>
        <p>Total Shipping Charge: $5</p>
        <p>Tax: $114</p>
      </div>
      <h5 className="mt-4">Grand Total: $1559</h5>
      <div className="mt-5">
        <button className="btn w-100 rounded-2 card-del-btn text-light">
          Clear Cart <i className="fa-solid fa-trash-can"></i>
        </button>
        <br />
        <button className="btn w-100 rounded-2 mt-3 text-light card-add-btn">
          Review Order <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
