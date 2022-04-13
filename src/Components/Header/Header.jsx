import React from "react";
import "./Header.css";
import { Navbar, Container, Nav, Offcanvas, Button } from "react-bootstrap";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
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
              <CustomLink to="/inventory">Inventory</CustomLink>
            </li>
            <li>
              <CustomLink to="/review">Review</CustomLink>
            </li>
            {user ? (
              <Button
                onClick={handleSignOut}
                variant="link shadow-none text-light border-secondary text-decoration-none fw-bold pb-2 border ms-3 rounded-0 bg-danger"
              >
                Logout
              </Button>
            ) : (
              <li>
                <CustomLink to="/login">Login</CustomLink>
              </li>
            )}
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
                  to="/inventory"
                  className="text-light N-link text-decoration-none"
                >
                  Inventory
                </Link>
                <Link
                  to="/reviow"
                  className="text-light N-link text-decoration-none"
                >
                  Reviow
                </Link>
                {user ? (
                  <Button
                    onClick={handleSignOut}
                    variant="link shadow-none text-light border-secondary text-decoration-none fw-bold pb-2 border ms-3 rounded-0 bg-danger mt-3"
                  >
                    Logout
                  </Button>
                ) : (
                  <Link
                    to="/login"
                    className="text-light N-link text-decoration-none"
                  >
                    Login
                  </Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
