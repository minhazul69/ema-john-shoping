import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../../images/header-img.jpg";
import "./MainHeaderSection.css";
const MainHeaderSection = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 col-md-12">
          <p className="mb-5 pb-2 color">
            <small>Sale Uo To 70% off</small>
          </p>
          <h1 className="fw-bold">New Collection For Fall</h1>
          <p className="mb-4">
            Discover all the new arrivals of ready-to-wear collection.
          </p>
          <Link to="/shop" className="btn bg-color rounded-2 mt-5">
            Shop Now
          </Link>
        </div>
        <div className="col-lg-6 col-md-12 mt-5">
          <img className="img-fluid" src={headerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainHeaderSection;
