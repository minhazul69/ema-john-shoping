import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";

import { addToDb, deleteShoppingCart } from "../../utilities/fakedb";
import Card from "../Card/Card";
import SingleProduct from "../Single-Product/SingleProduct";
import "./Shop.css";

const Shop = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  // const [searchResult, setSearchResult] = useState([]);

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
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  // const handleSearch = (event) => {
  //   const searchText = event.target.value;
  //   const match = products.filter((product) =>
  //     product.name.includes(searchText)
  //   );
  //   setSearchResult(match);
  // };

  return (
    <div className="container-fluid mt-5 pt-4">
      <div className="item-container">
        <div>
          <form className="d-flex w-50 mx-auto mb-4">
            <input
              // onChange={handleSearch}
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
