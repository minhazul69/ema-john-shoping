import React from "react";
import useProducts from "../../Hooks/useProducts";
import Next from "./next/next";
import SingleProduct from "./SingleProduct";

const SingleProductPage2 = () => {
  const [products, setProducts] = useProducts();
  return (
    <div>
      {products.slice(20, 40).map((product) => (
        <Next product={product}></Next>
      ))}
    </div>
  );
};

export default SingleProductPage2;
