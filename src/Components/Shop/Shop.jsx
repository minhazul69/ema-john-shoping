import React, { useEffect, useState } from "react";
import useProducts from "../../Hooks/useProducts";

import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Card from "../Card/Card";
import SingleProduct from "../Single-Product/SingleProduct";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addProduct = products.find((product) => product.id === id);
      if (addProduct) {
        const quantity = storedCart[id];
        addProduct.quantity = quantity;
        saveCart.push(addProduct);
      }
    }
    setCart(saveCart);
  }, [products]);
  const handleAddToCart = (selectProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectProduct.id);
    if (!exists) {
      selectProduct.quantity = 1;
      newCart = [...cart, selectProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectProduct.id);
  };
  return (
    <div className="container-fluid mt-5 pt-4">
      <div className="item-container">
        <div className="row  ">
          {products.map((product) => (
            <SingleProduct
              product={product}
              key={product.id}
              handleAddToCart={() => handleAddToCart(product)}
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
