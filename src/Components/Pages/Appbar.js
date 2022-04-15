import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Appbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">React CRUD_OPERATION</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "22px",
                color: "white",
                marginRight: "10px",
              }}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "22px",
                color: "white",
                marginRight: "10px",
              }}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "22px",
                color: "white",
                marginRight: "10px",
              }}
              to="/contact"
            >
              Contact
            </NavLink>
            {/* <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}
          </Nav>
          <Link to="/users/add" className="btn btn-outline-light">
            Add User
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
