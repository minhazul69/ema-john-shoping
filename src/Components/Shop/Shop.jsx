import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { addToDb, deleteShoppingCart } from "../../utilities/fakedb";
import Card from "../Card/Card";
import SingleProduct from "../Single-Product/SingleProduct";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart(products);
  const [pageCount, setPageCount] = useState(0);
  console.log(pageCount);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const fetchData = async () => {
    const link = await fetch("https://ema-john-1136.onrender.com/productCount");
    const data = await link.json();
    const count = data.count;
    const pages = Math.ceil(count / 10);
    return setPageCount(pages);
  };
  useEffect(() => {
    fetchData();
    fetch("https://ema-john-1136.onrender.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://ema-john-1136.onrender.com/product?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);
  const [searchResult, setSearchResult] = useState([]);

  const handleAddToCart = (selectProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectProduct._id);
    if (!exists) {
      selectProduct.quantity = 1;
      newCart = [...cart, selectProduct];
    } else {
      const rest = cart.filter((product) => product._id !== selectProduct._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectProduct._id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const match = products.filter((product) =>
      product.name.includes(searchText)
    );
    setSearchResult(match);
  };

  return (
    <div className="container-fluid mt-5 pt-4">
      <div className="item-container">
        <div>
          <form className="d-flex w-50 mx-auto mb-4">
            <input
              onChange={handleSearch}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="row  ">
          {products.map((product) => (
            <SingleProduct
              product={product}
              key={product._id}
              handleAddToCart={() => handleAddToCart(product)}
            ></SingleProduct>
          ))}
        </div>
        <div className="pagination ">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={page === number ? "selected" : ""}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="cart-container">
        <Card cart={cart} handleClearCart={handleClearCart}>
          {cart.length === 0 || (
            <Link to="/order">
              <button className="btn w-100 rounded-2 mt-3 text-light card-add-btn">
                Review Order <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Shop;
