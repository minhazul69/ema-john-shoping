import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import MainHeaderSection from "./Components/Main-Header-Section/MainHeaderSection";
import Shop from "./Components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Order from "./Components/Order/Order";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainHeaderSection />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
