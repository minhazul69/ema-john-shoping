import { useEffect, useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];
    const keys = Object.keys(storedCart);
    fetch("http://localhost:5000/productByKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storedCart) {
          const addProduct = products.find((product) => product._id === id);
          if (addProduct) {
            const quantity = storedCart[id];
            addProduct.quantity = quantity;
            saveCart.push(addProduct);
          }
        }
        setCart(saveCart);
      });
  }, []);
  return [cart, setCart];
};
export default useCart;
