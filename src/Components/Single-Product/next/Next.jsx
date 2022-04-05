import React from "react";
import { Card } from "react-bootstrap";

const Next = ({ product }) => {
  const { name, img, price, ratings, seller } = product;
  return (
    <div className="col-xl-4 col-lg-6 col-md-12 mb-4  md-pe-1">
      <Card className="cards">
        <div className="p-1">
          <Card.Img className="rounded-3 img-fluid" variant="top" src={img} />
        </div>
        <Card.Body className="pt-2">
          <Card.Title>{name}</Card.Title>
          <h5 className="mt-4">Price: ${price}</h5>
          <Card.Text className="mt-4 card-info-details">
            <p className="mb-2">Manufacturer: {seller}</p>
            <Rating ratings={ratings}></Rating>
          </Card.Text>
        </Card.Body>
        <button className="w-100 border-0 p-2 cart-btn">
          Add To Cart <i className="fa-solid fa-cart-plus"></i>
        </button>
      </Card>
    </div>
  );
};
export const Rating = ({ ratings }) => {
  if (ratings === 5) {
    return (
      <p className="text-warning icon">
        <div>
          <small className="text-success">{ratings} Star</small>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </p>
    );
  } else if (ratings === 4) {
    return (
      <p className="text-warning icon">
        <div>
          <small className="text-success">{ratings} Star</small>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star gray"></i>
          </div>
        </div>
      </p>
    );
  } else if (ratings === 3) {
    return (
      <p className="text-warning icon">
        <div>
          <small className="text-success">{ratings} Star</small>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star gray"></i>
            <i className="fa-solid fa-star gray"></i>
          </div>
        </div>
      </p>
    );
  } else if (ratings === 2) {
    return (
      <p className="text-warning icon">
        <div>
          <small className="text-success">{ratings} Star</small>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star gray"></i>
            <i className="fa-solid fa-star gray"></i>
            <i className="fa-solid fa-star gray"></i>
          </div>
        </div>
      </p>
    );
  } else if (ratings) {
    return <p className="text-warning icon">No Rating</p>;
  }
  return <div></div>;
};

export default Next;
