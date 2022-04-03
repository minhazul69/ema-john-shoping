import React from "react";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import Card from "../Card/Card";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const [products, setProducst] = useProducts();
  const [cart, setCart] = useCart(products);
  return (
    <div className="container-fluid mt-4 pt-4 ">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem product={product} key={product.id} />
        ))}
      </div>
      <div className="cart-container pb-3 rounded-3">
        <Card cart={cart}></Card>
      </div>
    </div>
  );
};

export default Order;
