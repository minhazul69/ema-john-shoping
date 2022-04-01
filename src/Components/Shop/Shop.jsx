import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import SingleProduct from "../Single-Product/SingleProduct";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (props) => {
    const newCart = [...cart, props];
    setCart(newCart);
  };
  return (
    <div className="container-fluid mt-5 pt-4">
      <div className="item-container">
        <div className="row mx-auto ">
          {products.map((product) => (
            <SingleProduct
              product={product}
              key={product.id}
              handleAddToCart={handleAddToCart}
            ></SingleProduct>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Card cart={cart}></Card>
      </div>
    </div>
  );
};

export default Shop;
