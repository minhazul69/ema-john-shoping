import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import MainHeaderSection from "./Components/Main-Header-Section/MainHeaderSection";
import Shop from "./Components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Order from "./Components/Order/Order";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainHeaderSection />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
