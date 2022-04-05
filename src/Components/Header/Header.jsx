import React from "react";
import "./Header.css";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <Navbar className="background py-3" variant="dark" expand={false}>
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img width={"80%"} src={logo} alt="" />
            </Navbar.Brand>
          </Link>
          <ul className="header-nav-item">
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/shop">Shop</CustomLink>
            </li>
            <li>
              <CustomLink to="/order">Order</CustomLink>
            </li>
            <li>
              <CustomLink to="/review">review</CustomLink>
            </li>
          </ul>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="md-navbar"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton className=" close-button">
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src={logo} width={"60%"} alt="" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-dark">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/" className="text-light N-link text-decoration-none">
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="text-light N-link text-decoration-none"
                >
                  Shop
                </Link>
                <Link
                  to="/order"
                  className="text-light N-link text-decoration-none"
                >
                  Order
                </Link>
                <Link
                  to="/reviow"
                  className="text-light N-link text-decoration-none"
                >
                  Reviow
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
