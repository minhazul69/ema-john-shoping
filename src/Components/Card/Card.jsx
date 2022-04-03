import React from "react";
import "./Card.css";

const Card = ({ cart, children, handleClearCart }) => {
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
        {cart.length === 0 ? (
          <button className="btn disabled w-100 rounded-2 card-del-btn text-light">
            Clear Cart <i className="fa-solid fa-trash-can"></i>
          </button>
        ) : (
          <button
            onClick={handleClearCart}
            className="btn w-100 rounded-2 card-del-btn text-light"
          >
            Clear Cart <i className="fa-solid fa-trash-can"></i>
          </button>
        )}
        <br />
        {children}
      </div>
    </div>
  );
};

export default Card;
