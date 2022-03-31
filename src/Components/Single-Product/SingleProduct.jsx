import React from "react";
import { Card } from "react-bootstrap";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { name, img, price, ratings, seller } = props.product;
  return (
    <div className="col-xl-4 col-lg-6 col-md-12 mb-4 pe-1">
      <Card className="cards">
        <div className="p-1">
          <Card.Img className="rounded-3 img-fluid" variant="top" src={img} />
        </div>
        <Card.Body className="pt-2">
          <Card.Title>{name}</Card.Title>
          <h5 className="mt-4">Price: ${price}</h5>
          <Card.Text className="mt-4 card-info-details">
            <p className="mb-0">Manufacturer: {seller}</p>
            <p className="mb-0">Rating: {ratings} Star</p>
          </Card.Text>
        </Card.Body>
        <button
          onClick={props.handleAddToCart}
          className="w-100 border-0 p-2 cart-btn"
        >
          Add To Cart <i className="fa-solid fa-cart-plus"></i>
        </button>
      </Card>
    </div>
  );
};

export default SingleProduct;
