import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Card from "../Card/Card";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Order = () => {
  const [products, setProducst] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemoveCart = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="container-fluid mt-5 pt-4 ">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.id}
            handleRemoveCart={handleRemoveCart}
          />
        ))}
      </div>
      <div className="cart-container pb-3 rounded-3">
        <Card cart={cart} handleClearCart={handleClearCart}>
          {cart.length === 0 || (
            <Link
              to="/shipping"
              className="btn w-100 rounded-2 mt-3 text-light card-add-btn"
            >
              Proceed Checkout <i className="fa-solid fa-credit-card"></i>
            </Link>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Order;
