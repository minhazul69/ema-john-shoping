import React from "react";

const ReviewItem = ({ product }) => {
  const { price, name, img, shipping, quantity } = product;
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{shipping}</p>
      <p>{quantity}</p>
    </div>
  );
};

export default ReviewItem;
