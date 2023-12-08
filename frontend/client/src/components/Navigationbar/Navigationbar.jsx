import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import { Navbar, Nav, Button } from "react-bootstrap";
import LoanEaseLogoBlueHorizontal from "./LoanEaseLogoBlueHorizontal.png";

import "./NavbarStyle.css";
import Dashboard from "../Dashboard/Dashboard";

const Navigationbar = () => {
  const location = useLocation();
  const [activeNavItem, setActiveNavItem] = useState("");

  useEffect(() => {
    // Extract the pathname from the current location
    const pathname = location.pathname;

    // Set the activeNavItem based on the current pathname
    setActiveNavItem(pathname);
  }, [location]);

  return (
    <Navbar className="d-flex justify-content-between align-items-center bg-white" style={{ zIndex: 1000 }} bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand>
          <img src={LoanEaseLogoBlueHorizontal} className="d-inline-block align-top logo_LoanEase img-fluid px-2" style={{ maxWidth: "180px", padding: "10px" }} alt="LoanEase" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle className="mx-2" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav custom-collapse" className="custom-navbar-collapse">
        <Nav className="ms-auto me-auto text-lg bg-white">
          <Nav.Link as={Link} to="/" className={activeNavItem === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/AboutPage" className={activeNavItem === "/AboutPage" ? "nav-link active" : "nav-link"}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/Contact" className={activeNavItem === "/Contact" ? "nav-link active" : "nav-link"}>
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/FaqPage" className={activeNavItem === "/FaqPage" ? "nav-link active" : "nav-link"}>
            FAQ
          </Nav.Link>
        </Nav>
        <Nav className="bg-white p-2">
          <Link to="/Login">
            <Button className="custom-Button" variant="primary">
              Login
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
