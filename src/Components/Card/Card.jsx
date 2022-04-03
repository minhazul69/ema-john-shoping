import React from "react";
import "./Card.css";

const Card = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }
  const taxString = (total * 0.1).toFixed(2);
  const tax = parseFloat(taxString);
  const grandTotal = total + shipping + tax;

  return (
    <div className="add-card mt-4">
      <h4>Order Summary</h4>
      <div className="card-info">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
      </div>
      <h5 className="mt-4">Grand Total: ${grandTotal}</h5>
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
