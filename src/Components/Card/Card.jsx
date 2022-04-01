import React from "react";
import "./Card.css";

const Card = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let tax = 0;
  let grandTotal = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
    tax = parseInt((shipping + total * 0.1).toFixed(2));
    grandTotal = total + shipping + tax;
  }

  return (
    <div className="add-card mt-4">
      <h4>Order Summary</h4>
      <div className="card-info">
        <p>Selected Items: {cart.length}</p>
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
