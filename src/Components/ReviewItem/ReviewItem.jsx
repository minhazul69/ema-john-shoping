import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveCart }) => {
  const { price, name, img, shipping, quantity } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-info">
        <div className="item-info">
          <p title={name} className="item-name">
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            Price:
            <small className="text-orange"> ${price}</small>
          </p>
          <p>
            Shipping Charge:
            <small className="text-orange">${shipping}</small>
          </p>
          <p>
            Quantity:
            <small>{quantity}</small>
          </p>
        </div>
        <div>
          <button
            onClick={() => handleRemoveCart(product)}
            className="review-item-del-btn"
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
