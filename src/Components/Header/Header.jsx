import React from "react";
import "./Header.css";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div>
      <Navbar className="background" variant="dark" expand={false}>
        <Container>
          <Navbar.Brand href="#">
            <img width={"80%"} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
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
                <Nav.Link className="text-light N-link" href="#action1">
                  Order
                </Nav.Link>
                <Nav.Link className="text-light N-link" href="#action2">
                  Order Review
                </Nav.Link>
                <Nav.Link href="#action2" className="text-light N-link">
                  Manage Inventory
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
